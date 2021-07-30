
export default function ChangePassword() {
  return (
    <>
      <h2 className="settings-title-m">Thay đổi mật khẩu</h2>
      <div className="settings-instruct">
        <i className="fas fa-info-circle icon"></i>
        <span className="text">
          Chức năng thay đổi mật khẩu chỉ dành cho tài khoản dùng email thông
          thường để đăng ký. Tài khoản của bạn đăng nhập bằng Facebook / Google
          nên sẽ không thể thay đổi mật khẩu
        </span>
      </div>
      <div className="settings-inner">
        <form>
          <div className="row">
            <div className="col-6 col-0">
              <span className="text">Mật khẩu cũ</span>
            </div>
            <div className="col-6 col-12">
              <input type="text" className="input" />
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-0">
              <span className="text">Mật khẩu mới</span>
            </div>
            <div className="col-6 col-12">
              <input type="text" className="input" />
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-0">
              <span className="text">Nhập lại mật khẩu mới</span>
            </div>
            <div className="col-6 col-12">
              <input type="text" className="input" />
            </div>
          </div>
          <div className="row">
            <button type="submit" className="btn btn-save-change disabled">
              Lưu thay đổi
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
