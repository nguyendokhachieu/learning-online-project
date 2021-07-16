import { Link } from "react-router-dom";

export default function LoginButton() {
    return (
    <div className="icon-wrap login-button">
      <Link to="/login" className="link">
        Đăng nhập
      </Link>
    </div>
  );
}
