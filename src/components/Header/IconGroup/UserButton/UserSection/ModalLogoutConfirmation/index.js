import "./modal-logout-confirmation.scss";

import { useDispatch } from "react-redux";
import { actHideLogoutConfirmationModal } from "../../../../../../store/modals/actions";

export default function ModalLogoutConfirmation({
    show = false,
}) 
{
    const dispatch = useDispatch();

    function logout() {
        dispatch(actHideLogoutConfirmationModal());
        localStorage.setItem('accessToken', '');
        window.location.reload();
    }

    return (
        <div className={ show ? "modal-logout-confirmation active" : "modal-logout-confirmation" }>
            <div className="inner-modal-logout-confirmation">
                <div className="heading">
                    <h5 className="title">Đăng xuất ?</h5>
                </div>
                <div className="buttons">
                    <button 
                        className="btn btn-confirm"
                        onClick={ logout }
                    >
                        OK
                    </button>
                    <button 
                        className="btn btn-cancel" 
                        onClick={ () => dispatch(actHideLogoutConfirmationModal()) }
                    >
                        Hủy bỏ
                    </button>
                </div>
            </div>
        </div>
    );
}