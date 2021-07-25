import { useSelector } from "react-redux";

export default function BodyContent({
  comment = null,
}) 
{
  const { user } = useSelector(state => state.users.currentUser);

  if (!comment) return null;
  if (!user) return null;

  return (
    <div className="comment-content">
      <div className="commentator-name">
        <div>{ comment.username }</div>
        {
          user?.id === comment?.user_id 
          ? <div className="tag commentator-self">Bạn</div>
          : null
        }
      </div>
      <div className="comment-text" dangerouslySetInnerHTML={{ __html: comment.content }}></div>
    </div>
  );
}
