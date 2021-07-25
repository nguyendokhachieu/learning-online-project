import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function BodyContent({
  comment = null,
  changeNumberOfLikes = '',
}) 
{
  const { user } = useSelector(state => state.users.currentUser);
  const [numberOfLikes, setNumberOfLikes] = useState(0);

  useEffect(() => {
    if (!comment) return;

    setNumberOfLikes(Number(comment.number_of_likes))
  }, [comment]);

  useEffect(() => {
    changeNumberOfLikes === '+' && setNumberOfLikes(prev => prev + 1);
    changeNumberOfLikes === '-' && setNumberOfLikes(prev => prev - 1);
  }, [changeNumberOfLikes]);

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
      {
        numberOfLikes !== 0
          ? (
            <div className="reactions-quantity">
              <div className="count">
                <i className="fas fa-thumbs-up icon"></i>
                <span className="text">{ numberOfLikes }</span>
              </div>
            </div>
          )
          : null
      }
    </div>
  );
}
