var studentInfo = {
    'Họ và tên:': 'Phạm Vân Anh',
    'MSSV:': '20214988',
    'Giới tính:': 'Nữ',
    'Lớp:': 'Việt Nhật 03-K66',
    'Email:': 'anh.pv214988@sis.hust.edu.vn',
}

var communityActivities = [
    {name: 'Sinh hoạt Công dân K66', value: 'Vai trò: Người tham gia, tham dự các hoạt động sinh hoạt về quyền và nghĩa vụ công dân cùng K66.'},
    {name: 'Họp Lớp Năm Nhất', value: 'Vai trò: Người tham gia, tham dự buổi họp lớp của năm nhất, thảo luận và tìm hiểu về các hoạt động, quyền lợi và nghĩa vụ của sinh viên trong quá trình học tập.'},
]

var projects = [
    {name: 'Ứng dụng Quản lý KPI', value: ['Nhóm 6 người', 'Nhiệm vụ: Thiết kế giao diện người dùng, phát triển các tính năng front-end', 'Công nghệ sử dụng: React', 'Mục tiêu: Tạo giao diện người dùng cho hệ thống']},
    {name: 'Hệ thống quản lý xuất nhập khẩu', value: ['Nhóm 4 người', 'Nhiệm vụ: Phát triển front-end', 'Công nghệ sử dụng: Java, JavaFx', 'Mục tiêu: Tạo giao diện người dùng cho hệ thống']},
]

var menuTopItem = [
    { id: "info", name: "Thông tin môn học" },
    { id: "web-tech", name: "Các công nghệ web" },
    { id: "student-info", name: "Thông tin sinh viên" },
    { id: "admin-page", name: "Admin page" }
];

var adminPageItem = [
    { id: "courseInfo", name: "Trang chủ" },
    ...menuTopItem.slice(0, -1),
];

adminPageItem[0].item = ["Thông tin khai giảng", "Thông tin Seminar", "Thông tin công ty quan tâm",];
adminPageItem[1].item = [
    "Mô tả tóm tắt học phần (tiếng Việt) (*)", "Mô tả tóm tắt học phần (tiếng Anh) (*)", "Nội dung tóm tắt của học phần (tiếng Việt) (*)",
    "Nội dung tóm tắt của học phần (tiếng Anh) (*)", "Sách tham khảo",
];
adminPageItem[2].item = [
    "Frontend (Giao diện người dùng)", "Backend (Máy chủ và xử lý dữ liệu)", "Cơ sở dữ liệu",
    "API và Tích hợp dịch vụ", "DevOps và Triển khai", "Bảo mật",
    "Testing và Debugging", "Performance Optimization", "User Authentication & Authorization",
];
adminPageItem[3].item = [
    "CV", "Các dự án đã tham gia", "Sinh hoạt cộng đồng",
];

var subItem = [
    {name: "Thông tin khai giảng", item: ["title1", "title2", "title3", "title4", "title5", "title6", "title7", "title8"]},
    {name: "Thông tin Seminar", item: ["title1", "title2", "title3", "title4", "title5", "title6", "title7", "title8", "title9", "title10", "title11", "title12", "title13", "title14"]},
    {name: "Thông tin công ty quan tâm", item: ["title1", "title2", "Ảnh FPT"]},
    {name: "Mô tả tóm tắt học phần (tiếng Việt) (*)", item: ["title1"]},
    {name: "Mô tả tóm tắt học phần (tiếng Anh) (*)", item: ["title1"]},
    {name: "Nội dung tóm tắt của học phần (tiếng Việt) (*)", item: ["title1"]},
    {name: "Nội dung tóm tắt của học phần (tiếng Anh) (*)", item: ["title1"]},
    {name: "Sách tham khảo", item: ["title1", "Ảnh sách Web"]},
    { name: "Frontend (Giao diện người dùng)", item: ["title1"] },
    { name: "Backend (Máy chủ và xử lý dữ liệu)", item: ["title1"] },
    { name: "Cơ sở dữ liệu", item: ["title1"] },
    { name: "API và Tích hợp dịch vụ", item: ["title1"] },
    { name: "DevOps và Triển khai", item: ["title1"] },
    { name: "Bảo mật", item: ["title1"] },
    { name: "Testing và Debugging", item: ["title1"] },
    { name: "Performance Optimization", item: ["title1"] },
    { name: "User Authentication & Authorization", item: ["title1"] },
];

