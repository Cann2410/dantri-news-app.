
const DATA_VERSION = 'v4_full_40_articles';

const INITIAL_ARTICLES = [
  // --- BẤT ĐỘNG SẢN (10 BÀI) ---
  {
    id: "dtri-bds-01",
    title: "Hà Nội tính cơ chế bồi thường đất đặc biệt cho 7 dự án đường sắt",
    slug: "ha-noi-tinh-co-che-boi-thuong-dat-dac-biet-cho-7-du-an-duong-sat",
    excerpt: "Hà Nội đang xem xét cơ chế bồi thường, hỗ trợ và tái định cư đặc biệt để triển khai 7 dự án đường sắt quan trọng trên địa bàn thành phố.",
    content: "Hà Nội đang nghiên cứu và đề xuất cơ chế bồi thường, hỗ trợ và tái định cư đặc biệt nhằm tháo gỡ khó khăn trong công tác giải phóng mặt bằng cho 7 dự án đường sắt trọng điểm. Đây là nhóm dự án hạ tầng giao thông có vai trò quan trọng trong việc phát triển mạng lưới vận tải công cộng và giảm ùn tắc đô thị.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600",
    author: "Văn Hưng",
    category: "Bất động sản",
    publishedAt: "2026-10-15 08:00",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/bat-dong-san/ha-noi-tinh-co-che-boi-thuong-dat-dac-biet-cho-7-du-an-duong-sat-20260928122246655.htm"
  },
  {
    id: "dtri-bds-02",
    title: "Thị trường chung cư phân khúc bình dân tiếp tục khan hiếm nguồn cung",
    slug: "thi-truong-chung-cu-phan-khuc-binh-dan-tiep-tuc-khan-hiem-nguon-cung",
    excerpt: "Nhu cầu nhà ở thực của người dân tăng cao nhưng số lượng dự án mới chào bán trong quý III khá hạn chế.",
    content: "Báo cáo thị trường bất động sản mới nhất cho thấy nguồn cung căn hộ giá bình dân chỉ chiếm chưa đầy 10% tổng lượng sản phẩm chào bán mới.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600",
    author: "Thu Hương",
    category: "Bất động sản",
    publishedAt: "2026-10-14 16:30",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/bat-dong-san/thi-truong-chung-cu-20261014120000003.htm"
  },
  {
    id: "dtri-bds-03",
    title: "Giá đất nền vùng ven có dấu hiệu phục hồi nhẹ trong quý III",
    slug: "gia-dat-nen-vung-ven-co-dau-hieu-phuc-hoi-nhe-trong-quy-iii",
    excerpt: "Lượng giao dịch đất nền tại một số huyện ngoại thành bắt đầu gia tăng nhờ thông tin quy hoạch hạ tầng.",
    content: "Ghi nhận từ các sàn giao dịch bất động sản cho thấy phân khúc đất nền có pháp lý chuẩn chỉnh đang thu hút sự quan tâm lớn.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600",
    author: "Hoàng Nam",
    category: "Bất động sản",
    publishedAt: "2026-10-13 14:20",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/bat-dong-san/gia-dat-nen-vung-ven.htm"
  },
  {
    id: "dtri-bds-04",
    title: "Đề xuất quy định mới về cấp sổ đỏ cho nhà đất không có giấy tờ",
    slug: "de-xuat-quy-dinh-moi-ve-cap-so-do-cho-nha-dat-khong-co-giay-to",
    excerpt: "Dự thảo sửa đổi bổ sung các trường hợp hộ gia đình sử dụng đất ổn định từ lâu sẽ được xem xét cấp chứng nhận.",
    content: "Bộ Tài nguyên và Môi trường đang lấy ý kiến về việc tháo gỡ vướng mắc trong thủ tục cấp giấy chứng nhận quyền sử dụng đất.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600",
    author: "Minh Đức",
    category: "Bất động sản",
    publishedAt: "2026-10-12 11:15",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/bat-dong-san/de-xuat-quy-dinh-cap-so-do.htm"
  },
  {
    id: "dtri-bds-05",
    title: "Nguồn cung văn phòng cho thuê tại TPHCM tăng mạnh cuối năm",
    slug: "nguon-cung-van-phong-cho-thue-tai-tphcm-tang-manh-cuoi-nam",
    excerpt: "Hàng loạt tòa tháp văn phòng hạng A và B hoàn thiện đưa vào vận hành tại khu vực trung tâm.",
    content: "Thị trường văn phòng cho thuê đón nhận thêm hàng trăm ngàn mét vuông diện tích mới, đáp ứng nhu cầu mở rộng quy mô doanh nghiệp.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    author: "Lê Anh",
    category: "Bất động sản",
    publishedAt: "2026-10-11 09:45",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/bat-dong-san/van-phong-tphcm.htm"
  },
  {
    id: "dtri-bds-06",
    title: "Nhiều ngân hàng hạ lãi suất cho vay mua nhà về mức hấp dẫn",
    slug: "nhieu-ngan-hang-ha-lai-suat-cho-vay-mua-nha-ve-muc-hap-dan",
    excerpt: "Gói ưu đãi lãi suất vay mua nhà cố định năm đầu giúp người mua nhà giảm bớt áp lực tài chính.",
    content: "Lãi suất cho vay mua nhà thương mại dao động ở mức ưu đãi từ 5.5% đến 7%/năm trong 12 tháng đầu tiên.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600",
    author: "Thanh Vân",
    category: "Bất động sản",
    publishedAt: "2026-10-10 15:10",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/bat-dong-san/ha-lai-suat-vay-mua-nha.htm"
  },
  {
    id: "dtri-bds-07",
    title: "Siết chặt quản lý hoạt động đấu giá đất tại các huyện ngoại thành",
    slug: "siet-chat-quan-ly-hoat-dong-dau-gia-dat-tai-cac-huyen-ngoai-thanh",
    excerpt: "Các cơ quan chức năng tăng cường kiểm tra nhằm tránh tình trạng thổi giá, bỏ cọc gây nhiễu loạn.",
    content: "Việc rà soát quy trình đấu giá đất giúp đảm bảo tính công khai, minh bạch, hạn chế đẩy giá bất động sản bất hợp lý.",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600",
    author: "Quang Huy",
    category: "Bất động sản",
    publishedAt: "2026-10-09 10:30",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/bat-dong-san/siet-chat-dau-gia-dat.htm"
  },
  {
    id: "dtri-bds-08",
    title: "Bất động sản nghỉ dưỡng ghi nhận tín hiệu khả quan từ khách quốc tế",
    slug: "bat-dong-san-nghi-duong-ghi-nhan-tin-hieu-kha-quan-tu-khach-quoc-te",
    excerpt: "Số lượt khách du lịch quốc tế tăng cao thúc đẩy công suất thuê phòng tại các khu resort ven biển.",
    content: "Các thủ phủ du lịch như Phú Quốc, Nha Trang, Đà Nẵng ghi nhận tỷ lệ lấp đầy phân khúc biệt thự nghỉ dưỡng cao.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600",
    author: "Ngọc Trinh",
    category: "Bất động sản",
    publishedAt: "2026-10-08 17:00",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/bat-dong-san/bds-nghi-duong.htm"
  },
  {
    id: "dtri-bds-09",
    title: "Xu hướng xây dựng công trình xanh lan rộng tại các đô thị lớn",
    slug: "xu-huong-xay-dung-cong-trinh-xanh-lan-rong-tai-cac-do-thi-lon",
    excerpt: "Các dự án đạt chứng chỉ tiêu chuẩn xanh ESG thu hút sự quan tâm của khách hàng hiện đại.",
    content: "Tiêu chuẩn tiết kiệm năng lượng, sử dụng vật liệu thân thiện môi trường trở thành tiêu chí cạnh tranh hàng đầu.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600",
    author: "Bảo An",
    category: "Bất động sản",
    publishedAt: "2026-10-07 13:40",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/bat-dong-san/cong-trinh-xanh.htm"
  },
  {
    id: "dtri-bds-10",
    title: "Tháo gỡ vướng mắc pháp lý cho hàng loạt dự án bất động sản trọng điểm",
    slug: "thao-go-vuong-mac-phap-ly-cho-hang-loat-du-an-bat-dong-san-trong-diem",
    excerpt: "Tổ công tác liên ngành tích cực đôn đốc giải quyết khó khăn cho các dự án dở dang.",
    content: "Hàng chục dự án quy mô lớn đã được phê duyệt điều chỉnh quy hoạch chi tiết, sẵn sàng tái khởi công.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    author: "Văn Hưng",
    category: "Bất động sản",
    publishedAt: "2026-10-06 08:30",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/bat-dong-san/thao-go-vuong-mac.htm"
  },

  // --- THỜI SỰ (10 BÀI) ---
  {
    id: "dtri-ts-01",
    title: "Tổng Bí thư, Chủ tịch nước: Pháp luật phải đủ ổn định để người dân yên tâm",
    slug: "tong-bi-thu-chu-tich-nuoc-phap-luat-phai-du-on-dinh-de-nguoi-dan-yen-tam",
    excerpt: "Tổng Bí thư, Chủ tịch nước nhấn mạnh yêu cầu xây dựng hệ thống pháp luật ổn định, đồng bộ, dễ tiếp cận.",
    content: "Phát biểu tại buổi làm việc về công tác xây dựng và hoàn thiện thể chế, Tổng Bí thư, Chủ tịch nước khẳng định hệ thống pháp luật đóng vai trò nền tảng cho sự phát triển bền vững.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600",
    author: "Nguyễn Hoàng",
    category: "Thời sự",
    publishedAt: "2026-10-15 07:30",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/thoi-su/tong-bi-thu-chu-tich-nuoc-phap-luat-phai-du-on-dinh-de-nguoi-dan-yen-tam-20260928141449559.htm"
  },
  {
    id: "dtri-ts-02",
    title: "Mở rộng đại lộ cửa ngõ phía Tây nhằm giảm tải ùn tắc giao thông",
    slug: "mo-rong-dai-lo-cua-ngo-phia-tay-nham-giam-tai-un-tac-giao-thong",
    excerpt: "Dự án mở rộng đại lộ chính kết nối các tỉnh miền Tây với trung tâm thành phố chính thức khởi công giai đoạn 2.",
    content: "Công trình nâng cấp tuyến đại lộ trọng điểm có tổng chiều dài hơn 15km với quy mô 8 làn xe cơ giới.",
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=600",
    author: "Minh Tuấn",
    category: "Thời sự",
    publishedAt: "2026-10-14 18:00",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/thoi-su/mo-rong-dai-lo.htm"
  },
  {
    id: "dtri-ts-03",
    title: "Tăng cường kiểm tra an toàn giao thông trên các tuyến cao tốc trọng điểm",
    slug: "tang-cuong-kiem-tra-an-toan-giao-thong-tren-cac-tuyen-cao-toc",
    excerpt: "Cảnh sát giao thông phối hợp lực lượng tuần tra ứng dụng công nghệ giám sát tốc độ tự động.",
    content: "Lực lượng chức năng tăng cường xử lý các vi phạm dừng đỗ sai quy định, chạy quá tốc độ và nồng độ cồn.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600",
    author: "Hùng Cường",
    category: "Thời sự",
    publishedAt: "2026-10-13 16:45",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/thoi-su/giao-thong-cao-toc.htm"
  },
  {
    id: "dtri-ts-04",
    title: "Hà Nội đẩy nhanh tiến độ xử lý ô nhiễm nước các sông nội đô",
    slug: "ha-noi-day-nhanh-tien-do-xu-ly-o-nhiem-nuoc-cac-song-noi-do",
    excerpt: "Hệ thống nhà máy xử lý nước thải công suất lớn tích cực lắp đặt tuyến ống thu gom nước thải.",
    content: "Thành phố tập trung nguồn lực tách triệt để nước thải chưa qua xử lý xả thẳng ra sông Tô Lịch, sông Lừ.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
    author: "Thu Trang",
    category: "Thời sự",
    publishedAt: "2026-10-12 10:20",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/thoi-su/moi-truong-song-noi-do.htm"
  },
  {
    id: "dtri-ts-05",
    title: "Đề xuất phương án nghỉ Tết Nguyên đán 2027 kéo dài 9 ngày",
    slug: "de-xuat-phuong-an-nghi-tet-nguyen-dan-2027-keo-dai-9-ngay",
    excerpt: "Bộ Lao động - Thương binh và Xã hội lấy ý kiến các bộ ngành về lịch nghỉ Tết âm lịch.",
    content: "Phương án đề xuất nghỉ từ 28 tháng Chạp năm Bính Ngọ đến hết mùng 7 tháng Giêng năm Đinh Mùi.",
    image: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=600",
    author: "Hải Yến",
    category: "Thời sự",
    publishedAt: "2026-10-11 14:15",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/thoi-su/lich-nghi-tet.htm"
  },
  {
    id: "dtri-ts-06",
    title: "Khởi công xây dựng cầu mới kết nối hai bờ sông Hồng",
    slug: "khoi-cong-xay-dung-cau-moi-ket-noi-hai-bo-song-hong",
    excerpt: "Công trình cầu vượt sông Hồng hiện đại góp phần hoàn thiện hạ tầng giao thông kết nối phía Bắc.",
    content: "Cây cầu có thiết kế kiến trúc dạng vòm thép hiện đại, dài hơn 3km với tổng mức đầu tư hơn 8.000 tỷ đồng.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600",
    author: "Minh Tuấn",
    category: "Thời sự",
    publishedAt: "2026-10-10 09:00",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/thoi-su/khoi-cong-cau-song-hong.htm"
  },
  {
    id: "dtri-ts-07",
    title: "Triển khai chiến dịch tiêm chủng mở rộng cho trẻ em toàn quốc",
    slug: "trien-khai-chien-dich-tiem-chung-mo-rong-cho-tre-em-toan-quoc",
    excerpt: "Bộ Y tế cung ứng đầy đủ các loại vắc xin trong chương trình tiêm chủng miễn phí.",
    content: "Các trạm y tế xã phường đồng loạt tổ chức tiêm chủng an toàn, đảm bảo tỷ lệ bao phủ trên 95%.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600",
    author: "Nguyễn Hoàng",
    category: "Thời sự",
    publishedAt: "2026-10-09 11:30",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/thoi-su/tiem-chung-mo-rong.htm"
  },
  {
    id: "dtri-ts-08",
    title: "Xử lý nghiêm các vi phạm về đăng tải thông tin sai sự thật trên mạng",
    slug: "xu-ly-nghiem-cac-vi-pham-dang-tai-thong-tin-sai-su-that-tren-mang",
    excerpt: "Cơ quan công an xử phạt nhiều cá nhân phát tán tin đồn thất thiệt gây hoang mang dư luận.",
    content: "Bộ Thông tin và Truyền thông tăng cường rà soát không gian mạng, yêu cầu gỡ bỏ kịp thời các nội dung độc hại.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600",
    author: "Quang Huy",
    category: "Thời sự",
    publishedAt: "2026-10-08 15:45",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/thoi-su/nong-tren-mang-xu-ly-tin-gia.htm"
  },
  {
    id: "dtri-ts-09",
    title: "Không khí lạnh tăng cường gây mưa rào và giảm nhiệt độ diện rộng",
    slug: "khong-khi-lanh-tang-cuong-gay-mua-rao-va-giam-nhiet-do-dien-rong",
    excerpt: "Trung tâm Dự báo Khí tượng Thủy văn Quốc gia cảnh báo đợt gió mùa đông bắc mới.",
    content: "Các tỉnh Bắc Bộ và Bắc Trung Bộ nền nhiệt giảm sâu từ 4-6 độ C, vùng núi cao có nơi dưới 12 độ C.",
    image: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600",
    author: "Thu Trang",
    category: "Thời sự",
    publishedAt: "2026-10-07 07:10",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/thoi-su/khong-khi-lanh-tang-cuong.htm"
  },
  {
    id: "dtri-ts-10",
    title: "Hiện đại hóa hệ thống quan trắc môi trường không khí tại các thành phố",
    slug: "hien-dai-hoa-he-thong-quan-trac-moi-truong-khong-khi",
    excerpt: "Lắp đặt thêm hàng chục trạm quan trắc tự động kết nối dữ liệu cập nhật theo thời gian thực.",
    content: "Dữ liệu chỉ số chất lượng không khí (AQI) được công khai liên tục trên phần mềm di động.",
    image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?w=600",
    author: "Minh Tuấn",
    category: "Thời sự",
    publishedAt: "2026-10-06 16:00",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/thoi-su/moi-truong-quan-trac-aqi.htm"
  },

  // --- THẾ GIỚI (10 BÀI) ---
  {
    id: "dtri-tg-01",
    title: "Căng thẳng địa chính trị ảnh hưởng đến thị trường năng lượng toàn cầu",
    slug: "cang-thang-dia-chinh-tri-anh-huong-den-thi-truong-nang-luong-toan-cau",
    excerpt: "Các diễn biến quân sự mới tại nhiều khu vực nóng đang khiến giá dầu và khí đốt biến động mạnh.",
    content: "Thị trường năng lượng toàn cầu tiếp tục ghi nhận các đợt tăng giá do lo ngại gián đoạn chuỗi cung ứng tại các tuyến đường hàng hải chiến lược.",
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=600",
    author: "Thanh Bình",
    category: "Thế giới",
    publishedAt: "2026-10-15 06:45",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/the-gioi/cang-thang-dia-chinh-tri.htm"
  },
  {
    id: "dtri-tg-02",
    title: "Hội nghị thượng đỉnh G20 thảo luận về biến đổi khí hậu và kinh tế xanh",
    slug: "hoi-nghi-thuong-dinh-g20-thao-luan-ve-bien-doi-khi-hau",
    excerpt: "Lãnh đạo các nền kinh tế lớn cam kết gia tăng ngân sách cho chuyển dịch năng lượng sạch.",
    content: "Tuyên bố chung của hội nghị nhấn mạnh việc thúc đẩy tài chính khí hậu, hỗ trợ các nước đang phát triển tiếp cận công nghệ mới.",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600",
    author: "Anh Quân",
    category: "Thế giới",
    publishedAt: "2026-10-14 13:20",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/the-gioi/g20-thuong-dinh-khi-hau.htm"
  },
  {
    id: "dtri-tg-03",
    title: "Tên lửa vũ trụ thế hệ mới thử nghiệm thành công quỹ đạo trái đất",
    slug: "ten-lua-vu-tru-the-he-moi-thu-nghiem-thanh-cong",
    excerpt: "Cơ quan không gian quốc tế đánh giá cao tính năng tái sử dụng của động cơ đẩy mới.",
    content: "Chuyến bay thử nghiệm mở ra triển vọng giảm đáng kể chi phí vận chuyển hàng hóa lên Trạm Vũ trụ Quốc tế.",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=600",
    author: "Thanh Bình",
    category: "Thế giới",
    publishedAt: "2026-10-13 20:10",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/the-gioi/ten-lua-vu-tru-moi.htm"
  },
  {
    id: "dtri-tg-04",
    title: "Các nước Châu Âu tăng cường an ninh lương thực trước mùa đông",
    slug: "cac-nuoc-chau-au-tang-cuong-an-ninh-luong-thuc",
    excerpt: "Thắt chặt quản lý dự trữ ngũ cốc và hỗ trợ người nông dân ứng phó với biến động thời tiết.",
    content: "Chính sách gia tăng dự trữ chiến lược giúp đảm bảo nguồn cung thực phẩm thiết yếu ổn định.",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600",
    author: "Phương Thảo",
    category: "Thế giới",
    publishedAt: "2026-10-12 15:30",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/the-gioi/an-ninh-luong-thuc-chau-au.htm"
  },
  {
    id: "dtri-tg-05",
    title: "Mỹ và Liên minh Châu Âu đạt thỏa thuận thương mại công nghệ mới",
    slug: "my-va-lien-minh-chau-au-dat-thoa-thuan-thuong-mai-cong-nghe",
    excerpt: "Cắt giảm rào cản thuế quan đối với các linh kiện bán dẫn và trí tuệ nhân tạo.",
    content: "Thỏa thuận hợp tác chiến lược thúc đẩy chuỗi cung ứng công nghệ cao an toàn giữa hai bên bờ Đại Tây Dương.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600",
    author: "Anh Quân",
    category: "Thế giới",
    publishedAt: "2026-10-11 11:00",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/the-gioi/thoa-thuan-cong-nghe-my-eu.htm"
  },
  {
    id: "dtri-tg-06",
    title: "Liên Hợp Quốc kêu gọi viện trợ khẩn cấp cho các khu vực thiên tai",
    slug: "lien-hop-quoc-keu-goi-vien-tro-khan-cap-cho-cac-khu-vuc-thien-tai",
    excerpt: "Hàng triệu người dân chịu ảnh hưởng nghiêm trọng bởi bão lũ tại khu vực Nam Á.",
    content: "Các tổ chức nhân đạo quốc tế khẩn trương vận chuyển lương thực, nước sạch và trang thiết bị y tế.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600",
    author: "Thanh Bình",
    category: "Thế giới",
    publishedAt: "2026-10-10 18:20",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/the-gioi/lhq-vien-tro-thien-tai.htm"
  },
  {
    id: "dtri-tg-07",
    title: "Tình hình kinh tế Châu Á ghi nhận mức tăng trưởng tích cực",
    slug: "tinh-hinh-kinh-te-chau-a-ghi-nhan-muc-tang-truong-tich-cuc",
    excerpt: "Sức mua nội địa và hoạt động xuất khẩu công nghệ là động lực tăng trưởng chính.",
    content: "Báo cáo của Ngân hàng Phát triển Châu Á (ADB) nâng dự báo tăng trưởng khu vực lên mức 4.9%.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    author: "Phương Thảo",
    category: "Thế giới",
    publishedAt: "2026-10-09 09:15",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/the-gioi/kinh-te-chau-a-tang-truong.htm"
  },
  {
    id: "dtri-tg-08",
    title: "Đột phá mới trong nghiên cứu y học ứng dụng trí tuệ nhân tạo",
    slug: "dot-pha-moi-trong-nghien-cuu-y-hoc-ung-dung-tri-tue-nhan-tao",
    excerpt: "Mô hình AI mới hỗ trợ phát hiện sớm các tế bào ung thư với độ chính xác trên 98%.",
    content: "Công trình nghiên cứu thử nghiệm lâm sàng tại các bệnh viện lớn cho thấy AI rút ngắn thời gian chẩn đoán.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600",
    author: "Anh Quân",
    category: "Thế giới",
    publishedAt: "2026-10-08 14:00",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/the-gioi/dot-pha-y-hoc-ai.htm"
  },
  {
    id: "dtri-tg-09",
    title: "Nhật Bản thúc đẩy năng lượng tái tạo hướng tới trung hòa carbon",
    slug: "nhat-ban-thuc-day-nang-luong-tai-tao-huong-toi-trung-hoa-carbon",
    excerpt: "Đầu tư mạnh mẽ vào hệ thống điện gió ngoài khơi và công nghệ pin lưu trữ hydro.",
    content: "Chính phủ Nhật Bản ban hành chiến lược xanh mới với mục tiêu nâng tỷ trọng năng lượng tái tạo lên 40%.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600",
    author: "Phương Thảo",
    category: "Thế giới",
    publishedAt: "2026-10-07 10:45",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/the-gioi/nhat-ban-nang-luong-xanh.htm"
  },
  {
    id: "dtri-tg-10",
    title: "Khủng hoảng giá sinh hoạt tại nhiều quốc gia dần hạ nhiệt",
    slug: "khung-hoang-gia-sinh-hoat-tai-nhieu-quoc-gia-dan-ha-nhiet",
    excerpt: "Lạm phát tiêu dùng giảm về mức mục tiêu nhờ chính sách tiền tệ linh hoạt.",
    content: "Chỉ số giá tiêu dùng tại Mỹ và Châu Âu ghi nhận mức tăng chậm nhất trong vòng 3 năm qua.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600",
    author: "Thanh Bình",
    category: "Thế giới",
    publishedAt: "2026-10-06 11:20",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/the-gioi/ha-nhiet-lam-phat.htm"
  },

  // --- DÂN TRÍ 360 (10 BÀI) ---
  {
    id: "dtri-360-01",
    title: "Trải nghiệm không gian công nghệ thông minh tại triển lãm đổi mới sáng tạo",
    slug: "trai-nghiem-khong-gian-cong-nghe-thong-minh",
    excerpt: "Các thiết bị gia dụng kết nối AI và công nghệ thực tế ảo thu hút đông đảo khách tham quan.",
    content: "Triển lãm giới thiệu những thành tựu công nghệ mới nhất giúp tối ưu hóa cuộc sống đô thị.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600",
    author: "Khánh Linh",
    category: "Dân trí 360",
    publishedAt: "2026-10-15 07:00",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/dt360/trien-lam-cong-nghe.htm"
  },
  {
    id: "dtri-360-02",
    title: "Góc nhìn đa chiều về xu hướng phát triển trí tuệ nhân tạo AI năm 2026",
    slug: "goc-nhin-da-chieu-ve-xu-huong-phat-trien-tri-tue-nhan-tao",
    excerpt: "Phân tích của các chuyên gia công nghệ hàng đầu về cơ hội và thách thức của AI trong đời sống.",
    content: "AI không chỉ đơn thuần là công cụ hỗ trợ công việc mà đang dần định hình lại phương thức sáng tạo nội dung.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600",
    author: "Hoàng Nam",
    category: "Dân trí 360",
    publishedAt: "2026-10-14 15:40",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/dt360/xu-huong-ai-2026.htm"
  },
  {
    id: "dtri-360-03",
    title: "Hành trình khám phá di sản văn hóa phi vật thể tại miền di sản",
    slug: "hanh-trinh-kham-pha-di-san-van-hoa-phi-vat-the",
    excerpt: "Thưởng thức các điệu dân ca cổ truyền và tìm hiểu nghệ thuật thủ công mỹ nghệ lâu đời.",
    content: "Chương trình trải nghiệm thực tế đưa du khách hòa mình vào không gian văn hóa truyền thống.",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600",
    author: "Hải Yến",
    category: "Dân trí 360",
    publishedAt: "2026-10-13 11:25",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/dt360/kham-pha-di-san.htm"
  },
  {
    id: "dtri-360-04",
    title: "Những câu chuyện truyền cảm hứng của giới trẻ trong khởi nghiệp xanh",
    slug: "nhung-cau-chuyen-truyen-cam-hung-khoi-nghiep-xanh",
    excerpt: "Các dự án biến rác thải thành sản phẩm thời trang và gia dụng hữu ích cho cộng đồng.",
    content: "Khát vọng bảo vệ môi trường đã thúc đẩy nhiều bạn trẻ dấn thân sáng tạo các mô hình kinh doanh tuần hoàn.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600",
    author: "Khánh Linh",
    category: "Dân trí 360",
    publishedAt: "2026-10-12 09:50",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/dt360/khoi-nghiep-xanh.htm"
  },
  {
    id: "dtri-360-05",
    title: "Đánh giá chi tiết hệ sinh thái xe điện toàn cầu và bài học cho Việt Nam",
    slug: "danh-gia-chi-tiet-he-sinh-thai-xe-dien-toan-cau",
    excerpt: "Hạ tầng trạm sạc và chính sách ưu đãi là hai yếu tố then chốt giúp phổ cập xe điện.",
    content: "Chuyên đề phân tích bài học thành công từ các quốc gia đi đầu trong chuyển đổi phương tiện giao thông xanh.",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=600",
    author: "Quang Huy",
    category: "Dân trí 360",
    publishedAt: "2026-10-11 16:15",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/dt360/he-sinh-thai-xe-dien.htm"
  },
  {
    id: "dtri-360-06",
    title: "Podcast Dân trí 360: Bí quyết quản lý tài chính cá nhân hiệu quả",
    slug: "podcast-dan-tri-360-bi-quyet-quan-ly-tai-chinh-ca-nhan",
    excerpt: "Lắng nghe chia sẻ từ chuyên gia tài chính về phương pháp tích lũy và đầu tư an toàn.",
    content: "Tập podcast hướng dẫn chi tiết quy tắc quản lý dòng tiền, xây dựng quỹ dự phòng rủi ro.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600",
    author: "Thanh Vân",
    category: "Dân trí 360",
    publishedAt: "2026-10-10 13:00",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/dt360/podcast-tai-chinh.htm"
  },
  {
    id: "dtri-360-07",
    title: "Bức tranh toàn cảnh về làn sóng chuyển đổi số trong giáo dục đại học",
    slug: "buc-tranh-toan-canh-chuyen-doi-so-giaoduc-dai-hoc",
    excerpt: "Giảng đường thông minh và học liệu số giúp sinh viên chủ động tiếp cận kiến thức.",
    content: "Các trường đại học ứng dụng nền tảng học tập trực tuyến tích hợp AI, giúp cá nhân hóa lộ trình đào tạo.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600",
    author: "Khánh Linh",
    category: "Dân trí 360",
    publishedAt: "2026-10-09 10:10",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/dt360/chuyen-doi-so-giao-duc.htm"
  },
  {
    id: "dtri-360-08",
    title: "Tương lai của giao thông thông minh trong các siêu đô thị hiện đại",
    slug: "tuong-lai-giao-thong-thong-minh-trong-sieu-do-thi",
    excerpt: "Điều phối đèn giao thông bằng thuật toán AI giúp giảm thiểu tình trạng ùn tắc giờ cao điểm.",
    content: "Mô hình đô thị thông minh tối ưu hóa lưu lượng xe lưu thông nhờ hệ thống cảm biến đo mật độ phương tiện.",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600",
    author: "Hoàng Nam",
    category: "Dân trí 360",
    publishedAt: "2026-10-08 08:40",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/dt360/giao-thong-thong-minh.htm"
  },
  {
    id: "dtri-360-09",
    title: "Sức hút của các tour du lịch sinh thái và trải nghiệm thiên nhiên",
    slug: "suc-hut-cua-cac-tour-du-lich-sinh-thai",
    excerpt: "Rời xa ồn ào đô thị để tìm lại sự cân bằng tinh thần giữa không gian núi rừng nguyên sơ.",
    content: "Xu hướng du lịch chữa lành (healing tourism) lên ngôi với các hoạt động trekking, cắm trại ngoài trời.",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600",
    author: "Hải Yến",
    category: "Dân trí 360",
    publishedAt: "2026-10-07 14:15",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/dt360/du-lich-sinh-thai.htm"
  },
  {
    id: "dtri-360-10",
    title: "Phân tích chuyên sâu về thị trường lao động và kỹ năng số tương lai",
    slug: "phan-tich-chuyen-sau-thi-truong-lao-dong-ky-nang-so",
    excerpt: "Trí tuệ nhân tạo và tự động hóa đòi hỏi lực lượng lao động phải liên tục nâng cao tay nghề.",
    content: "Báo cáo nguồn nhân lực nhấn mạnh các kỹ năng mềm như tư duy phản biện, giải quyết vấn đề phức tạp.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600",
    author: "Thanh Vân",
    category: "Dân trí 360",
    publishedAt: "2026-10-06 09:20",
    source: "dantri.com.vn",
    url: "https://dantri.com.vn/dt360/ky-nang-so-lao-dong.htm"
  }
];

