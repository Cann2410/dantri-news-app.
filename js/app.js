// app.js - phiên bản dùng dữ liệu JSON, không tự tạo bài báo mẫu

const DATA_VERSION = 'v10_json_articles';

let allArticles = [];
let allMenu = [];
let currentCategory = '';

document.addEventListener('DOMContentLoaded', async () => {
  await initArticlesData();
  await loadCategories();
  renderArticles(getArticlesForCategory(''));
});

/**
 * Nạp bài viết từ file JSON.
 * Không sử dụng dữ liệu mẫu cũ trong LocalStorage.
 */
async function initArticlesData() {
  try {
    const savedVersion = localStorage.getItem('data_version');

    if (savedVersion !== DATA_VERSION) {
      localStorage.removeItem('articles');
      localStorage.setItem('data_version', DATA_VERSION);
    }
  } catch (error) {
    console.warn('Không thể cập nhật LocalStorage:', error);
  }

  const candidates = [
    'data/posts.json',
    'js/initial-news.json'
  ];

  let lastError = null;

  for (const path of candidates) {
    try {
      const response = await fetch(
        `${path}?v=${Date.now()}`,
        { cache: 'no-store' }
      );

      if (!response.ok) continue;

      const json = await response.json();
      const records = Array.isArray(json) ? json : json.posts;

      if (!Array.isArray(records)) continue;

      allArticles = records
        .map(normalizeArticle)
        .filter(isUsableArticle);

      if (allArticles.length > 0) {
        try {
          localStorage.setItem(
            'articles',
            JSON.stringify(allArticles)
          );
        } catch (error) {
          console.warn(
            'Không thể lưu bài viết vào LocalStorage:',
            error
          );
        }

        return;
      }
    } catch (error) {
      lastError = error;
    }
  }

  // Không tự tạo bài viết giả nếu không tải được dữ liệu.
  allArticles = [];

  if (lastError) {
    console.error(
      'Không tải được dữ liệu bài viết:',
      lastError
    );
  }
}

/**
 * Chuẩn hóa cấu trúc bài viết.
 */
function normalizeArticle(article) {
  const category = Array.isArray(article.category)
    ? article.category
    : article.category
      ? [article.category]
      : [];

  const author =
    typeof article.author === 'object' && article.author !== null
      ? article.author.name || ''
      : article.author || '';

  return {
    id: String(article.id || ''),
    title: String(article.title || ''),
    slug: String(article.slug || ''),
    excerpt: String(article.excerpt || ''),
    content: String(article.content || ''),
    image: String(article.image || ''),
    author: author,
    category: category
      .map(value => String(value || '').trim())
      .filter(Boolean),
    publishedAt: String(article.publishedAt || ''),
    source: String(article.source || ''),
    url: String(article.url || '')
  };
}

/**
 * Chỉ sử dụng những bài viết có đủ thông tin cơ bản.
 */
function isUsableArticle(article) {
  return Boolean(
    article.id &&
    article.title &&
    article.url &&
    article.category.length
  );
}

function getArticles() {
  return [...allArticles];
}

/**
 * Tải cây chuyên mục từ categories.json.
 */
async function loadCategories() {
  try {
    const response = await fetch(
      `js/categories.json?v=${Date.now()}`,
      { cache: 'no-store' }
    );

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    allMenu = Array.isArray(data.menu)
      ? data.menu
      : [];

    renderNavbar(allMenu);
    renderFooterCategories(allMenu);
  } catch (error) {
    console.error(
      'Lỗi tải js/categories.json:',
      error
    );
  }
}

/**
 * Hiển thị menu điều hướng.
 * Khi bấm chuyên mục, trang sẽ lọc bài viết nội bộ,
 * không chuyển sang website Dân trí.
 */
