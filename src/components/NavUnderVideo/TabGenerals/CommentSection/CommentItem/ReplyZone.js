import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { 
  actPostNewCommentAsync, 
  actGetListCommentsChildrenAsync 
} from "../../../../../store/comments/actions";

const striptags = require('striptags');

export default function ReplyZone({
  comment = null,
  toggleReplyZone = function(){},
}) 
{
  const inputText = useRef();
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.users.currentUser);

  const [loading, setLoading] = useState(false);

  function postComment() {
    if (loading) return;
    if (!comment) return;
    if (!user) return;
    if (!striptags(inputText.current && inputText.current.innerHTML)) return;

    const content = inputText.current && inputText.current.innerHTML;

    setLoading(true);
    dispatch(actPostNewCommentAsync({
      content,
      lessonId: comment.lesson_id,
      parentId: comment.id
    })).then(() => {
      setLoading(false);
      inputText.current && (
        inputText.current.innerHTML = ''
      );

      dispatch(actGetListCommentsChildrenAsync({
        lessonId: comment.lesson_id,
        parentId: comment.id,
        page: 1,
        perPage: 6,
      }))
    })
  }

  if (!comment) return null;
  if (!user) return null;
  
  return (
    <div className="comment-reply">
      <div className="form">
        <div className="avatar">
          <img
            src={ user.avatar ? user.avatar : "/assets/images/default-avatar.png" }
            className="avatar-img"
            alt={ user.username }
          />
        </div>
        <div className="adder">
          <div
            className="comment-input"
            tabIndex="0"
            contentEditable="true"
            role="textbox"
            aria-multiline="true"
            placeholder={ 
              comment?.user_id === user?.id 
                ? `Trả lời bình luận của bạn`
                : `Trả lời bình luận của ${comment.username}` 
            }
            spellCheck="false"
            ref={ inputText }
          ></div>
        </div>
      </div>
      <div className="buttons">
        <button 
          className="btn btn-cancel"
          onClick={ () => toggleReplyZone() }
        >
          Hủy bỏ
        </button>
        <button 
          className={ loading ? "btn btn-submit disabled" : "btn btn-submit" }
          onClick={ postComment }
        >
          { loading ? "Đang trả lời" : "Trả lời" }
        </button>
      </div>
    </div>
  );
}
