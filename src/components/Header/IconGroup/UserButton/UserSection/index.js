import "./user-section.scss";

export default function UserSection({
  showUserBox = false,
}) 
{
  return (
    <section className={ showUserBox ? "user-section-dropdown-box active" : "user-section-dropdown-box" }>
      <div className="user-heading">
        <h3 className="title">Tài khoản của bạn</h3>
      </div>
      <div className="user-list">
        <div className="user-item">
          <i className="fas fa-cog icon"></i>
          <span className="text">Cài đặt</span>
        </div>
        <div className="user-item">
          <i className="fas fa-sign-out-alt icon"></i>
          <span className="text">Đăng xuất</span>
        </div>
      </div>
    </section>
  );
}
