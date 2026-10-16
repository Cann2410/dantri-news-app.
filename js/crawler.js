
async function crawlDantriArticle(url) {
  return fetchAndNormalizeArticle(url);
}

async function fetchAndNormalizeArticle(articleUrl) {
  const url = validateArticleUrl(articleUrl);

  const proxies = [
    `https://api.allorigins.win/get?url=${encodeURIComponent(url.href)}`,
    `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url.href)}`
  ];

  let lastError = "Không thể truy cập nội dung bài viết.";

  for (const proxyUrl of proxies) {
    try {
      const response = await fetchWithTimeout(proxyUrl, 10000);

      if (!response.ok) {
        lastError = `Máy chủ trung gian trả về HTTP ${response.status}.`;
        continue;
      }

      let html;

      if (proxyUrl.includes("allorigins.win")) {
        const result = await response.json();
        html = result.contents;
      } else {
        html = await response.text();
      }

      if (typeof html !== "string" || !html.trim()) {
        lastError = "Không nhận được HTML của bài viết.";
        continue;
      }

      const article = parseArticleHtml(html, url);

      // Chỉ chấp nhận kết quả có tiêu đề và nội dung bài viết thật.
      if (article.title && article.content) {
        return article;
      }

      lastError =
        "Không tìm thấy tiêu đề hoặc nội dung bài viết trong HTML.";
    } catch (error) {
      lastError = error.message || "Lỗi khi tải bài viết.";
      console.warn("Không thể crawl qua proxy:", error);
    }
  }

  throw new Error(
    `${lastError} Hãy kiểm tra URL hoặc thử lại sau. ` +
    "Không có dữ liệu bài viết nào được tạo thay thế."
  );
}

/**
 * Chỉ chấp nhận URL bài viết trên dantri.com.vn.
 */
function validateArticleUrl(value) {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error("Vui lòng nhập URL bài viết.");
  }

  let url;

  try {
    url = new URL(value.trim());
  } catch {
    throw new Error("URL không hợp lệ.");
  }

  if (url.protocol !== "https:" && url.protocol !== "http:") {
    throw new Error("URL phải sử dụng HTTP hoặc HTTPS.");
  }

  if (url.hostname !== "dantri.com.vn") {
    throw new Error("Chỉ hỗ trợ bài viết từ dantri.com.vn.");
  }

  if (!/\.htm$/i.test(url.pathname)) {
    throw new Error(
      "URL chưa có dạng đường dẫn bài viết Dân trí (.htm)."
    );
  }

  // Bỏ tham số và dấu # để chuẩn hóa URL.
  url.search = "";
  url.hash = "";

  return url;
}

/**
 * Tải dữ liệu với thời gian chờ giới hạn.
 */
async function fetchWithTimeout(url, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, {
      method: "GET",
      signal: controller.signal
    });
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Đọc metadata và nội dung từ HTML của bài viết.
 */
function parseArticleHtml(html, articleUrl) {
  const doc = new DOMParser().parseFromString(html, "text/html");

  const getText = (selectors) => {
    for (const selector of selectors) {
      const element = doc.querySelector(selector);
      const value = element?.textContent?.trim();

      if (value) return cleanText(value);
    }

    return "";
  };

  const getMeta = (names) => {
    for (const name of names) {
      const element = doc.querySelector(
        `meta[property="${name}"], meta[name="${name}"]`
      );

      const value = element?.getAttribute("content")?.trim();

      if (value) return cleanText(value);
    }

    return "";
  };

  const title =
    getMeta(["og:title", "twitter:title"]) ||
    getText([
      "#articleContent [data-slot='title']",
      "h1.title-page",
      "h1.detail-title",
      "h1"
    ]);

  const excerpt =
    getMeta(["og:description", "description", "twitter:description"]) ||
    getText([
      "#articleContent [data-slot='sapo']",
      ".singular-sapo",
      ".detail-sapo",
      "h2.sapo"
    ]);

  const contentElement = doc.querySelector(
    "#articleContent [data-slot='content'], " +
    ".singular-content, .detail-content"
  );

  let content = "";

  if (contentElement) {
    // Chỉ xóa các thành phần không thuộc nội dung bài viết.
    contentElement
      .querySelectorAll(
        "script, style, .related-news, .ads, " +
        ".social, .article-related, iframe"
      )
      .forEach(element => element.remove());

    content = Array.from(contentElement.querySelectorAll("p"))
      .map(p => cleanText(p.textContent || ""))
      .filter(Boolean)
      .join("\n\n");
  }

  // Lấy tác giả từ metadata hoặc vùng hiển thị tác giả.
  const author =
    getMeta(["author", "article:author"]) ||
    getText([
      "#articleContent [rel='author']",
      ".author-name",
      ".author",
      ".detail-author"
    ]);

  // Ưu tiên thời gian ISO từ metadata.
  const publishedRaw =
    getMeta(["article:published_time", "datePublished", "pubdate"]) ||
    doc.querySelector("time[datetime]")?.getAttribute("datetime") ||
    doc.querySelector("time")?.textContent?.trim() ||
    "";

  const publishedAt = normalizeDate(publishedRaw);

  const image =
    getMeta(["og:image", "twitter:image"]) ||
    getImageFromContent(contentElement, articleUrl);

  const slug = extractSlug(articleUrl.href);
  const id = extractPostId(articleUrl.href);
  const category = extractCategory(articleUrl);

  return {
    id,
    title,
    slug,
    excerpt,
    content,
    author,
    category,
    publishedAt,
    source: "dantri.com.vn",
    url: articleUrl.href,
    ...(image ? { image } : {})
  };
}