var subSubItem = [
    { parentName: "Thông tin khai giảng", name: "title1", content: `<p><strong>Thứ</strong></p>`, col: 7, row: 1 },
    { parentName: "Thông tin khai giảng", name: "title2", content: `<p>Thứ 6</p>`, col: 5, row: 1 },
    { parentName: "Thông tin khai giảng", name: "title3", content: `<p><strong>Thời gian/Tiết</strong></p>`, col: 7, row: 1 },
    { parentName: "Thông tin khai giảng", name: "title4", content: `<p>Từ 3 đến 6</p>`, col: 5, row: 1 },
    { parentName: "Thông tin khai giảng", name: "title5", content: `<p><strong>Ngày/Tuần</strong></p>`, col: 7, row: 1 },
    { parentName: "Thông tin khai giảng", name: "title6", content: `<p>2-9,11-18</p>`, col: 5, row: 1 },
    { parentName: "Thông tin khai giảng", name: "title7", content: `<p><strong>Tại địa điểm</strong></p>`, col: 7, row: 1 },
    { parentName: "Thông tin khai giảng", name: "title8", content: `<p>D9-501</p>`, col: 5, row: 1 },
    { parentName: "Thông tin Seminar", name: "title1", content: "<p><strong>Mã lớp</strong></p>", col: 5, row: 1 },
    { parentName: "Thông tin Seminar", name: "title2", content: "<p>151900</p>", col: 7, row: 1 },
    { parentName: "Thông tin Seminar", name: "title3", content: "<p><strong>Loại hình</strong></p>", col: 5, row: 1 },
    { parentName: "Thông tin Seminar", name: "title4", content: "<p>LT+BT</p>", col: 7, row: 1 },
    { parentName: "Thông tin Seminar", name: "title5", content: "<p><strong>Hệ</strong></p>", col: 5, row: 1 },
    { parentName: "Thông tin Seminar", name: "title6", content: "<p>HEDSPI</p>", col: 7, row: 1 },
    { parentName: "Thông tin Seminar", name: "title7", content: "<p><strong>GVHD</strong></p>", col: 5, row: 1 },
    { parentName: "Thông tin Seminar", name: "title8", content: "<p>Phạm Huy Hoàng</p>", col: 7, row: 1 },
    { parentName: "Thông tin Seminar", name: "title9", content: "<p><strong>Số lần vắng</strong></p>", col: 5, row: 1 },
    { parentName: "Thông tin Seminar", name: "title10", content: "<p>0</p>", col: 7, row: 1 },
    { parentName: "Thông tin Seminar", name: "title11", content: "<p><strong>Số sinh viên</strong></p>", col: 5, row: 1 },
    { parentName: "Thông tin Seminar", name: "title12", content: "<p>150</p>", col: 7, row: 1 },
    { parentName: "Thông tin Seminar", name: "title13", content: "<p><strong>Hình thức</strong></p>", col: 5, row: 1 },
    { parentName: "Thông tin Seminar", name: "title14", content: "<p>Offline</p>", col: 7, row: 1 },
    { parentName: "Thông tin công ty quan tâm", name: "title1", content: `<ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Công ty:</strong><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">&nbsp;FPT Software</span></li></ol>`, col: 8, row: 2 },
    { parentName: "Thông tin công ty quan tâm", name: "title2", content: `<p><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">FPT Software là tên gọi khác của công ty TNHH Phần Mềm FPT với nhiệm vụ chính là gia công phần mềm tại Việt Nam và nước ngoài. Thành lập từ năm 1988 đến nay với 3 Trụ sở chính FPT Software đặt tại Việt Nam và một số nước trên toàn thế giới như Hoa Kỳ, Nhật Bản, Malaysia, Đức, Úc, Singapore, Malaysia, Thái Lan và Philipines hiện FPT Software đáp ứng nhu cầu gia công phần mềm lớn cho hơn 150 công ty hàng đầu tại 20 quốc gia lớn nhất trên thế giới hiện nay với các hợp đồng lớn có khi đạt cả 1 triệu USD dành cho một số đối tác lớn như Hitachi, NEOPOST, Petronas, Deutsche Bank, và Unilever với hơn 4000 nhân viên trên toàn thế giới.</span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">FPT Software theo đuổi mục tiêu gia công phần mềm để đáp ứng cho nhu cầu phát triển CNTT của các hãng phần mềm trong nước, các công ty lớn trong nước và tham vọng hơn là xuất khẩu phần mềm trên toàn thế giới cho các công ty nước ngoài biết đến tập đoàn FPT, mục đích chính là vươn đến tầm cao mới thông qua công nghệ nhằm nâng cao năng suất lao động.</span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Kinh doanh của FPT Software xuất phát từ Công nghệ thông tin và Viễn Thông FPT là cốt lõi để đáp ứng cho khách hàng trên 63 tỉnh thành trên toàn lãnh thổ Việt Nam và mở rộng đến khách hàng toàn cầu. Từ khi được thành lập cho đến nay, FPT Software đã là công ty phần mềm số 1 tại Việt Nam trong lĩnh vực tích hợp hệ thống, phân phối và bán lẻ, dịch vụ Công Nghệ Thông tin, xuất khẩu gia công phần mềm, bán lẻ sản phẩm CNTT. Ở lĩnh vực Viễn Thông FPT là một trong 3 nhà cung cấp dịch vụ internet cáp quang FPT hàng đầu tại Việt Nam. Về lĩnh vực quảng cáo, FPT là đơn vị quảng cáo trực tuyến số 1 tại Việt Nam với trang báo điện tử VNexpress với hơn 42 triệu lượt truy cập mỗi ngày.</span></p>`, col: 8, row: 20 },
    { parentName: "Thông tin công ty quan tâm", name: "Ảnh FPT", content: `<a href="https://fptsoftware.com/" target="_blank" style="flex: 1; margin-top: 20px;">
              <div class="FRB" style="width: 100%;">
                <img class="DRB" src="http://itde.hvnh.edu.vn/public/img/news/files/FPT%20tuy%E1%BB%83n%20d%E1%BB%A5ng%20(2).jpg" style="width: 100%;">
                <div class="ERB" style="width: 100%;color: blue" title="">FPT SOFTWARE TUYỂN DỤNG</div>
              </div>
            </a>`, col: 4, row: 22 },
            
    { parentName: "Frontend (Giao diện người dùng)", name: "title1", content: 
        `<h3>1. Frontend (Giao diện người dùng)</h3>
        <ul>
            <li><strong>HTML, CSS, JavaScript</strong>: Các công nghệ cơ bản để xây dựng cấu trúc và giao diện người
              dùng.
            </li>
            <li><strong>ReactJS</strong>: Thư viện JavaScript để xây dựng giao diện người dùng động.</li>
            <li><strong>Angular</strong>: Framework JavaScript mạnh mẽ cho các ứng dụng Web quy mô lớn.</li>
            <li><strong>Vue.js</strong>: Framework linh hoạt giúp phát triển giao diện người dùng hiệu quả.</li>
            <li><strong>CSS Preprocessors (SASS, LESS)</strong>: Giúp cải thiện mã CSS với các tính năng như biến và
              hàm.
            </li>
            <li><strong>Responsive Design</strong>: Thiết kế giao diện phù hợp với mọi kích thước màn hình (sử dụng
              Bootstrap, Tailwind CSS).</li>
          </ul>
        `},
    { parentName: "Backend (Máy chủ và xử lý dữ liệu)", name: "title1", content: 
        `<h3>2. Backend (Máy chủ và xử lý dữ liệu)</h3>
          <ul>
            <li><strong>Node.js</strong>: Môi trường runtime JavaScript hiệu quả cho ứng dụng Web.</li>
            <li><strong>Express.js</strong>: Framework giúp xây dựng API và xử lý các yêu cầu HTTP nhanh chóng.</li>
            <li><strong>Django (Python)</strong>: Framework Python phù hợp cho các ứng dụng Web cần bảo mật cao.</li>
            <li><strong>Ruby on Rails</strong>: Framework giúp phát triển ứng dụng Web nhanh chóng và dễ dàng bảo trì.
            </li>
            <li><strong>Java Spring Boot</strong>: Framework mạnh mẽ cho ứng dụng Web Java với khả năng mở rộng cao.
            </li>
          </ul> 
        `},
    { parentName: "Cơ sở dữ liệu", name: "title1", content: 
        `<h3>3. Cơ sở dữ liệu</h3>
          <ul>
            <li><strong>MySQL</strong>: Cơ sở dữ liệu quan hệ phổ biến.</li>
            <li><strong>PostgreSQL</strong>: Cơ sở dữ liệu mạnh mẽ hỗ trợ truy vấn phức tạp.</li>
            <li><strong>MongoDB</strong>: Cơ sở dữ liệu NoSQL linh hoạt cho dữ liệu phi cấu trúc.</li>
            <li><strong>Cassandra</strong>: Cơ sở dữ liệu NoSQL phân tán phù hợp cho dữ liệu lớn.</li>
          </ul>` },
    { parentName: "API và Tích hợp dịch vụ", name: "title1", content: 
        `<h3>4. API và Tích hợp dịch vụ</h3>
          <ul>
            <li><strong>RESTful APIs</strong>: Phương thức phổ biến để giao tiếp giữa các hệ thống qua HTTP.</li>
            <li><strong>GraphQL</strong>: Công nghệ API mạnh mẽ giúp lấy dữ liệu theo yêu cầu.</li>
            <li><strong>WebSockets</strong>: Giải pháp cho các ứng dụng thời gian thực.</li>
          </ul>`},
    { parentName: "DevOps và Triển khai", name: "title1", content: 
        `<h3>5. DevOps và Triển khai</h3>
          <ul>
            <li><strong>Docker</strong>: Giải pháp đóng gói ứng dụng và môi trường vào container.</li>
            <li><strong>CI/CD</strong>: Tự động hóa quy trình kiểm thử và triển khai (Jenkins, GitLab CI, GitHub
              Actions).
            </li>
            <li><strong>AWS, Azure, Google Cloud</strong>: Các dịch vụ đám mây linh hoạt cho phát triển và triển khai
              ứng
              dụng Web.</li>
          </ul>` },
    { parentName: "Bảo mật", name: "title1", content: 
        `<h3>6. Bảo mật</h3>
          <ul>
            <li><strong>OAuth2 & JWT</strong>: Cơ chế xác thực và phân quyền người dùng an toàn.</li>
            <li><strong>HTTPS</strong>: Đảm bảo giao tiếp an toàn qua mã hóa SSL/TLS.</li>
            <li><strong>Helmet.js</strong>: Thư viện Node.js tăng cường bảo mật HTTP header.</li>
          </ul>` },

    { parentName: "Testing và Debugging", name: "title1", content: 
        `<h3>7. Testing và Debugging</h3>
          <ul>
            <li><strong>Jest</strong>: Công cụ kiểm thử JavaScript, thường dùng với React và Node.js.</li>
            <li><strong>Mocha & Chai</strong>: Framework kiểm thử cho Node.js.</li>
            <li><strong>Cypress</strong>: Công cụ kiểm thử tích hợp mạnh mẽ cho các ứng dụng Web.</li>
            <li><strong>Postman</strong>: Công cụ kiểm thử API và làm việc với RESTful API.</li>
          </ul>` },
    { parentName: "Performance Optimization", name: "title1", content: 
        `          <h3>8. Performance Optimization</h3>
          <ul>
            <li><strong>Lazy Loading</strong>: Tải tài nguyên theo yêu cầu để cải thiện tốc độ tải trang.</li>
            <li><strong>CDN (Content Delivery Network)</strong>: Mạng phân phối nội dung giúp giảm độ trễ và cải thiện
              tốc
              độ.</li>
            <li><strong>Caching</strong>: Sử dụng Redis hoặc Memcached để lưu trữ dữ liệu tạm thời và giảm tải cho
              server.
            </li>
          </ul>`},
    { parentName: "User Authentication & Authorization", name: "title1", content: 
        `          <h3>9. User Authentication & Authorization</h3>
          <ul>
            <li><strong>Firebase Authentication</strong>: Dịch vụ đăng nhập thông qua Google, Facebook, email/password.
            </li>
            <li><strong>Auth0</strong>: Dịch vụ bảo mật giúp quản lý xác thực và phân quyền người dùng dễ dàng.</li>
          </ul>`},
    { parentName: "Mô tả tóm tắt học phần (tiếng Việt) (*)", name: "title1", content: `<p><strong style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Mô tả tóm tắt học phần (tiếng Việt)</strong><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">&nbsp;(*)</span></p><p><strong style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Mục tiêu:&nbsp;</strong><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Học phần cung cấp các kiến thức cần thiết để xây dựng và phát triển các ứng dụng, dịch vụ trực tuyến trên môi trường web. Sau khi học xong học phần này, sinh viên có khả năng:</span></p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Có thể sử dụng một ngôn ngữ lập trình như JSP, PHP để phát triển ứng dụng web cho các lĩnh vực khác nhau như: hệ quản trị nội dung (CMS), cổng thông tin (Portal), hay các ứng dụng điện tử (eCommerce, eLearning, eGoverment,…)</span></li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Nắm vững được các công nghệ web, các platform, framework hiện đang thịnh hành.</span></li></ol><p><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Ngoài ra học phần cũng cung cấp cho sinh viên các kỹ năng làm việc nhóm, thuyết trình và thái độ cần thiết để làm việc và ứng dụng các kỹ thuật trong các dự án, công ty về phần mềm sau này.</span></p>`, col: 12, row: 9 },
    { parentName: "Mô tả tóm tắt học phần (tiếng Anh) (*)", name: "title1", content: `<p><strong style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Mô tả tóm tắt học phần (tiếng Anh)</strong><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">&nbsp;(*)</span></p><p><strong style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Objectives:</strong><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">&nbsp;The course provides students with the necessary knowledge to build and develop online applications and services on the web environment. After completing this couse, students are able to:</span></p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Use a programming language such as JSP, PHP to develop web applications for different areas such as content management system (CMS), portal, or online applications (eCommerce, eLearning, eGoverment, ...)</span></li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Understand the popular web technologies, platforms, frameworks.</span></li></ol><p><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">In addition, the course also provides students with skills of teamwork and presentation, and attitudes needed to work and apply the techniques in software projects and companies in the future.</span></p>`, col: 12, row: 10 },
    { parentName: "Nội dung tóm tắt của học phần (tiếng Việt) (*)", name: "title1", content: `<div class="ql-editor" contenteditable="true" data-id="project1-editor"><p><strong style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Nội dung tóm tắt của học phần (tiếng Việt)</strong><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">&nbsp;(*)</span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Internet, web, kiến trúc ứng dụng web,&nbsp;HTML, CSS, Javascript, PHP, JSP, Ajax, DOM, XML, SOA, An toàn bảo mật web, v.v.</span></p></div>`, col: 12, row: 5 },
    { parentName: "Nội dung tóm tắt của học phần (tiếng Anh) (*)", name: "title1", content: `<div class="ql-editor" contenteditable="true" data-id="title3-editor"><p><strong style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Nội dung tóm tắt của học phần (tiếng Anh)</strong><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">&nbsp;(*)</span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Internet, web, architecture of web application,&nbsp;HTML, CSS, Javascript, PHP, JSP, Ajax, DOM, XML, SOA,&nbsp;website security, etc.</span></p><p><br></p></div>`, col: 12, row: 5 },
    { parentName: "Sách tham khảo", name: "title1", content: `<p><strong style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Sách tham khảo</strong></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Sách Web Technologies: HTML, Javascript, PHP, Java, Jsp, XML and Ajax, Black Book</span></p>`, col: 8, row: 14 },
    { parentName: "Sách tham khảo", name: "Ảnh sách Web", content: `<a href="https://www.amazon.com/Web-Technologies-HTML-Javascript-Black/dp/8177229974" target="_blank" style="flex: 1;margin-top: 20px;">
                        <div class="FRB" style="width: 100%;">
                          <img class="DRB" src="https://m.media-amazon.com/images/I/71t58FV+qFL._SY466_.jpg" style="width: 100%;">
                          <div class="ERB" style="width: 100%;color: blue" title="">Web Technologies: HTML,
                            Javascript, PHP, Java, Jsp, XML and Ajax, Black Book</div>
                        </div>
                      </a>`, col: 4, row: 14 },
];