function renderNavbar(menu) {
  const navbar = document.getElementById('navbar');

  if (!navbar) return;

  navbar.innerHTML = '';

  menu.forEach(item => {
    const li = document.createElement('li');
    const link = document.createElement('a');

    link.href = '#';
    link.textContent = item.title;

    link.addEventListener('click', event => {
      event.preventDefault();

      filterCategory(
        item.title === 'Home' ||
        item.title === 'Trang chủ'
          ? ''
          : item.title
      );
    });

    if (
      Array.isArray(item.children) &&
      item.children.length > 0
    ) {
      const submenu = document.createElement('ul');

      submenu.className = 'dropdown';

      item.children.forEach(child => {
        const childLi = document.createElement('li');
        const childLink = document.createElement('a');

        childLink.href = '#';
        childLink.textContent = child.title;

        childLink.addEventListener('click', event => {
          event.preventDefault();
          event.stopPropagation();

          filterCategory(child.title);
        });

        childLi.appendChild(childLink);
        submenu.appendChild(childLi);
      });

      li.appendChild(submenu);
    }

    li.appendChild(link);
    navbar.appendChild(li);
  });
}

/**
 * Hiển thị các chuyên mục ở chân trang.
 */
function renderFooterCategories(menu) {
  const footer = document.getElementById('footer-categories');

  if (!footer) return;

  footer.innerHTML = '';

  menu.slice(0, 5).forEach(item => {
    const li = document.createElement('li');
    const link = document.createElement('a');

    link.href = '#';
    link.textContent = item.title;

    link.addEventListener('click', event => {
      event.preventDefault();

      filterCategory(
        item.title === 'Home' ||
        item.title === 'Trang chủ'
          ? ''
          : item.title
      );
    });

    li.appendChild(link);
    footer.appendChild(li);
  });
}

function getCategoryString(category) {
  return Array.isArray(category)
    ? category.join(', ')
    : category || '';
}

function getAuthorName(author) {
  if (typeof author === 'object' && author !== null) {
    return author.name || '';
  }

  return author || '';
}

/**
 * Lấy danh sách bài viết theo chuyên mục.
 */
function getArticlesForCategory(categoryName) {
  const articles = getArticles();

  if (
    !categoryName ||
    categoryName === 'Home' ||
    categoryName === 'Trang chủ'
  ) {
    return sortArticlesNewest(articles);
  }

  // Mới nhất: hiển thị toàn bộ bài viết theo thời gian.
  if (categoryName === 'Mới nhất') {
    return sortArticlesNewest(articles);
  }

  const normalizedName = normalizeText(categoryName);

  return sortArticlesNewest(
    articles.filter(article =>
      article.category.some(category =>
        normalizeText(category) === normalizedName
      )
    )
  );
}

function normalizeText(value) {
  return String(value || '')
    .trim()
    .toLocaleLowerCase('vi-VN');
}

/**
 * Sắp xếp bài viết mới nhất lên đầu.
 */
function sortArticlesNewest(articles) {
  return [...articles].sort((a, b) => {
    const dateA = Date.parse(a.publishedAt) || 0;
    const dateB = Date.parse(b.publishedAt) || 0;

    return dateB - dateA;
  });
}

/**
 * Lọc bài viết khi người dùng chọn chuyên mục.
 */
function filterCategory(categoryName) {
  currentCategory = categoryName || '';

  const detailView = document.getElementById('detail-view');
  const newsView = document.getElementById('news-view');

  if (detailView) {
    detailView.style.display = 'none';
  }

  if (newsView) {
    newsView.style.display = 'block';
  }

  renderArticles(
    getArticlesForCategory(currentCategory)
  );
}

/**
 * Hiển thị danh sách bài viết.
 * Ba bài đầu được hiển thị ở khu vực nổi bật.
 */