/**
 * Loại bỏ khoảng trắng thừa nhưng giữ nội dung chữ.
 */
function cleanText(value) {
  return String(value || "")
    .replace(/\u00a0/g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/\n[ \t]+/g, "\n")
    .trim();
}

/**
 * Chuẩn hóa ngày đăng thành ISO 8601 nếu xác định được.
 * Không tự dùng thời gian hiện tại để thay thế.
 */
function normalizeDate(value) {
  if (!value) return "";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return cleanText(value);
  }

  return date.toISOString();
}

/**
 * Lấy URL ảnh thật, nếu có.
 */
function getImageFromContent(contentElement, baseUrl) {
  if (!contentElement) return "";

  const images = contentElement.querySelectorAll("img");

  for (const img of images) {
    const src =
      img.getAttribute("data-src") ||
      img.getAttribute("data-original") ||
      img.getAttribute("src");

    if (!src || src.startsWith("data:")) continue;

    try {
      const imageUrl = new URL(src, baseUrl);

      if (
        imageUrl.protocol === "https:" ||
        imageUrl.protocol === "http:"
      ) {
        return imageUrl.href;
      }
    } catch {
      // Bỏ qua URL ảnh không hợp lệ.
    }
  }

  return "";
}

/**
 * Tạo ID ổn định từ mã bài viết trên URL.
 */
function extractPostId(url) {
  const match = url.match(/-(\d+)\.htm$/i);

  if (match) return `dtri-${match[1]}`;

  return `dtri-${extractSlug(url)}`;
}

/**
 * Lấy slug từ đường dẫn.
 */
function extractSlug(url) {
  try {
    const pathname = new URL(url).pathname;
    const fileName = pathname.split("/").filter(Boolean).pop() || "";

    return fileName.replace(/\.htm$/i, "");
  } catch {
    return "";
  }
}

/**
 * Xác định chuyên mục từ đường dẫn URL.
 */
function extractCategory(url) {
  const pathname = (
    typeof url === "string" ? new URL(url) : url
  ).pathname;

  const segments = pathname
    .split("/")
    .filter(Boolean)
    .map(segment => segment.replace(/\.htm$/i, ""));

  const categoryMap = {
    "tin-moi-nhat": "Mới nhất",
    "the-gioi": "Thế giới",
    "quan-su": "Quân sự",
    "phan-tich-binh-luan": "Phân tích - Bình luận",
    "the-gioi-do-day": "Thế giới đó đây",
    "kieu-bao": "Kiều bào",
    "thoi-su": "Thời sự",
    "chinh-tri": "Chính trị",
    "giao-thong": "Giao thông",
    "moi-truong": "Môi trường",
    "nong-tren-mang": "Nóng trên mạng",
    "bat-dong-san": "Bất động sản",
    "dt360": "Dân trí 360"
  };

  // Chọn chuyên mục cụ thể nhất trong đường dẫn.
  for (let i = segments.length - 1; i >= 0; i--) {
    if (categoryMap[segments[i]]) {
      return categoryMap[segments[i]];
    }
  }

  return "";
}