const subSubItemStudent = [
    { parentName: "CV", name: "ảnh", content: `<div class="left" style="display: flex; justify-content: center; align-items: center;">
        <img src="./assets/img.jpg" alt="Student Photo" class="profile-photo" style="max-width: 300px;">
      </div>`, col: 5, row: 7 },
    { parentName: "CV", name: "thông tin", content: `<p><strong style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Họ và tên:</strong><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">&nbsp;${studentInfo["Họ và tên:"]}</span></p><p><strong style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Năm vào trường:</strong><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">&nbsp;2021</span></p><p><strong style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Bậc đào tạo:</strong><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">&nbsp;KSCLC-TN-TT-VNVP-ICT</span></p><p><strong style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Chương trình:</strong><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">&nbsp;Công nghệ thông tin Việt-Nhật 2021</span></p><p><strong style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">MSSV:</strong><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">&nbsp;${studentInfo["MSSV:"]}</span></p><p><strong style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Giới tính:</strong><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">&nbsp;${studentInfo["Giới tính:"]}</span></p><p><strong style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Lớp:</strong><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">&nbsp;${studentInfo["Lớp:"]}</span></p><p><strong style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Khóa học:</strong><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">&nbsp;66</span></p><p><strong style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">Email:</strong><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">&nbsp;${studentInfo["Email:"]}</span></p>`, col: 7, row: 7 },

    { parentName: "Các dự án đã tham gia", name: "project1", content: `${projects[0].name}`, col: 5, row: 4 },
    { parentName: "Các dự án đã tham gia", name: "content1", content: `<p><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">${projects[0].value[0]}</span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">${projects[0].value[1]}</span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">${projects[0].value[2]}</span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">${projects[0].value[3]}</span></p>`, col: 7, row: 4 },
    { parentName: "Các dự án đã tham gia", name: "project2", content: `${projects[1].name}`, col: 5, row: 4 },
    { parentName: "Các dự án đã tham gia", name: "content2", content: `<p><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">${projects[1].value[0]}</span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">${projects[1].value[1]}</span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">${projects[1].value[2]}</span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">${projects[1].value[3]}</span></p>`, col: 7, row: 4 },
    

    { parentName: "Sinh hoạt cộng đồng", name: "project1", content: `${communityActivities[0].name}`, col: 5, row: 2 },
    { parentName: "Sinh hoạt cộng đồng", name: "content1", content: `${communityActivities[0].value}`, col: 7, row: 2 },
    { parentName: "Sinh hoạt cộng đồng", name: "project2", content: `${communityActivities[1].name}`, col: 5, row: 3 },
    { parentName: "Sinh hoạt cộng đồng", name: "content2", content: `${communityActivities[1].value}`, col: 7, row: 3 },
]

const subItemStudent = [
    { name: "CV", item: ["ảnh", "thông tin"] },
    { name: "Các dự án đã tham gia", item: ["project1", "cotent1", "project2", "content2"] },
    { name: "Sinh hoạt cộng đồng", item: ["project1", "cotent1", "project2", "content2"] },
]

const adminPageItemStudent = ["CV", "Các dự án đã tham gia", "Sinh hoạt cộng đồng",]

subSubItemStudent.forEach(i => {
    subSubItem.push(i);
})
subItemStudent.forEach(i => {
    subItem.push(i);
})

var globalId = 0;

const createMainContent = (id, container, index) => {
    container.innerHTML = '';
    const t = `<div id="sub${id}"></div>`;
    container.innerHTML = t;
    if (!adminPageItem[index].item) {
        return
    }
    adminPageItem[index].item.map(i => {
        const Indexes = subSubItem
        .map((titem, index) => titem.parentName == i ? index : -1)
        .filter(index => index !== -1);
        const previewHtml = `
            <div class="preview" style="margin-top: 20px" id='${i}'>
                <div class="preview-heading">${i}</div>
                <div class="layout">
                    
                </div>
            </div>
        `;

        const ul = document.querySelector(`#sub${id}`);
        ul.insertAdjacentHTML("beforeend", previewHtml);


        Indexes.forEach((i, inx) => {
            
            const name = subSubItem[i].name;
            let content = subSubItem[i].content;
            if (!content) {
                content = "Chưa có giữ liệu, bạn tự nhập vào đê";
            }
            const col = subSubItem[i].col;
            const row = subSubItem[i].row;
            const layout = document.querySelector(`#sub${id} > div.preview:last-child > div.layout`);
            const parentRowElement = layout.lastElementChild;

            if (!parentRowElement) {
                const temp = `
                    <div class="parent-row">
                        <div class="col-${col}">
                            <div class="row h-${row}" data-id="${name}" style="word-wrap: break-word; overflow: hidden;">${content}</div>
                        </div>
                    </div>
                `;
                layout.insertAdjacentHTML("afterbegin", temp);
            }
            else {
                const colDivs = document.querySelectorAll(`#sub${id} > div.preview:last-child .parent-row:last-child > div`);
                let totalPreCol = 0;
                colDivs.forEach(i => {
                    const preCol = parseInt(i.classList[0].split('-')[1]);
                    totalPreCol += preCol;
                });
                
                if (col + totalPreCol <= 12) {
                    const temp = `
                        <div class="col-${col}">
                            <div class="row h-${row}" data-id="${name}" style="word-wrap: break-word; overflow: hidden;" style="word-wrap: break-word; overflow: hidden;">${content}</div>
                        </div>
                    `;
                    parentRowElement.insertAdjacentHTML("beforeend", temp);
                }
                else if (col <= totalPreCol) {
                    let added = false;
                    colDivs.forEach((i, inx) => {
                        const preCol = parseInt(colDivs[inx].classList[0].split('-')[1]);
                        if (preCol >= col) {
                            if (colDivs[inx + 1]) {
                                const rowDivs = colDivs[inx].querySelectorAll('.row');
                                let totalRow = 0;
                                rowDivs.forEach(i => {
                                    const preRow = parseInt(i.classList[1].split('-')[1]);
                                    totalRow += preRow;
                                });
    
                                const rowDivs2 = colDivs[inx + 1].querySelectorAll('.row');
                                let totalRow2 = 0;
                                rowDivs2.forEach(i => {
                                    const preRow = parseInt(i.classList[1].split('-')[1]);
                                    totalRow2 += preRow;
                                });
    
                                if (totalRow2 + row <= totalRow) {
                                    const temp = `
                                        <div class="row h-${row}">${content}</div>
                                    `;
                                    colDivs[inx + 1].insertAdjacentHTML("beforeend", temp);
                                    added = true;
                                }
                            }
                            if (inx == 0 && !added) {
                                const temp = `
                                    <div class="row h-${row}" data-id="${name}" style="width: calc(${col} / ${preCol} * 100%);" style="word-wrap: break-word; overflow: hidden;">${content}</div>
                                `;
                                colDivs[inx].insertAdjacentHTML("beforeend", temp);
                                added = true;
                            }
                            else if (!added) {
                                const rowDivs = colDivs[inx-1].querySelectorAll('.row');
                                let totalPreRow = 0;
                                rowDivs.forEach(i => {
                                    const preRow = parseInt(i.classList[1].split('-')[1]);
                                    totalPreRow += preRow;
                                });
    
                                const rowDivs2 = colDivs[inx].querySelectorAll('.row');
                                let totalRow = 0;
                                rowDivs2.forEach(i => {
                                    const preRow = parseInt(i.classList[1].split('-')[1]);
                                    totalRow += preRow;
                                });
    
                                if (totalPreRow >= totalRow && !added) {
                                    const temp = `
                                        <div class="row h-${row}" data-id="${name}" style="width: calc(${col} / ${preCol} * 100%);" style="word-wrap: break-word; overflow: hidden;">${content}</div>
                                    `;
                                    colDivs[inx].insertAdjacentHTML("beforeend", temp);
                                    added = true;
                                }
                            }
    
                        }
                        else if (preCol < col && !added) {
                            if (colDivs[inx + 1]) {
                                const rowDivs = colDivs[inx].querySelectorAll('.row');
                                let totalRow = 0;
                                rowDivs.forEach(i => {
                                    const preRow = parseInt(i.classList[1].split('-')[1]);
                                    totalRow += preRow;
                                });
    
                                const rowDivs2 = colDivs[inx + 1].querySelectorAll('.row');
                                let totalRow2 = 0;
                                rowDivs2.forEach(i => {
                                    const preRow = parseInt(i.classList[1].split('-')[1]);
                                    totalRow2 += preRow;
                                });
    
                                if (totalRow2 + row <= totalRow) {
                                    const temp = `
                                        <div class="row h-${row}" data-id="${name}" style="word-wrap: break-word; overflow: hidden;">${content}</div>
                                    `;
                                    colDivs[inx + 1].insertAdjacentHTML("beforeend", temp);
                                    added = true;
                                }
                            }
                            if (!added) {
                                const temp = `
                                    <div class="parent-row">
                                        <div class="col-${col}">
                                            <div class="row h-${row} data-id="${name}" style="word-wrap: break-word; overflow: hidden;"">${content}</div>
                                        </div>
                                    </div>
                                `;
                                layout.insertAdjacentHTML("beforeend", temp);
                                added = true;
                            }
                        }
                    });
                                    
                }
                else {
                    const temp = `
                        <div class="parent-row">
                            <div class="col-${col}">
                                <div class="row h-${row}" data-id="${name}" style="word-wrap: break-word; overflow: hidden;">${content}</div>
                            </div>
                        </div>
                    `;
                    layout.insertAdjacentHTML("beforeend", temp);
                }
            }
        });
    })
}

const handleMenuTopClick = (id) => {
    const allPreview = document.querySelectorAll('div.preview');
    if (allPreview) {
        allPreview.forEach(i => i.remove());
    }
    const sidebar = document.getElementById('mySidebar');
    sidebar.remove();
    let h4;
    let index = menuTopItem.findIndex(element => element.id === id) + 1;
    if (index) {
        h4 = menuTopItem[index].name;
    }
    if (id == 'courseInfo') {
        h4 = 'Menu';
    }

    const temp1 = `
        <nav class="w3-sidebar w3-bar-block w3-collapse w3-large w3-theme-l5 w3-animate-left" id="mySidebar">
            <h4 class="w3-bar-item"><b>${h4}</b></h4>
            
    `;
    let temp2 = "";
    if (adminPageItem[index].item) {
        adminPageItem[index].item.map(i => {
            const t = `
                <a class="w3-bar-item w3-button w3-hover-black" href="#${i}">${i}</a>
            `;
            temp2 += t;
        })
    }
    const temp = temp1 + temp2 + "</nav>";
    
    const t = document.querySelector("body .w3-top");
    t.insertAdjacentHTML("afterend", temp);

    const container = document.querySelector(`#${id} .container`);
    

    createMainContent(id, container, index);
    
}

const init = () => {
    const links = Array.from(document.querySelectorAll(".w3-top a.w3-bar-item.w3-button")).filter(link => 
        link.classList.length === 2
    );
    links.pop();
    links.forEach(i => {
        let id = i.getAttribute('data-id');
        i.onclick = function() {
            showContent(id);
            handleMenuTopClick(id);
        };
    })
}

