import "./user-section.scss";

import { useDispatch, useSelector } from "react-redux";
import { actShowLogoutConfirmationModal } from "../../../../../store/modals/actions";

export default function UserSection({
  showUserBox = false,
}) 
{
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.users.currentUser);

  return (
    <section className={ showUserBox ? "user-section-dropdown-box active" : "user-section-dropdown-box" }>
      <div className="user-heading" title={ user && user.name }>
        <h3 className="title">{ user && user.name }</h3>
      </div>
      <div className="user-list">
        <div className="user-item">
          <i className="fas fa-cog icon"></i>
          <span className="text">Cài đặt</span>
        </div>
        <div 
          className="user-item" 
          onClick={ () => dispatch(actShowLogoutConfirmationModal()) }
        >
          <i className="fas fa-sign-out-alt icon"></i>
          <span className="text">Đăng xuất</span>
        </div>
      </div>
    </section>
  );
}