document.addEventListener('DOMContentLoaded', async () => {
  initArticlesData();
  await loadCategories();
  renderArticles();
});

// Ép buộc nạp dữ liệu chuẩn 40 bài viết vào LocalStorage
function initArticlesData() {
  const currentVersion = localStorage.getItem('data_version');
  if (currentVersion !== DATA_VERSION || !localStorage.getItem('articles')) {
    localStorage.setItem('articles', JSON.stringify(INITIAL_ARTICLES));
    localStorage.setItem('data_version', DATA_VERSION);
  }
}

function getArticles() {
  return JSON.parse(localStorage.getItem('articles')) || [];
}

async function loadCategories() {
  try {
    const res = await fetch('js/categories.json');
    const data = await res.json();
    renderNavbar(data.menu);
    renderFooterCategories(data.menu);
  } catch (e) {
    console.error('Lỗi tải categories.json:', e);
  }
}

function renderNavbar(menu) {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  navbar.innerHTML = '';

  menu.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.innerText = item.title;
    a.onclick = (e) => {
      e.preventDefault();
      filterCategory(item.title);
    };

    if (item.children && item.children.length > 0) {
      const ul = document.createElement('ul');
      ul.className = 'dropdown';
      item.children.forEach(child => {
        const childLi = document.createElement('li');
        const childA = document.createElement('a');
        childA.href = '#';
        childA.innerText = child.title;
        childA.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          filterCategory(child.title);
        };
        childLi.appendChild(childA);
        ul.appendChild(childLi);
      });
      li.appendChild(ul);
    }

    li.appendChild(a);
    navbar.appendChild(li);
  });
}

