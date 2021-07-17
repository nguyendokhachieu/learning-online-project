import "./modal-logout-confirmation.scss";

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actHideLogoutConfirmationModal } from "../../../../../../store/modals/actions";

export default function ModalLogoutConfirmation({
    show = false,
}) 
{
    const modalRef = useRef();
    const dispatch = useDispatch();
    const { logoutConfirmationModal } = useSelector(state => state.modals);

    function logout() {
        dispatch(actHideLogoutConfirmationModal());
        localStorage.setItem('accessToken', '');
        window.location.reload();
    }
    function onClickHandler(e) {
        logoutConfirmationModal.show 
            && modalRef.current 
            && !modalRef.current.contains(e.target) 
            && dispatch(actHideLogoutConfirmationModal());
    }

    useEffect(() => {
        document.addEventListener('click', onClickHandler);
        return () => document.removeEventListener('click', onClickHandler);
    });

    return (
        <div className={ show ? "modal-logout-confirmation active" : "modal-logout-confirmation" }>
            <div className="inner-modal-logout-confirmation" ref={ modalRef }>
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