import "./modal-confirm-delete.scss";

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actHideModalConfirmDeleteNote } from "../../../../store/modals/actions";
import { actDeleteNoteAsync } from "../../../../store/notes/actions";

export default function ModalConfirmDelete() {
    const modalRef = useRef();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const { deleteNoteConfirmationModal } = useSelector(state => state.modals);

    function deleteNote() {
        if (loading) return;
        if (!deleteNoteConfirmationModal.parsley) return;

        setLoading(true);
        dispatch(actDeleteNoteAsync({ 
            parsley: deleteNoteConfirmationModal.parsley 
        })).then(() => {
            setLoading(false);
            dispatch(actHideModalConfirmDeleteNote({
                isNoteDeleted: deleteNoteConfirmationModal.parsley,
            }));
        })
    }
    function onClickHandler(e) {
        deleteNoteConfirmationModal.show 
            && modalRef.current 
            && !modalRef.current.contains(e.target) 
            && dispatch(actHideModalConfirmDeleteNote({
                isNoteDeleted: '0',
            }));
    }

    useEffect(() => {
        document.addEventListener('click', onClickHandler);
        return () => document.removeEventListener('click', onClickHandler);
    });

    return (
        <div className={ deleteNoteConfirmationModal.show ? "modal-confirm-deleteNote show" : "modal-confirm-deleteNote" }>
            <div className="modal-confirm-deleteNoteInner" ref={ modalRef }>
            <div className="heading">
                    <h5 className="title">
                        { loading ? "Đang xóa ..." : "Xóa ghi chú này?" }
                    </h5>
                </div>
                <div className="buttons">
                    <button 
                        className="btn btn-confirm"
                        onClick={ deleteNote }
                    >
                        Xóa
                    </button>
                    <button 
                        className="btn btn-cancel" 
                        onClick={ () => dispatch(actHideModalConfirmDeleteNote({ isNoteDeleted: '0' })) }
                    >
                        Hủy bỏ
                    </button>
                </div>
            </div>
        </div>
    )
}