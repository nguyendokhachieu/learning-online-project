import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { actShowNotificationCard } from "../../store/modals/actions";

import { actChangePasswordAsync, actCheckUserCanChangePasswordAsync } from "../../store/users/actions";

export default function ChangePassword() {
  const dispatch = useDispatch();
  const oldPasswordRef = useRef();
  const history = useHistory();
  const { user } = useSelector(state => state.users.currentUser);

  const [loading, setLoading] = useState(false);
  const [canChangePass, setCanChangePass] = useState(false);

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [reNewPassword, setReNewPassword] = useState('');

  function changePassword(e) {
    e.preventDefault();

    if (loading) return;
    if (!user) return;
    if (!canChangePass) return;
    if (!oldPassword) return;
    if (!newPassword) return;
    if (!reNewPassword) return;

    setOldPassword('');
    setNewPassword('');
    setReNewPassword('');

    if (newPassword !== reNewPassword) {
      dispatch(actShowNotificationCard({
        content: 'Password mới phải trùng nhau',
        link: ''
      }))

      oldPasswordRef.current && oldPasswordRef.current.focus();

      return;
    }

    if (newPassword.length <= 7) {
      dispatch(actShowNotificationCard({
        content: 'Password mới phải có ít nhất 8 ký tự bất kỳ',
        link: ''
      }))

      oldPasswordRef.current && oldPasswordRef.current.focus();

      return;
    }

    setLoading(true);
    dispatch(actChangePasswordAsync({
      oldPassword,
      newPassword,
      reNewPassword,
    })).then(response => {
      setLoading(false)

      if (!response?.ok) {
        dispatch(actShowNotificationCard({
          content: response?.message || 'Có lỗi xảy ra!',
          link: ''
        }))

        oldPasswordRef.current && oldPasswordRef.current.focus();
        return;
      }

      dispatch(actShowNotificationCard({
        content: 'Thay đổi mật khẩu thành công! Vui lòng đăng nhập lại',
        link: ''
      }))

      localStorage.removeItem('accessToken');
      setTimeout(() => {
        window.location.assign('/login');
      }, 1000);
    })
  }

  useEffect(() => {
    if (loading) return;

    setLoading(true);
    dispatch(actCheckUserCanChangePasswordAsync()).then(response => {
      setLoading(false);
      setCanChangePass(response?.ok || false);
    });
  }, []);

  if (!user) return null;

  return (
    <>
      <h2 className="settings-title-m">Thay đổi mật khẩu</h2>
      {
        canChangePass 
          ? null 
          : (
          <div className="settings-instruct">
            <i className="fas fa-info-circle icon"></i>
            <span className="text">
              Chức năng thay đổi mật khẩu chỉ dành cho tài khoản dùng email thông
              thường để đăng ký. Tài khoản của bạn đăng nhập bằng Facebook / Google
              nên sẽ không thể thay đổi mật khẩu
            </span>
          </div>
        )
      }
      {
        !canChangePass
          ? null
          : (
            <div className="settings-inner">
              <form onSubmit={ changePassword }>
                <div className="row">
                  <div className="col-6 col-0">
                    <span className="text">Mật khẩu cũ</span>
                  </div>
                  <div className="col-6 col-12">
                    <input 
                      type="text" 
                      className="input" 
                      placeholder="Nhập mật khẩu cũ" 
                      value={ oldPassword }
                      ref={ oldPasswordRef }
                      onChange={ e => setOldPassword(e.target.value) }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 col-0">
                    <span className="text">Mật khẩu mới</span>
                  </div>
                  <div className="col-6 col-12">
                    <input 
                      type="text" 
                      className="input" 
                      placeholder="Nhập mật khẩu mới" 
                      value={ newPassword }
                      onChange={ e => setNewPassword(e.target.value) }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 col-0">
                    <span className="text">Nhập lại mật khẩu mới</span>
                  </div>
                  <div className="col-6 col-12">
                    <input 
                      type="text" 
                      className="input" 
                      placeholder="Nhập lại mật khẩu mới" 
                      value={ reNewPassword }
                      onChange={ e => setReNewPassword(e.target.value) }
                    />
                  </div>
                </div>
                <div className="row">
                  <button 
                    type="submit" 
                    className={ loading ? "btn btn-save-change disabled" : "btn btn-save-change" }
                  >
                    { loading ? "Đang lưu thay đổi" : "Lưu thay đổi" }
                  </button>
                </div>
              </form>
            </div>
          )
      }
    </>
  );
}
