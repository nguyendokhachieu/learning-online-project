import "./navigation.scss";

export default function Navigation({
  showSideNav = false,
  onHideSideNav = function() {},
}) 
{
  return (
    <div className={ showSideNav ? "header-nav active" : "header-nav" }>
      <ul className="nav-list">
        <li 
          className="item close-nav" 
          title="Đóng tất cả các tab"
          onClick={ () => onHideSideNav(false) }
        >
          <div className="link">
            <i className="fas fa-times icon"></i>
          </div>
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
