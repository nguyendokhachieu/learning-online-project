import "./navigation.scss";

export default function Navigation() {
  return (
    <div className="header-nav">
      <ul className="nav-list">
        <li className="item close-nav" title="Đóng tất cả các tab">
          <a href="/" className="link">
            <i className="fas fa-times icon"></i>
          </a>
        </li>
        <li className="item active">
          <a href="/" className="link">
            Trang chủ
          </a>
        </li>
        <li className="item">
          <a href="/" className="link">
            Khóa học
          </a>
        </li>
      </ul>
    </div>
  );
}