const createNewItemDom = (id, preId, name) => {
    const temp = `
        <div id="${id}" class="w3-container w3-padding-64 hidden"><div class="container"></div></div>
    `;
    const adminContent = document.getElementById('admin-content');
    adminContent.insertAdjacentHTML("afterend", temp);

    const newItem = { id: `${id}`, name: `${name}` };
    const index = menuTopItem.findIndex(item => item.id === `${preId}`);
    if (index !== -1) {
        menuTopItem.splice(index + 1, 0, newItem);
    }
    const element = document.querySelector(`.w3-top > div a[data-id="${id}"]`);
    const menuTopWarpper = document.querySelector('body > div.w3-top:first-child > div');
    menuTopWarpper.remove();
    let temp2 = `
    <div class="w3-bar w3-theme w3-large">
        <a class="w3-bar-item w3-button w3-right w3-hide-large w3-hover-white w3-large w3-theme-l1" href="javascript:void(0)" onclick="w3_open()"><i class="fa fa-bars"></i></a>
        <a href="#" onclick="showContent('courseInfo')" class="w3-bar-item w3-button" data-id="courseInfo">
            <i class="fas fa-home"></i>
        </a>
    
    `;
    menuTopItem.forEach(i => {
        temp2 += `<a href="javascript:void(0)" class="w3-bar-item w3-button" onclick="showContent('${i.id}')" data-id="${i.id}">${i.name}</a>`;
    });
    temp2 += `</div>`

    const menuTop = document.querySelector("body > div.w3-top");
    menuTop.innerHTML = temp2;
    init();
}

const addItem = (id, deep, rootItem, firstItem, deep2RootItem) => {    
    const list = document.querySelector("#admin-menu-left > ul");
    if (firstItem) {
        const tempItem = `
            <li class="admin-item" style="display: none;">
                <div class="admin-item-wrapper" data-id="null"></div>
            </li>
        `;
        list.insertAdjacentHTML("afterbegin", tempItem);
    }
    const itemWrapper = document.querySelector(`.admin-item-wrapper[data-id='${id}']`);
    const menuTopItemWrapper = document.querySelector(`.w3-top a[data-id='${id}']`);

    const adminItem = document.createElement('li');
    adminItem.className = 'admin-item';

    const newItemWrapper = document.createElement('div');
    newItemWrapper.className = 'admin-item-wrapper';

    const input = document.createElement('input');
    input.type = 'text';
    input.focus();

    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            if (!deep) {
                adminItem.remove();
    
                const newMenuTopItem = initMenuTopItem({id: "newItem" + globalId, name: input.value});
                menuTopItemWrapper.insertAdjacentElement('afterend', newMenuTopItem);
    
                const newItem = initItem({id: "newItem" + globalId, name: input.value});
                itemWrapper.parentElement.insertAdjacentElement('afterend', newItem);

                const index = adminPageItem.findIndex(item => item.id === id);
                adminPageItem.splice(index + 1, 0, {id: "newItem" + globalId, name: input.value});
                
                createNewItemDom("newItem" + globalId, id, input.value);
                globalId++;
            }
            else {
                if (firstItem) {
                    const newListItem = document.createElement('li');
                    newListItem.className = 'admin-item';
                    newListItem.innerHTML = `
                        <div class="admin-item-wrapper" data-id="${input.value}">
                            <div class="admin-item-name">${input.value}</div>
                            <div class="admin-item-view-icon no-select">
                                <i class="fa-regular fa-eye"></i>
                                <i class="fa-solid fa-pencil" style="margin-left: 7px;"></i>
                                <i class="fa-solid fa-x" style="margin-left: 6px;"></i>
                            </div>
                            <div class="no-select" style="cursor: pointer;">
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    `;
                    list.insertAdjacentElement("afterbegin", newListItem);

                    const sidebar = document.querySelector("#mySidebar > h4");
                    const newSidebarItem = `
                        <a class="w3-bar-item w3-button w3-hover-black" href="#" data-id="${input.value}">${input.value}</a>
                    `;
                    sidebar.insertAdjacentHTML("afterend", newSidebarItem);
                    adminItem.remove();

                    if (deep == 1) {
                        if (rootItem.item) {
                            rootItem.item = [
                                `${input.value}`,
                                ...rootItem.item,
                            ];
                        }
                        else {
                            rootItem.item = [`${input.value}`];
                        }
                        const itemIndex = adminPageItem.findIndex(element => element.id === rootItem.id);
                        adminPageItem[itemIndex] = rootItem;
                        viewItem(rootItem);
                    }
                    else {
                        let foundItem = subItem.find(item => item.name === rootItem.name);
                        if (foundItem) {
                            foundItem.item.unshift(`${input.value}`);
                        }
                        else {
                            subItem.push({name: rootItem.name, item: [`${input.value}`,],});
                        }


                        let index2 = subSubItem.findIndex(item => item.parentName === rootItem.name && item.name === id);
                        if (index2 !== -1) {
                            subSubItem.splice(index2 + 1, 0, {
                                parentName: rootItem.name,
                                name: input.value,
                                content: "",
                                col: 12,
                                row: 12,
                            });
                        }
                        else {
                            subSubItem.push({
                                parentName: rootItem.name,
                                name: input.value,
                                content: "",
                                col: 12,
                                row: 12,
                            });
                        }

                        viewItem(rootItem, deep2RootItem);
                    }
                }
                else {
                    adminItem.remove();
                    if (deep == 1) {
                        const index = firstItem ? -1 : rootItem.item.indexOf(id);
                        rootItem.item.splice(index + 1, 0, input.value);
                        const newItem = initItem({id: input.value, name: input.value}, rootItem);
        
                        !firstItem ? itemWrapper.parentElement.insertAdjacentElement('afterend', newItem)
                            : itemWrapper.parentElement.insertAdjacentElement('beforebegin', newItem);
        
                        const leftSideBarItem = document.querySelector(`nav#mySidebar a[data-id='${id}']`);
                        const newHtml = `
                            <a class="w3-bar-item w3-button w3-hover-black" href="#" data-id="${input.value}">${input.value}</a>
                        `;
                        !firstItem ? leftSideBarItem.insertAdjacentHTML('afterend', newHtml)
                            : leftSideBarItem.insertAdjacentHTML('beforebegin', newHtml);

                        viewItem(rootItem);
                    }
                    else {
                        let foundItem = subItem.find(item => item.name === rootItem.name);
                        const index = foundItem.item.indexOf(id);
                        subItem.forEach(item => {
                            if (item.name === rootItem.name) {
                                const index = item.item.indexOf(id);
                                if (index !== -1) {
                                    foundItem.item.splice(index + 1, 0, `${input.value}`);
                                }
                            }
                        });
                        let index2 = subSubItem.findIndex(item => item.parentName === rootItem.name && item.name === id);
                        if (index2 !== -1) {
                            subSubItem.splice(index2 + 1, 0, {
                                parentName: rootItem.name,
                                name: input.value,
                                content: "",
                                col: 12,
                                row: 12,
                            });
                        }
                        viewItem(rootItem, deep2RootItem);
                    }
                }
            }
        }
    });

    const noSelectDiv = document.createElement('div');
    noSelectDiv.className = 'no-select';

    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-x';
    icon.style.marginLeft = '244px';
    icon.style.marginTop = '7px';
    icon.style.cursor = 'pointer';
    icon.onclick = () => {
        adminItem.remove();
    }

    noSelectDiv.appendChild(icon);

    newItemWrapper.appendChild(input);
    newItemWrapper.appendChild(noSelectDiv);

    adminItem.appendChild(newItemWrapper);
    if (!firstItem) {
        itemWrapper.parentElement.insertAdjacentElement('afterend', adminItem);
    }
    else {
        itemWrapper.parentElement.insertAdjacentElement('beforebegin', adminItem);
        const tempItem = document.querySelector("li.admin-item[style='display: none;']");
        tempItem.remove();
    }
}

const deleteItem = (id, deep, rootItem, deep2RootItem) => {
    console.log("Deleting item with id:", id);
    const itemWrapper = document.querySelector(`.admin-item-wrapper[data-id='${id}']`);
    const leftSideBarItem = document.querySelector(`nav#mySidebar a[data-id='${id}']`);
    const menuTopItemWrapper = document.querySelector(`.w3-top a[data-id='${id}']`);
    if (itemWrapper.parentElement) {
        itemWrapper.parentElement.remove();
    }
    if (leftSideBarItem) {
        leftSideBarItem.remove();
        rootItem.item = rootItem.item.filter(i => i !== id);
    }
    if (menuTopItemWrapper) {
        menuTopItemWrapper.remove();
    }

    if (deep == 2) {
        const indexToRemove = subSubItem.findIndex(item => 
            item.parentName === rootItem.name && item.name === id
        );
        if (indexToRemove !== -1) {
            subSubItem.splice(indexToRemove, 1);
        }

        const foundItem = subItem.find(item => item.name === rootItem.name);
        if (foundItem) {
            const indexToRemove = foundItem.item.indexOf(id);
            if (indexToRemove !== -1) {
                foundItem.item.splice(indexToRemove, 1);
            }
        }

        viewItem(rootItem, deep2RootItem);
    }

    if (!deep && !rootItem && !deep2RootItem) {
        const index = menuTopItem.findIndex(item => item.id === id);
        const topItem = menuTopItem[index];
        if (index !== -1) {
            menuTopItem.splice(index, 1);
        }
        const index2 = adminPageItem.findIndex(item => item.id === id);
        if (index2 !== -1) {
            adminPageItem.splice(index2, 1);
        }
        let temp;
        if (topItem.item) {
            temp = subSubItem.filter(item => !topItem.item.includes(item.parentName));
            subSubItem.length = 0;
            subSubItem.push(...temp);

            temp = subItem.filter(item => !topItem.item.includes(item.name));
            subItem.length = 0;
            subItem.push(...temp);
        }
    }
}

