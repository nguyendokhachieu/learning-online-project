import "./icon-group.scss";

import NotificationsSection from "./NotificationsSection";
import CoursesSection from "./CoursesSection";
import UserSection from "./UserSection";

export default function IconGroup() {
  return (
    <div className="icon-group">
      <div className="icon-wrap login-button">
        <a href="/" className="link">
          Đăng nhập
        </a>
      </div>
      <div className="icon-wrap active">
        <a href="/" className="link">
          <i className="fas fa-search icon"></i>
        </a>
      </div>
      <div className="icon-wrap notifications-icon">
        <a href="/" className="link">
          <i className="fas fa-bell icon"></i>
        </a>
        <NotificationsSection />
      </div>
      <div className="icon-wrap courses-icon">
        <a href="/" className="link">
          <i className="fas fa-bookmark icon"></i>
        </a>
        <CoursesSection />
      </div>
      <div className="icon-wrap user-avatar">
        <a href="/" className="link">
          <img
            src="https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-de-thuong.jpg"
            alt="avatar"
            className="img"
          />
        </a>
        <UserSection />
      </div>
      <div className="icon-wrap hamburger">
        <a href="/" className="link">
          <i className="fas fa-bars icon"></i>
        </a>
      </div>
    </div>
  );
}