function renderFooterCategories(menu) {
  const footerCate = document.getElementById('footer-categories');
  if (footerCate) {
    footerCate.innerHTML = menu.slice(0, 5).map(m => `<li><a href="#" onclick="filterCategory('${m.title}')">${m.title}</a></li>`).join('');
  }
}

function filterCategory(categoryName) {
  document.getElementById('detail-view').style.display = 'none';
  document.getElementById('news-view').style.display = 'block';

  const articles = getArticles();
  if (categoryName === 'Trang chủ' || categoryName === 'Mới nhất' || categoryName === 'Home') {
    renderArticles(articles);
  } else {
    const filtered = articles.filter(a => 
      a.category.toLowerCase().includes(categoryName.toLowerCase()) || 
      categoryName.toLowerCase().includes(a.category.toLowerCase())
    );
    renderArticles(filtered);
  }
}

// Sắp xếp bài viết theo thời gian giảm dần (mới -> cũ) & Render layout 1-2 Top section
function renderArticles(list = getArticles()) {
  const sorted = [...list].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  const topSection = document.getElementById('top-section');
  const remainingList = document.getElementById('remaining-posts');

  topSection.innerHTML = '';
  remainingList.innerHTML = '';

  if (sorted.length === 0) {
    remainingList.innerHTML = '<p style="padding:20px; color:#666;">Chưa có bài viết nào trong chuyên mục này.</p>';
    return;
  }

  const top3 = sorted.slice(0, 3);
  const remaining = sorted.slice(3);

  // Bài lớn bên trái (Featured)
  if (top3[0]) {
    const featured = document.createElement('div');
    featured.className = 'featured-post';
    featured.onclick = () => showDetail(top3[0].id);
    featured.innerHTML = `
      <img src="${top3[0].image || 'https://via.placeholder.com/600x300'}" alt="${top3[0].title}">
      <div class="info">
        <h2>${top3[0].title}</h2>
        <p>${top3[0].excerpt}</p>
        <span class="post-meta">${top3[0].publishedAt} | ${top3[0].category}</span>
      </div>
    `;
    topSection.appendChild(featured);
  }

  // 2 bài nhỏ bên phải
  if (top3.length > 1) {
    const sideBox = document.createElement('div');
    sideBox.className = 'side-posts';
    top3.slice(1, 3).forEach(item => {
      const card = document.createElement('div');
      card.className = 'side-post-card';
      card.onclick = () => showDetail(item.id);
      card.innerHTML = `
        <img src="${item.image || 'https://via.placeholder.com/100x75'}" alt="${item.title}">
        <div>
          <h3>${item.title}</h3>
          <span class="post-meta">${item.publishedAt}</span>
        </div>
      `;
      sideBox.appendChild(card);
    });
    topSection.appendChild(sideBox);
  }

  // Các bài viết còn lại dạng danh sách dọc
  remaining.forEach(item => {
    const postEl = document.createElement('div');
    postEl.className = 'post-item';
    postEl.onclick = () => showDetail(item.id);
    postEl.innerHTML = `
      <img src="${item.image || 'https://via.placeholder.com/180x120'}" alt="${item.title}">
      <div class="post-item-content">
        <h3>${item.title}</h3>
        <p>${item.excerpt}</p>
        <div class="post-meta">Tác giả: ${item.author} | ${item.publishedAt} | Chuyên mục: ${item.category}</div>
      </div>
    `;
    remainingList.appendChild(postEl);
  });
}

// Hiển thị Trang chi tiết bài viết
function showDetail(id) {
  const articles = getArticles();
  const post = articles.find(a => a.id === id);
  if (!post) return;

  document.getElementById('news-view').style.display = 'none';
  const detailView = document.getElementById('detail-view');
  detailView.style.display = 'block';

  detailView.innerHTML = `
    <button onclick="backToHome()" style="margin-bottom:15px; padding: 8px 16px; cursor:pointer; background:#e5e7eb; border:none; border-radius:4px; font-weight:600;">← Quay lại</button>
    <div class="article-detail">
      <h1>${post.title}</h1>
      <div class="meta-info">
        <span>Chuyên mục: <strong>${post.category}</strong></span> | 
        <span>Đăng ngày: ${post.publishedAt}</span> | 
        <span>Tác giả: <strong>${post.author}</strong></span>
      </div>
      <p class="sapo">${post.excerpt}</p>
      ${post.image ? `<img src="${post.image}" alt="${post.title}">` : ''}
      <div class="content">${post.content}</div>
    </div>
  `;
}

function backToHome() {
  document.getElementById('detail-view').style.display = 'none';
  document.getElementById('news-view').style.display = 'block';
}