const editItem = (id, deep, rootItem, deep2RootItem) => {    
    const itemWrapper = document.querySelector(`.admin-item-wrapper[data-id='${id}']`);
    const nameDiv = itemWrapper.querySelector(".admin-item-name");   
    nameDiv.style.display = 'flex'; 

    const menuTopItemWrapper = document.querySelector(`.w3-top a[data-id='${id}']`);
    const leftSideBarItem = document.querySelector(`nav#mySidebar a[data-id='${id}']`);

    const input = document.createElement("input");
    input.type = "text";
    input.value = nameDiv.textContent;

    const preName = nameDiv.textContent;
    nameDiv.innerHTML = "";
    nameDiv.appendChild(input);

    input.focus();

    if (deep != 2) {
        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                const newName = input.value;
    
                nameDiv.textContent = newName;
                if (menuTopItemWrapper) {
                    menuTopItemWrapper.textContent = newName;
                }
                if (leftSideBarItem) {
                    leftSideBarItem.textContent = newName;
                    const index = rootItem.item.indexOf(id);
                    if (index) {
                        rootItem.item[index] = newName;
                    }
                }

                const result = subItem.find(item => item.name == preName);
                if (result) {
                    result.name = newName;
                }

                subSubItem.forEach(item => {
                    if (item.parentName == preName) {
                        item.parentName = newName;
                    }
                });

                input.remove();
                viewItem(rootItem);
                const adminMenuBtn = document.querySelector(`body > div.w3-top > div > a[data-id='admin-page']`);
                adminMenuBtn.classList.add('active');
            }
        });
    
        input.addEventListener("blur", function() {
            nameDiv.textContent = input.value;
            if (menuTopItemWrapper) {
                menuTopItemWrapper.textContent = input.value;
            }
            if (leftSideBarItem) {
                leftSideBarItem.textContent = input.value;
                const index = rootItem.item.indexOf(id);
                rootItem.item[index] = input.value;
            }
            input.remove();
        });
    }
    else {
        const input2 = document.createElement("input");
        input2.type = "text";
        input2.style.marginLeft = '10px';
        input2.placeholder = 'Số cột (1-12)';
        input2.style.width = '94px';
        const input3 = document.createElement("input");
        input3.type = "text";
        input3.placeholder = 'Số hàng (1-12)';
        input3.style.width = '106px';
        const parentLi = document.querySelector(`.admin-list .admin-item-wrapper[data-id="${id}"]`).closest('li');
        parentLi.appendChild(input2);
        parentLi.appendChild(input3);

        const checkIconWrapper = document.createElement("div");
        const checkIcon = document.createElement("i");
        checkIcon.classList.add("fa-solid", "fa-check");
        checkIcon.style.cursor = 'pointer';
        checkIcon.onclick = () => {
            const nameId = rootItem.id;
            const result = subItem.find(item => item.name == nameId);
            const index = result.item.indexOf(preName);
            let index0 = subItem.findIndex(item => item.name == nameId);
            subItem[index0].item[index] = input.value;

            const result2 = subSubItem.find(
                item => item.parentName == nameId && item.name === preName
            );
            if (result2) {
                result2.name = input.value;
                result2.col = Number(input2.value);
                result2.row = Number(input3.value);
            }
            else {
                subSubItem.push({parentName: nameId, name: preName, content: "", col: Number(input2.value), row: Number(input3.value)})
            }
            viewItem(rootItem, deep2RootItem);
        }
        checkIconWrapper.appendChild(checkIcon);
        checkIconWrapper.style.cssText = `
            display: flex;
            align-items: center;
            margin-left: 5px;
        `;
        parentLi.appendChild(checkIconWrapper);

        const closeIconWrapper = document.createElement("div");
        const closeIcon = document.createElement("i");
        closeIcon.classList.add("fa-solid", "fa-x");
        closeIcon.style.cursor = 'pointer';
        closeIcon.onclick = () => {
            viewItem(rootItem, deep2RootItem);
            const adminMenuBtn = document.querySelector(`body > div.w3-top > div > a[data-id='admin-page']`);
            adminMenuBtn.classList.add('active');
        }
        closeIconWrapper.appendChild(closeIcon);
        closeIconWrapper.style.cssText = `
            display: flex;
            align-items: center;
            margin-left: 10px;
        `;
        parentLi.appendChild(closeIconWrapper);
    }
}

const initItem = (item, rootItem, deep2RootItem) => {
    const deep = item.deep ? item.deep : null;
    const li = document.createElement("li");
    li.className = "admin-item";
    
    const wrapper = document.createElement("div");
    wrapper.className = "admin-item-wrapper";
    wrapper.setAttribute("data-id", item.id);
    
    const nameDiv = document.createElement("div");
    nameDiv.className = "admin-item-name";
    nameDiv.textContent = item.name;
    
    const viewIconDiv = document.createElement("div");
    viewIconDiv.className = "admin-item-view-icon no-select";
    
    const eyeIcon = document.createElement("i");
    eyeIcon.className = "fa-regular fa-eye";
    if (!deep) {
        eyeIcon.onclick = () => {
            viewItem(item);
            eyeIcon.classList.remove('active');
            const menuTopAdminPage = document.querySelector(`.w3-top a[data-id='admin-page']`);
            menuTopAdminPage.classList.add('active');
        };
    }
    else if (item.deep == 1) {
        eyeIcon.onclick = () => {
            viewItem(item, rootItem);
            eyeIcon.classList.remove('active');
            const menuTopAdminPage = document.querySelector(`.w3-top a[data-id='admin-page']`);
            menuTopAdminPage.classList.add('active');
        };
    }
    else {
        eyeIcon.onclick = () => {
            viewAdminContent(item, rootItem, deep2RootItem);
        };
    }
    
    viewIconDiv.appendChild(eyeIcon);
    
    if (item.id !== "courseInfo") {
        const pencilIcon = document.createElement("i");
        pencilIcon.className = "fa-solid fa-pencil";
        pencilIcon.style.marginLeft = "10px";
        pencilIcon.onclick = () => {
            editItem(item.id, deep, rootItem, deep2RootItem);
        };

        viewIconDiv.appendChild(pencilIcon);
        
        const deleteIcon = document.createElement("i");
        deleteIcon.className = "fa-solid fa-x";
        deleteIcon.style.marginLeft = "10px";
        deleteIcon.onclick = () => {
            deleteItem(item.id, deep, rootItem, deep2RootItem);
        };

        viewIconDiv.appendChild(deleteIcon);
    }

    const addIconDiv = document.createElement("div");
    addIconDiv.className = "no-select";
    addIconDiv.style.cursor = "pointer";
    
    const addIcon = document.createElement("i");
    addIcon.className = "fa-solid fa-plus";
    if (deep != 2) {
        addIcon.onclick = () => {
            addItem(item.id, deep, rootItem);
        };
    }
    else {
        addIcon.onclick = () => {
            addItem(item.id, 2, rootItem, false, deep2RootItem);
        };
    }
    
    addIconDiv.appendChild(addIcon);

    wrapper.appendChild(nameDiv);
    wrapper.appendChild(viewIconDiv);
    wrapper.appendChild(addIconDiv);

    li.appendChild(wrapper);

    return li;
}

const initMenuTopItem = (item) => {
    const menuItem = document.createElement("a");
        
    menuItem.href = "javascript:void(0)";
    menuItem.className = "w3-bar-item w3-button";
    menuItem.setAttribute("onclick", `showContent('${item.id}')`);
    menuItem.setAttribute("data-id", item.id);
    
    menuItem.textContent = item.name;
    return menuItem;
}

