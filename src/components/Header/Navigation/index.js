import "./navigation.scss";

import { Link, useLocation } from "react-router-dom";

export default function Navigation({
  showSideNav = false,
  onHideSideNav = function() {},
}) 
{
  const location = useLocation();

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
        <li className={ location.pathname === '/' ? "item active" : "item" }>
          <Link to="/" className="link">
            Trang chủ
          </Link>
        </li>
        <li className={ location.pathname === '/courses' ? "item active" : "item" }>
          <Link to="/courses" className="link">
            Khóa học
          </Link>
        </li>
      </ul>
    </div>
  );
}
