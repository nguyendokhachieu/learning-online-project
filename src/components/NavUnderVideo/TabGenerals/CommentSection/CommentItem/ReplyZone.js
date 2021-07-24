import { useSelector } from "react-redux";

export default function ReplyZone({
  comment = null,
}) 
{
  const { user } = useSelector(state => state.users.currentUser);

  if (!comment) return null;

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
            class="comment-input"
            tabindex="0"
            contenteditable="true"
            role="textbox"
            aria-multiline="true"
            placeholder={ `Trả lời bình luận của ${comment.username}` }
            spellcheck="false"
          ></div>
        </div>
      </div>
      <div className="buttons">
        <button className="btn btn-cancel">Hủy bỏ</button>
        <button className="btn btn-submit">Trả lời</button>
      </div>
    </div>
  );
}