const viewAdminContent = (item, rootItem, deep2RootItem) => {
    showContent('admin-content');
    const sidebar = document.getElementById("mySidebar");

    const sidebarHeading = document.createElement("h4");
    sidebarHeading.className = "w3-bar-item";
    sidebarHeading.innerHTML = `<b>${deep2RootItem.name}</b>`;

    sidebar.appendChild(sidebarHeading);

    deep2RootItem.item.forEach(text => {
        const anchor = document.createElement("a");
        anchor.className = "w3-bar-item w3-button w3-hover-black";
        anchor.href = "#";
        anchor.textContent = text;
        anchor.setAttribute("data-id", text);
        if (text == rootItem.name) {
            anchor.classList.add("active");
        }
        anchor.onclick = () => {
            viewItem({id: text, name: text, deep: 1}, deep2RootItem);
        }

        sidebar.appendChild(anchor);
    });

    const adminPageLink = document.querySelector('a[data-id="admin-page"]');
    adminPageLink.classList.add("active");

    const heading = document.querySelector("#admin-content-heading");
    heading.innerText = `Admin contents: "${deep2RootItem.name}/${rootItem.name}/${item.name}"`;

    const preview2 = document.querySelector('#admin-menu-left .preview');
    const preview = document.querySelector('#admin-content .preview');
    if (preview) {
        preview.remove();
    }
    if (preview2) {
        preview2.remove();
    }

    const allPreview = document.querySelectorAll('.preview');
    if (allPreview) {
        allPreview.forEach(i => i.remove());
    }

    const previewHtml = `
        <div class="preview">
            <div class="preview-heading">${rootItem.id}</div>
            <div class="layout">
                
            </div>
        </div>
    `;

    const ul = document.querySelector('#admin-content');
    ul.insertAdjacentHTML("beforeend", previewHtml);


    const Indexes = subSubItem
    .map((i, index) => i.parentName == rootItem.id ? index : -1)
    .filter(index => index !== -1);
    
    Indexes.forEach(i => {
        const name = subSubItem[i].name;
        let content = subSubItem[i].content;
        if (!content) {
            content = "Chưa có giữ liệu!!!";
        }
        const col = subSubItem[i].col;
        const row = subSubItem[i].row;
        const layout = document.querySelector("#admin-content > div.preview > div.layout");
        const parentRowElement = layout.lastElementChild;
        if (!parentRowElement) {
            const temp = `
                <div class="parent-row">
                    <div class="col-${col}">
                        <div class="row h-${row}" data-id="${name}" style="word-wrap: break-word; overflow: hidden;">${content}</div>
                    </div>
                </div>
            `;
            layout.insertAdjacentHTML("afterbegin", temp);
        }
        else {
            const colDivs = document.querySelectorAll(".parent-row:last-child > div");
            let totalPreCol = 0;
            colDivs.forEach(i => {
                const preCol = parseInt(i.classList[0].split('-')[1]);
                totalPreCol += preCol;
            });
            
            if (col + totalPreCol <= 12) {
                const temp = `
                    <div class="col-${col}">
                        <div class="row h-${row}" data-id="${name}" style="word-wrap: break-word; overflow: hidden;" style="word-wrap: break-word; overflow: hidden;">${content}</div>
                    </div>
                `;
                parentRowElement.insertAdjacentHTML("beforeend", temp);
            }
            else if (col <= totalPreCol) {
                let added = false;
                colDivs.forEach((i, inx) => {
                    const preCol = parseInt(colDivs[inx].classList[0].split('-')[1]);
                    if (preCol >= col) {
                        if (colDivs[inx + 1]) {
                            const rowDivs = colDivs[inx].querySelectorAll('.row');
                            let totalRow = 0;
                            rowDivs.forEach(i => {
                                const preRow = parseInt(i.classList[1].split('-')[1]);
                                totalRow += preRow;
                            });

                            const rowDivs2 = colDivs[inx + 1].querySelectorAll('.row');
                            let totalRow2 = 0;
                            rowDivs2.forEach(i => {
                                const preRow = parseInt(i.classList[1].split('-')[1]);
                                totalRow2 += preRow;
                            });

                            if (totalRow2 + row <= totalRow) {
                                const temp = `
                                    <div class="row h-${row}">${content}</div>
                                `;
                                colDivs[inx + 1].insertAdjacentHTML("beforeend", temp);
                                added = true;
                            }
                        }
                        if (inx == 0 && !added) {
                            const temp = `
                                <div class="row h-${row}" data-id="${name}" style="width: calc(${col} / ${preCol} * 100%);" style="word-wrap: break-word; overflow: hidden;">${content}</div>
                            `;
                            colDivs[inx].insertAdjacentHTML("beforeend", temp);
                            added = true;
                        }
                        else if (!added) {
                            const rowDivs = colDivs[inx-1].querySelectorAll('.row');
                            let totalPreRow = 0;
                            rowDivs.forEach(i => {
                                const preRow = parseInt(i.classList[1].split('-')[1]);
                                totalPreRow += preRow;
                            });

                            const rowDivs2 = colDivs[inx].querySelectorAll('.row');
                            let totalRow = 0;
                            rowDivs2.forEach(i => {
                                const preRow = parseInt(i.classList[1].split('-')[1]);
                                totalRow += preRow;
                            });

                            if (totalPreRow >= totalRow && !added) {
                                const temp = `
                                    <div class="row h-${row}" data-id="${name}" style="width: calc(${col} / ${preCol} * 100%);" style="word-wrap: break-word; overflow: hidden;">${content}</div>
                                `;
                                colDivs[inx].insertAdjacentHTML("beforeend", temp);
                                added = true;
                            }
                        }

                    }
                    else if (preCol < col && !added) {
                        if (colDivs[inx + 1]) {
                            const rowDivs = colDivs[inx].querySelectorAll('.row');
                            let totalRow = 0;
                            rowDivs.forEach(i => {
                                const preRow = parseInt(i.classList[1].split('-')[1]);
                                totalRow += preRow;
                            });

                            const rowDivs2 = colDivs[inx + 1].querySelectorAll('.row');
                            let totalRow2 = 0;
                            rowDivs2.forEach(i => {
                                const preRow = parseInt(i.classList[1].split('-')[1]);
                                totalRow2 += preRow;
                            });

                            if (totalRow2 + row <= totalRow) {
                                const temp = `
                                    <div class="row h-${row}" data-id="${name}" style="word-wrap: break-word; overflow: hidden;">${content}</div>
                                `;
                                colDivs[inx + 1].insertAdjacentHTML("beforeend", temp);
                                added = true;
                            }
                        }
                        if (!added) {
                            const temp = `
                                <div class="parent-row">
                                    <div class="col-${col}">
                                        <div class="row h-${row} data-id="${name}" style="word-wrap: break-word; overflow: hidden;"">${content}</div>
                                    </div>
                                </div>
                            `;
                            layout.insertAdjacentHTML("beforeend", temp);
                            added = true;
                        }
                    }
                });
                                
            }
            else {
                const temp = `
                    <div class="parent-row">
                        <div class="col-${col}">
                            <div class="row h-${row}" data-id="${name}" style="word-wrap: break-word; overflow: hidden;">${content}</div>
                        </div>
                    </div>
                `;
                layout.insertAdjacentHTML("beforeend", temp);
            }
        }
    });

    const editor = document.querySelector("#editor > div.ql-editor");
    
    const result = subSubItem.find(i => i.parentName === rootItem.name && i.name === item.name);
    editor.setAttribute("data-id", `${result.name}-editor`);
    if ((!(rootItem.name == 'CV' && item.name == 'ảnh')) && !(rootItem.name == 'Thông tin công ty quan tâm' && item.name == 'Ảnh FPT') && !(rootItem.name == 'Sách tham khảo' && item.name == 'Ảnh sách Web')) {
        editor.innerHTML = result.content ? result.content: "Chưa có dữ liệu, bạn tự nhập vào đê";
    }
    else {
        editor.innerHTML = 'Ảnh'
    }
// {name: "Sách tham khảo", item: ["title1", "Ảnh sách Web"]},
    const adminContentDiv = document.querySelector(`#admin-content div[data-id="${result.name}"]`);
    quill.on('text-change', (delta, oldDelta, source) => {
        if (!(rootItem.name == 'CV' && item.name == 'ảnh') && !(rootItem.name == 'Thông tin công ty quan tâm' && item.name == 'Ảnh FPT') && !(rootItem.name == 'Sách tham khảo' && item.name == 'Ảnh sách Web')) {
            if (editor.getAttribute("data-id") == (result.name + "-editor")) {
                result.content = editor.innerHTML;
            }
            if (adminContentDiv) {
                adminContentDiv.innerHTML = editor.innerHTML;
            }
        }
    });
}

const viewItem = (item, rootItem) => {
    showContent('admin-menu-left');
    const title = document.getElementById("admin-menu-left-heading");
    title.innerText = `Admin menu left: "${item.name}"`;

    let helpIconWrapper = document.querySelector("#admin-menu-left div.help-icon-wrapper");
    if (helpIconWrapper) {
        helpIconWrapper.remove();
    }

    if (rootItem) {
        title.innerText = `Admin contents layout: "${rootItem.name}/${item.name}"`;
        const headingWrapper = document.querySelector("#admin-menu-left > div:nth-child(1)");
        headingWrapper.style.position = "relative";
        const helpHtml = `
            <div class="help-icon-wrapper">
                <i class="fa-solid fa-info" style="font-size: 20px; color: white"></i>
            </div>
        `;
        headingWrapper.insertAdjacentHTML("beforeend", helpHtml);
        helpIconWrapper = document.querySelector("#admin-menu-left div.help-icon-wrapper");
        helpIconWrapper.onclick = () => {
            window.open("help.html", "_blank");
        };
    }   

    let firstPlusIcon = document.getElementById("firstPlusIcon");
    if (firstPlusIcon) {
        firstPlusIcon.parentElement.remove();
    }
    const newPlusHtml = `
        <div class="no-select" style="display: flex;">
            <i class="fa-solid fa-plus" style="cursor: pointer;" id="firstPlusIcon"></i>
        </div>
    `;
    title.insertAdjacentHTML("afterend", newPlusHtml);

    firstPlusIcon = document.getElementById("firstPlusIcon");
    if (!rootItem) {
        firstPlusIcon.onclick = function() {
            addItem(null, 1, item, true);
        };
    }
    else {
        firstPlusIcon.onclick = function() {
            addItem(null, 2, item, true, rootItem);
        };
    }

    const sidebar = document.getElementById("mySidebar");

    const heading = document.createElement("h4");
    heading.className = "w3-bar-item";
    heading.innerHTML = `<b>${item.name}</b>`;
    if (rootItem) {
        heading.innerHTML = `<b>${rootItem.name}</b>`;
    }

    sidebar.appendChild(heading);


    let adminLeftList = document.querySelector(".admin-left-list");
    adminLeftList.innerHTML = '';

    let newItem = item.item

    if (rootItem) {
        const foundItem = subItem.find(element => element.name === item.name);
        if (foundItem) {
            newItem = foundItem.item;
        }
    }
    
    if (newItem) {
        const adminMenuLeft = document.getElementById('admin-menu-left');
        
        adminLeftList.remove();

        const newList = document.createElement("ul");
        newList.className = "admin-list admin-left-list";

        adminMenuLeft.append(newList);
        adminLeftList = document.querySelector(".admin-left-list");

        if (!rootItem) {
            newItem.forEach(text => {
                adminLeftList.appendChild(initItem({id: text, name: text, deep: 1,}, item));
            });
        }
        else {
            newItem.forEach(text => {
                adminLeftList.appendChild(initItem({id: text, name: text, deep: 2,}, item, rootItem));
            });
        }
    }

    if (rootItem) {
        rootItem.item.forEach(text => {
            const anchor = document.createElement("a");
            anchor.className = "w3-bar-item w3-button w3-hover-black";
            anchor.href = "#";
            anchor.textContent = text;
            anchor.setAttribute("data-id", text);
    
            sidebar.appendChild(anchor);
        });
    }
    else if (item.item) {
        item.item.forEach(text => {
            const anchor = document.createElement("a");
            anchor.className = "w3-bar-item w3-button w3-hover-black";
            anchor.href = "#";
            anchor.textContent = text;
            anchor.setAttribute("data-id", text);
    
            sidebar.appendChild(anchor);
        });
    }

    if (rootItem) {
        const link =  document.querySelector(`#mySidebar a[data-id='${item.name}']`);
        if (link) {
            link.classList.add('active');
        }

        const sidebarLinks = document.querySelectorAll('#mySidebar a');

        sidebarLinks.forEach(link => {
            link.onclick = function() {
                viewItem({id: `${this.getAttribute('data-id')}`, name: `${this.getAttribute('data-id')}`, deep: 1}, rootItem)
            };
        });
    }
    else {
        const sidebarLinks = document.querySelectorAll('#mySidebar a');

        sidebarLinks.forEach(link => {
            link.onclick = function() {
                viewItem({id: `${this.getAttribute('data-id')}`, name: `${this.getAttribute('data-id')}`, deep: 1}, item);
                const adminMenuBtn = document.querySelector(`body > div.w3-top > div > a[data-id='admin-page']`);
                adminMenuBtn.classList.add('active');
            };
        });
    }

    const preview = document.querySelector('#admin-menu-left .preview');
    const preview2 = document.querySelector('#admin-content .preview');
    if (preview) {
        preview.remove();
    }
    if (preview2) {
        preview2.remove();
    }

    const allPreview = document.querySelectorAll('.preview');
    if (allPreview) {
        allPreview.forEach(i => i.remove());
    }


    if (rootItem) {
        const previewHtml = `
            <div class="preview">
                <div class="preview-heading">${item.id}</div>
                <div class="layout">
                    
                </div>
            </div>
        `;
    
        const ul = document.querySelector('#admin-menu-left');
        ul.insertAdjacentHTML("beforeend", previewHtml);


        const Indexes = subSubItem
        .map((i, index) => i.parentName == item.id ? index : -1)
        .filter(index => index !== -1);
        
        Indexes.forEach(i => {
            const name = subSubItem[i].name;
            const col = subSubItem[i].col;
            const row = subSubItem[i].row;
            const layout = document.querySelector("#admin-menu-left > div.preview > div.layout");
            const parentRowElement = layout.lastElementChild;
            if (!parentRowElement) {
                const temp = `
                    <div class="parent-row">
                        <div class="col-${col}">
                            <div class="row h-${row}">${name}</div>
                        </div>
                    </div>
                `;
                layout.insertAdjacentHTML("afterbegin", temp);
            }
            else {
                const colDivs = document.querySelectorAll(".parent-row:last-child > div");
                let totalPreCol = 0;
                colDivs.forEach(i => {
                    const preCol = parseInt(i.classList[0].split('-')[1]);
                    totalPreCol += preCol;
                });
                
                if (col + totalPreCol <= 12) {
                    const temp = `
                        <div class="col-${col}">
                            <div class="row h-${row}">${name}</div>
                        </div>
                    `;
                    parentRowElement.insertAdjacentHTML("beforeend", temp);
                }
                else if (col <= totalPreCol) {
                    let added = false;
                    colDivs.forEach((i, inx) => {
                        const preCol = parseInt(colDivs[inx].classList[0].split('-')[1]);
                        if (preCol >= col) {
                            if (colDivs[inx + 1]) {
                                const rowDivs = colDivs[inx].querySelectorAll('.row');
                                let totalRow = 0;
                                rowDivs.forEach(i => {
                                    const preRow = parseInt(i.classList[1].split('-')[1]);
                                    totalRow += preRow;
                                });

                                const rowDivs2 = colDivs[inx + 1].querySelectorAll('.row');
                                let totalRow2 = 0;
                                rowDivs2.forEach(i => {
                                    const preRow = parseInt(i.classList[1].split('-')[1]);
                                    totalRow2 += preRow;
                                });

                                if (totalRow2 + row <= totalRow) {
                                    const temp = `
                                        <div class="row h-${row}">${name}</div>
                                    `;
                                    colDivs[inx + 1].insertAdjacentHTML("beforeend", temp);
                                    added = true;
                                }
                            }
                            if (inx == 0 && !added) {
                                const temp = `
                                    <div class="row h-${row}" style="width: calc(${col} / ${preCol} * 100%);">${name}</div>
                                `;
                                colDivs[inx].insertAdjacentHTML("beforeend", temp);
                                added = true;
                            }
                            else if (!added) {
                                const rowDivs = colDivs[inx-1].querySelectorAll('.row');
                                let totalPreRow = 0;
                                rowDivs.forEach(i => {
                                    const preRow = parseInt(i.classList[1].split('-')[1]);
                                    totalPreRow += preRow;
                                });

                                const rowDivs2 = colDivs[inx].querySelectorAll('.row');
                                let totalRow = 0;
                                rowDivs2.forEach(i => {
                                    const preRow = parseInt(i.classList[1].split('-')[1]);
                                    totalRow += preRow;
                                });

                                if (totalPreRow >= totalRow && !added) {
                                    const temp = `
                                        <div class="row h-${row}" style="width: calc(${col} / ${preCol} * 100%);">${name}</div>
                                    `;
                                    colDivs[inx].insertAdjacentHTML("beforeend", temp);
                                    added = true;
                                }
                            }

                        }
                        else if (preCol < col && !added) {
                            if (colDivs[inx + 1]) {
                                const rowDivs = colDivs[inx].querySelectorAll('.row');
                                let totalRow = 0;
                                rowDivs.forEach(i => {
                                    const preRow = parseInt(i.classList[1].split('-')[1]);
                                    totalRow += preRow;
                                });

                                const rowDivs2 = colDivs[inx + 1].querySelectorAll('.row');
                                let totalRow2 = 0;
                                rowDivs2.forEach(i => {
                                    const preRow = parseInt(i.classList[1].split('-')[1]);
                                    totalRow2 += preRow;
                                });

                                if (totalRow2 + row <= totalRow) {
                                    const temp = `
                                        <div class="row h-${row}">${name}</div>
                                    `;
                                    colDivs[inx + 1].insertAdjacentHTML("beforeend", temp);
                                    added = true;
                                }
                            }
                            if (!added) {
                                const temp = `
                                    <div class="parent-row">
                                        <div class="col-${col}">
                                            <div class="row h-${row}">${name}</div>
                                        </div>
                                    </div>
                                `;
                                layout.insertAdjacentHTML("beforeend", temp);
                                added = true;
                            }
                        }
                    });
                                   
                }
                else {
                    const temp = `
                        <div class="parent-row">
                            <div class="col-${col}">
                                <div class="row h-${row}">${name}</div>
                            </div>
                        </div>
                    `;
                    layout.insertAdjacentHTML("beforeend", temp);
                }
            }
        });
    }

    if (item.id == 'student-info' && item.name == 'Thông tin sinh viên') {
        
        const heading = document.querySelector('#admin-menu-left-heading');
        heading.classList.add("student-page-heading");
        const temp = `
            <div class="student-page-reset-icon"><i class="fa-solid fa-rotate-left"></i></div>
        `;

        heading.insertAdjacentHTML("afterbegin", temp)
        const resetBtn = document.querySelector(".student-page-reset-icon");
        // import { subItem, adminPageItem, subSubItem, subItemStudent, adminPageItemStudent, subSubItemStudent } from "../globalVariable.js";
        resetBtn.onclick = () => {
            const item2 = adminPageItem.find(element => element.id === "student-info");
            item2.item = ["CV", "Các dự án đã tham gia", "Sinh hoạt cộng đồng",];

            const filteredItems = subSubItem.filter(item => 
                item.parentName !== "CV" && 
                item.parentName !== "Các dự án đã tham gia" && 
                item.parentName !== "Sinh hoạt cộng đồng"
            );
            subSubItem.length = 0;
            subSubItem.push(...filteredItems);

            subSubItemStudent.forEach(i => {
                subSubItem.push(i);
            })

            const filteredItems2 = subItem.filter(item => 
                item.name !== "CV" && 
                item.name !== "Các dự án đã tham gia" && 
                item.name !== "Sinh hoạt cộng đồng"
            );
            subItem.length = 0;
            subItem.push(...filteredItems2);

            subItemStudent.forEach(i => {
                subItem.push(i);
            })
            viewItem(item, rootItem)
        }
    }
}

