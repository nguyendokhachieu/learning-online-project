import "./courses-section.scss";

export default function CoursesSection() {
  return (
    <section className="courses-section-dropdown-box">
      <div className="courses-heading">
        <h3 className="title">Khóa học của bạn</h3>
        <div className="options">Xem tất cả</div>
      </div>
      <div className="scrollable-list">
        <div className="courses-list">
          <div className="item">
            <div className="image-wrap">
              <img
                src="https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-de-thuong.jpg"
                alt="avatar"
                className="img"
              />
            </div>
            <div className="body">
              <h6 className="name">
                Khóa học HTML, CSS cơ bảnSS cơ bảnSS cơ bản
              </h6>
              <div className="text">
                Xây dựng web trong thực tế với HTML CSS
              </div>
              <div className="date-time">8 tháng trước</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