function renderArticles(
  list = getArticlesForCategory(currentCategory)
) {
  const sorted = sortArticlesNewest(list);

  const topSection = document.getElementById('top-section');
  const remainingList = document.getElementById('remaining-posts');

  if (!topSection || !remainingList) {
    console.error(
      'Không tìm thấy top-section hoặc remaining-posts trong HTML.'
    );
    return;
  }

  topSection.innerHTML = '';
  remainingList.innerHTML = '';

  if (sorted.length === 0) {
    remainingList.innerHTML = `
      <p style="padding:20px;color:#666;">
        Chưa có dữ liệu bài viết cho chuyên mục này.
        Hãy kiểm tra file data/posts.json hoặc
        js/initial-news.json.
      </p>
    `;
    return;
  }

  const top3 = sorted.slice(0, 3);
  const remaining = sorted.slice(3);

  // Bài viết nổi bật đầu tiên.
  if (top3[0]) {
    const featured = document.createElement('div');

    featured.className = 'featured-post';

    featured.addEventListener('click', () => {
      showDetail(top3[0].id);
    });

    featured.innerHTML = `
      <img
        src="${escapeHtml(
          top3[0].image ||
          'https://via.placeholder.com/600x300'
        )}"
        alt="${escapeHtml(top3[0].title)}"
      >

      <div class="info">
        <h2>${escapeHtml(top3[0].title)}</h2>

        <p>${escapeHtml(top3[0].excerpt)}</p>

        <span class="post-meta">
          ${escapeHtml(top3[0].publishedAt)}
          |
          ${escapeHtml(
            getCategoryString(top3[0].category)
          )}
        </span>
      </div>
    `;

    topSection.appendChild(featured);
  }

  // Hai bài viết nổi bật bên cạnh.
  if (top3.length > 1) {
    const sideBox = document.createElement('div');

    sideBox.className = 'side-posts';

    top3.slice(1, 3).forEach(article => {
      const card = document.createElement('div');

      card.className = 'side-post-card';

      card.addEventListener('click', () => {
        showDetail(article.id);
      });

      card.innerHTML = `
        <img
          src="${escapeHtml(
            article.image ||
            'https://via.placeholder.com/100x75'
          )}"
          alt="${escapeHtml(article.title)}"
        >

        <div>
          <h3>${escapeHtml(article.title)}</h3>

          <span class="post-meta">
            ${escapeHtml(article.publishedAt)}
          </span>
        </div>
      `;

      sideBox.appendChild(card);
    });

    topSection.appendChild(sideBox);
  }

  // Các bài viết còn lại.
  remaining.forEach(article => {
    const element = document.createElement('div');

    element.className = 'post-item';

    element.addEventListener('click', () => {
      showDetail(article.id);
    });

    element.innerHTML = `
      <img
        src="${escapeHtml(
          article.image ||
          'https://via.placeholder.com/180x120'
        )}"
        alt="${escapeHtml(article.title)}"
      >

      <div class="post-item-content">
        <h3>${escapeHtml(article.title)}</h3>

        <p>${escapeHtml(article.excerpt)}</p>

        <div class="post-meta">
          ${
            article.author
              ? `Tác giả: ${escapeHtml(
                  getAuthorName(article.author)
                )} | `
              : ''
          }

          ${escapeHtml(article.publishedAt)}
          |
          Chuyên mục:
          ${escapeHtml(
            getCategoryString(article.category)
          )}
        </div>
      </div>
    `;

    remainingList.appendChild(element);
  });
}

/**
 * Hiển thị nội dung chi tiết của một bài viết.
 */
function showDetail(id) {
  const post = getArticles().find(
    article => article.id === id
  );

  if (!post) return;

  const newsView = document.getElementById('news-view');
  const detailView = document.getElementById('detail-view');

  if (!newsView || !detailView) return;

  newsView.style.display = 'none';
  detailView.style.display = 'block';

  detailView.innerHTML = `
    <button
      id="back-to-news"
      style="
        margin-bottom:15px;
        padding:8px 16px;
        cursor:pointer;
        background:#e5e7eb;
        border:none;
        border-radius:4px;
        font-weight:600;
      "
    >
      ← Quay lại
    </button>

    <div class="article-detail">
      <h1>${escapeHtml(post.title)}</h1>

      <div class="meta-info">
        <span>
          Chuyên mục