function addMenuItems() {
    const menuContainer = document.querySelector(".w3-bar");
    menuTopItem.forEach(item => {
        menuContainer.appendChild(initMenuTopItem(item));
    });
}

addMenuItems();

function addDynamicMenuItems() {
    const adminList = document.querySelector(".admin-list");
    adminPageItem.forEach(item => adminList.appendChild(initItem(item)));
}

addDynamicMenuItems();

const createMainContent2 = (id, container, index) => {
    if (id == "info") {
        
    }
    container.innerHTML = "";
    const t = `<div id="sub${id}"></div>`;
    container.innerHTML = t;
    adminPageItem[index].item.map((i) => {
        const Indexes = subSubItem.map((titem, index) => (titem.parentName == i ? index : -1)).filter((index) => index !== -1);
        const previewHtml = `
            <div class="preview" style="margin-top: 20px" id='${i}'>
                <div class="preview-heading">${i}</div>
                <div class="layout">
                    
                </div>
            </div>
        `;

        const ul = document.querySelector(`#sub${id}`);
        ul.insertAdjacentHTML("beforeend", previewHtml);

        Indexes.forEach((i, inx) => {
            const name = subSubItem[i].name;
            let content = subSubItem[i].content;
            if (!content) {
                content = "Chưa có dữ liệu.";
            }
            const col = subSubItem[i].col;
            const row = subSubItem[i].row;
            const layout = document.querySelector(`#sub${id} > div.preview:last-child > div.layout`);
            const parentRowElement = layout.lastElementChild;

            if (!parentRowElement) {
                const temp = `
                    <div class="parent-row">
                        <div class="col-${col}">
                            <div class="row h-${row}" data-id="${name}" style="word-wrap: break-word; overflow: hidden;">${content}</div>
                        </div>
                    </div>
                `;
                layout.insertAdjacentHTML("afterbegin", temp);
            } else {
                const colDivs = document.querySelectorAll(`#sub${id} > div.preview:last-child .parent-row:last-child > div`);
                let totalPreCol = 0;
                colDivs.forEach((i) => {
                    const preCol = parseInt(i.classList[0].split("-")[1]);
                    totalPreCol += preCol;
                });

                if (col + totalPreCol <= 12) {
                    const temp = `
                        <div class="col-${col}">
                            <div class="row h-${row}" data-id="${name}" style="word-wrap: break-word; overflow: hidden;" style="word-wrap: break-word; overflow: hidden;">${content}</div>
                        </div>
                    `;
                    parentRowElement.insertAdjacentHTML("beforeend", temp);
                } else if (col <= totalPreCol) {
                    let added = false;
                    colDivs.forEach((i, inx) => {
                        const preCol = parseInt(colDivs[inx].classList[0].split("-")[1]);
                        if (preCol >= col) {
                            if (colDivs[inx + 1]) {
                                const rowDivs = colDivs[inx].querySelectorAll(".row");
                                let totalRow = 0;
                                rowDivs.forEach((i) => {
                                    const preRow = parseInt(i.classList[1].split("-")[1]);
                                    totalRow += preRow;
                                });

                                const rowDivs2 = colDivs[inx + 1].querySelectorAll(".row");
                                let totalRow2 = 0;
                                rowDivs2.forEach((i) => {
                                    const preRow = parseInt(i.classList[1].split("-")[1]);
                                    totalRow2 += preRow;
                                });

                                if (totalRow2 + row <= totalRow) {
                                    const temp = `
                                        <div class="row h-${row}">${content}</div>
                                    `;
                                    colDivs[inx + 1].insertAdjacentHTML("beforeend", temp);
                                    added = true;
                                }
                            }
                            if (inx == 0 && !added) {
                                const temp = `
                                    <div class="row h-${row}" data-id="${name}" style="width: calc(${col} / ${preCol} * 100%);" style="word-wrap: break-word; overflow: hidden;">${content}</div>
                                `;
                                colDivs[inx].insertAdjacentHTML("beforeend", temp);
                                added = true;
                            } else if (!added) {
                                const rowDivs = colDivs[inx - 1].querySelectorAll(".row");
                                let totalPreRow = 0;
                                rowDivs.forEach((i) => {
                                    const preRow = parseInt(i.classList[1].split("-")[1]);
                                    totalPreRow += preRow;
                                });

                                const rowDivs2 = colDivs[inx].querySelectorAll(".row");
                                let totalRow = 0;
                                rowDivs2.forEach((i) => {
                                    const preRow = parseInt(i.classList[1].split("-")[1]);
                                    totalRow += preRow;
                                });

                                if (totalPreRow >= totalRow && !added) {
                                    const temp = `
                                        <div class="row h-${row}" data-id="${name}" style="width: calc(${col} / ${preCol} * 100%);" style="word-wrap: break-word; overflow: hidden;">${content}</div>
                                    `;
                                    colDivs[inx].insertAdjacentHTML("beforeend", temp);
                                    added = true;
                                }
                            }
                        } else if (preCol < col && !added) {
                            if (colDivs[inx + 1]) {
                                const rowDivs = colDivs[inx].querySelectorAll(".row");
                                let totalRow = 0;
                                rowDivs.forEach((i) => {
                                    const preRow = parseInt(i.classList[1].split("-")[1]);
                                    totalRow += preRow;
                                });

                                const rowDivs2 = colDivs[inx + 1].querySelectorAll(".row");
                                let totalRow2 = 0;
                                rowDivs2.forEach((i) => {
                                    const preRow = parseInt(i.classList[1].split("-")[1]);
                                    totalRow2 += preRow;
                                });

                                if (totalRow2 + row <= totalRow) {
                                    const temp = `
                                        <div class="row h-${row}" data-id="${name}" style="word-wrap: break-word; overflow: hidden;">${content}</div>
                                    `;
                                    colDivs[inx + 1].insertAdjacentHTML("beforeend", temp);
                                    added = true;
                                }
                            }
                            if (!added) {
                                const temp = `
                                    <div class="parent-row">
                                        <div class="col-${col}">
                                            <div class="row h-${row} data-id="${name}" style="word-wrap: break-word; overflow: hidden;"">${content}</div>
                                        </div>
                                    </div>
                                `;
                                layout.insertAdjacentHTML("beforeend", temp);
                                added = true;
                            }
                        }
                    });
                } else {
                    const temp = `
                        <div class="parent-row">
                            <div class="col-${col}">
                                <div class="row h-${row}" data-id="${name}" style="word-wrap: break-word; overflow: hidden;">${content}</div>
                            </div>
                        </div>
                    `;
                    layout.insertAdjacentHTML("beforeend", temp);
                }
            }
        });
    });

    if (id == "student-info") {

        const el = document.querySelector("#student-info .container");
        el.style.marginTop = "50px";
    }

    if (id == "web-tech") {
        const el = document.querySelector("#web-tech .container");
        const temp = `
            <div class="header">Các công nghệ web</div>
            <p>Dưới đây là các công nghệ phổ biến được sử dụng trong xây dựng ứng dụng Web:</p>
        `;
        const ele = document.querySelectorAll("#subweb-tech .layout .parent-row .row");
        ele.forEach(div => {
            div.style.border = "none";
        });
        el.insertAdjacentHTML("afterbegin", temp);
    }
    if (id == "info") {
        const el = document.querySelector("#info .container");
        const ele = document.querySelectorAll("#subinfo .layout .parent-row .row");
        ele.forEach(div => {
            div.style.border = "none";
        });
        const temp = `
            <div class="header">Thông tin môn học</div>
            <div style="width: 100%;">
          <table cellspacing="0" cellpadding="0" style="width: 100%;">
            <tbody>
              <tr>
                <td style="vertical-align: top;">
                  <div class="GBC">
                    <div style="display: flex; flex-wrap: wrap; gap: 20px;">
                      <!-- Cột 1 -->
                      <div style="flex: 1; min-width: 300px;">
                        <label>Đơn vị (*)</label>
                        <select id="dropdown" disabled="" style="width: 100%;">
                          <option>Trường Công nghệ Thông tin và Truyền thông</option>
                        </select>
                      </div>

                      <div style="flex: 1; min-width: 300px;">
                        <label>Đơn vị con</label>
                        <select id="dropdown" disabled="" style="width: 100%;">
                          <option>Nothing selected</option>
                        </select>
                      </div>

                      <div style="flex: 1; min-width: 300px;">
                        <label>Mã học phần (*)</label>
                        <input type="text" value="IT4409" dir="ltr" readonly="" disabled="" style="width: 100%;">
                      </div>

                      <div style="flex: 1; min-width: 300px;">
                        <label>Tên học phần</label>
                        <input type="text" value="Công nghệ web và dịch vụ trực tuyến" dir="ltr" readonly="" disabled="" style="width: 100%; white-space: nowrap; overflow: hidden;">
                      </div>

                      <div style="flex: 1; min-width: 300px;">
                        <label>Tên tiếng Anh</label>
                        <input type="text" value="Web technologies and e-Services" class="form-control IBC form-control-readonly" dir="ltr" readonly="" disabled="" style="width: 100%;">
                      </div>

                      <div style="flex: 1; min-width: 300px;">
                        <label>Hệ đào tạo</label>
                        <select id="dropdown" disabled="" style="width: 100%;">
                          <option>4 items selected</option>
                        </select>
                        <div style="width: 100%;">
                          <a>Thạc sỹ Khoa học&nbsp;[X]&nbsp;&nbsp;&nbsp;</a>
                          <a>Kỹ sư chính quy&nbsp;[X]&nbsp;&nbsp;&nbsp;</a>
                          <a>Cử nhân&nbsp;[X]&nbsp;&nbsp;&nbsp;</a>
                          <a>Việt-Nhật&nbsp;[X]&nbsp;&nbsp;&nbsp;</a>
                        </div>
                      </div>

                      <div style="flex: 1; min-width: 300px;">
                        <label>Ngành đào tạo</label>
                        <select id="dropdown" disabled="" style="width: 100%;">
                          <option>Trường Công nghệ Thông tin và Truyền thông</option>
                        </select>
                      </div>

                      <div style="flex: 1; min-width: 300px;">
                        <label>Loại hình (*)</label>
                        <select id="dropdown" disabled="" style="width: 100%;">
                          <option>Lớp</option>
                        </select>
                      </div>

                      <div style="flex: 1; min-width: 300px;">
                        <label>Điều phối viên</label>
                        <select id="dropdown" disabled="" style="width: 100%;">
                          <option>Phạm Huy Hoàng</option>
                        </select>
                      </div>

                      <div style="flex: 1; min-width: 300px;">
                        <label>Nhóm chuyên môn</label>
                        <select id="dropdown" disabled="" style="width: 100%;">
                          <option>Phạm Huy Hoàng</option>
                        </select>
                      </div>
                    </div>

                    <!-- Cột 2 -->
                    <div style="display: flex; flex-wrap: wrap; gap: 20px;">
                      <div style="flex: 1; min-width: 300px;">
                        <label>HP liên quan</label>
                        <input type="text" placeholder="Nhập mã HP" disabled="" style="width: 100%;">
                      </div>

                      <div style="flex: 1; min-width: 300px;">
                        <label>Hệ số điểm thực hành</label>
                        <input type="text" value="0" class="form-control IBC" dir="ltr" disabled="" style="width: 100%;">
                      </div>

                      <div style="flex: 1; min-width: 300px;">
                        <label>Số tín chỉ</label>
                        <input type="text" value="3" class="form-control IBC" dir="ltr" disabled="" style="width: 100%;">
                      </div>

                      <div style="flex: 1; min-width: 300px;">
                        <label>Số giờ LT</label>
                        <input type="text" value="2" class="form-control IBC" dir="ltr" disabled="" style="width: 100%;">
                      </div>

                      <div style="flex: 1; min-width: 300px;">
                        <label>Số giờ BT</label>
                        <input type="text" value="2" class="form-control IBC" dir="ltr" disabled="" style="width: 100%;">
                      </div>

                      <div style="flex: 1; min-width: 300px;">
                        <label>Số giờ TN/TH</label>
                        <input type="text" value="0" class="form-control IBC" dir="ltr" disabled="" style="width: 100%;">
                      </div>

                      <div style="flex: 1; min-width: 300px;">
                        <label>Số giờ tự học</label>
                        <input type="text" value="6" class="form-control IBC" dir="ltr" disabled="" style="width: 100%;">
                      </div>

                      <div style="flex: 1; min-width: 300px;">
                        <label>Số giờ thực tập</label>
                        <input type="text" value="0" class="form-control IBC" dir="ltr" disabled="" style="width: 100%;">
                      </div>

                      <div style="flex: 1; min-width: 300px;">
                        <label>kHD thực tập</label>
                        <input type="text" value="0" class="form-control IBC" dir="ltr" disabled="" style="width: 100%;">
                      </div>

                      <div style="flex: 1; min-width: 300px;">
                        <label>kHD đồ án</label>
                        <input type="text" value="0" class="form-control IBC" dir="ltr" disabled="" style="width: 100%;">
                      </div>

                      <div style="flex: 1; min-width: 300px;">
                        <label>Phân bố</label>
                        <input type="text" value="3(2-2-0-6)" class="form-control IBC" dir="ltr" disabled="" style="width: 100%;">
                      </div>

                      <div style="flex: 1; min-width: 300px;">
                        <label>Hình thức thi cuối kỳ</label>
                        <select id="dropdown" disabled="" style="width: 100%;">
                          <option>[Chọn hình thức thi cuối kỳ]</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        `;
        el.insertAdjacentHTML("afterbegin", temp);
    }
};

