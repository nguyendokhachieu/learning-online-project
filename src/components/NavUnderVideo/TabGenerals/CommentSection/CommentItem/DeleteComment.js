import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actDeleteParentCommentAsync } from "../../../../../store/comments/actions";

export default function DeleteComment({
    comment = null,
}) 
{
    const confRef = useRef();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const { user } = useSelector(state => state.users.currentUser);

    function deleteComment() {
        if (loading) return;
        if (!comment) return;
        if (!user) return;

        setLoading(true);
        dispatch(actDeleteParentCommentAsync({ commentId: comment?.id })).then(() => {
            setLoading(false);
        })
    }

    function onClickHandler(e) {
        confRef.current && !confRef.current.contains(e.target) && setShowConfirmation(false)
    }
    
    useEffect(() => {
      document.addEventListener('click', onClickHandler);
      return () => document.removeEventListener('click', onClickHandler);  
    });

    if (!comment) return null;

    return (
        <div 
            className="react deleteCmt" 
            ref={ confRef } 
        >
            <div onClick={ () => setShowConfirmation(!showConfirmation) }>Xóa</div>
            <div className={ showConfirmation ? "deleteCmt-c-confirmationBox show" : "deleteCmt-c-confirmationBox" }>
                <button 
                    className="btn btn-deleteCmt" 
                    onClick={ deleteComment }
                >
                    {
                        loading
                            ? "Đang xóa"
                            : (
                                <>
                                    <span className="no-hover">Xác nhận xóa?</span>
                                    <span className="hovering">Ok, xóa!</span>
                                </>
                            )
                    }
                </button>
            </div>
        </div>
    )
}
