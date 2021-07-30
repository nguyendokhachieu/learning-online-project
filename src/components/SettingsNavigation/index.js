import "./settings-nav.scss";

import { Link, useHistory } from "react-router-dom";

export default function SettingsNavigation() {
  const history = useHistory();

  return (
    <div className="settings-side-nav-options">
      <h2 className="settings-title-xs settings-title-m">Tùy chọn cài đặt</h2>
      <ul className="settings-options-list">
        <li className={ history.location.pathname === '/settings/account' ? "settings-se-item active" : "settings-se-item" }>
          <Link to="/settings/account" className="settings-nav-link">
            Thông tin chung tài khoản
          </Link>
        </li>
        <li className={ history.location.pathname === '/settings/change-password' ? "settings-se-item active" : "settings-se-item" }>
          <Link to="/settings/change-password" className="settings-nav-link">
            Thay đổi mật khẩu
          </Link>
        </li>
        <li className={ history.location.pathname === '/settings/upload-avatar' ? "settings-se-item active" : "settings-se-item" }>
          <Link to="/settings/upload-avatar" className="settings-nav-link">
            Cập nhật ảnh đại diện
          </Link>
        </li>
      </ul>
    </div>
  );
}
