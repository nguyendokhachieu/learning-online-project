import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetListCommentsParentAsync, actPostNewCommentAsync } from "../../../../store/comments/actions";

const striptags = require('striptags');

export default function Adder() {
  const dispatch = useDispatch();
  const inputText = useRef();
  const [loading, setLoading] = useState(false);

  const { currentLessonInfo } = useSelector(state => state.courses);
  const { user } = useSelector(state => state.users.currentUser);

  function postComment() {
    if (loading) return;
    if (!currentLessonInfo.current_lesson_id) return;
    if (!user) return;
    if (!striptags(inputText.current && inputText.current.innerHTML)) return;

    const content = inputText.current && inputText.current.innerHTML;

    setLoading(true);
    dispatch(actPostNewCommentAsync({
      content,
      lessonId: currentLessonInfo.current_lesson_id,
      parentId: '0'
    })).then(() => {
      setLoading(false);
      inputText.current && (
        inputText.current.innerHTML = ''
      );

      dispatch(actGetListCommentsParentAsync({
        lessonId: currentLessonInfo.current_lesson_id,
        parentId: '0',
        page: 1,
        perPage: 10,
      }))
    })
  }

  if (!user) return null;
  if (!currentLessonInfo.current_lesson_id) return null;

  return (
    <div className="comment-adder">
      <div className="form">
        <div className="avatar">
          <img
            src={ user.avatar !== 'null' && user.avatar !== '' ? user.avatar : "/assets/images/default-avatar.png" }
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
            spellCheck="false"
            placeholder="Nhập bình luận"
            ref={ inputText }
          ></div>
        </div>
      </div>
      <div className="buttons">
        <button 
          className="btn btn-cancel"
          onClick={ () => { inputText.current && ( inputText.current.innerHTML = '' ) } }
        >
          Xóa tất cả
        </button>
        <button 
          className={ loading ? "btn btn-submit disabled" : "btn btn-submit" }
          onClick={ postComment }
        >
          Bình luận
        </button>
      </div>
    </div>
  );
}