const handleMenuTopClick2 = (id) => {
    const allPreview = document.querySelectorAll("div.preview");
    if (allPreview) {
        allPreview.forEach((i) => i.remove());
    }
    const sidebar = document.getElementById("mySidebar");
    sidebar.remove();
    let h4;
    let index = menuTopItem.findIndex((element) => element.id === id) + 1;
    if (index) {
        h4 = menuTopItem[index].name;
    }
    if (id == "courseInfo") {
        h4 = "Menu";
    }

    const temp1 = `
        <nav class="w3-sidebar w3-bar-block w3-collapse w3-large w3-theme-l5 w3-animate-left" id="mySidebar">
            <h4 class="w3-bar-item"><b>${h4}</b></h4>
            
    `;
    let temp2 = "";
    adminPageItem[index].item.map((i) => {
        const t = `
            <a class="w3-bar-item w3-button w3-hover-black" href="#${i}">${i}</a>
        `;
        temp2 += t;
    });
    const temp = temp1 + temp2 + "</nav>";

    const t = document.querySelector("body .w3-top");
    t.insertAdjacentHTML("afterend", temp);

    const container = document.querySelector(`#${id} .container`);
    if (id == 'courseInfo') {
        const element = document.querySelector('a[data-id="courseInfo"]');
        element.classList.add('active');
        element.querySelector('i').classList.add('active')
    }
    if (id != 'courseInfo') {
        const element = document.querySelector('a[data-id="courseInfo"] i')
        if (element.classList.contains('active')) {
            element.classList.remove('active')
        }
    }
    createMainContent2(id, container, index);
};

const init2 = () => {
    const links = Array.from(document.querySelectorAll(".w3-top a.w3-bar-item.w3-button")).filter((link) => link.classList.length === 2);
    links.pop();
    links.forEach((i) => {
        let id = i.getAttribute("data-id");
        i.onclick = function () {
            showContent(id);
            handleMenuTopClick2(id);
        };
    });
};

init2();

const element = document.querySelector('a[data-id="courseInfo"]');
element.click();
