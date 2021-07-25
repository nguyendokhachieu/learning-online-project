import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import dayjs from "dayjs";
import { actLikeCommentAsync, actUnlikeCommentAsync } from "../../../../../store/comments/actions";

import DeleteComment from "./DeleteComment";

export default function Reactions({
  toggleReplyZone = function(){},
  changeNumberOfLikes = function(){},
  comment = null,
}) 
{
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.users.currentUser);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  function likeComment() {
    if (loading) return;
    if (!comment) return;

    setLoading(true);

    if (liked) {
      setLiked(false);
      changeNumberOfLikes('-');

      dispatch(actUnlikeCommentAsync({
        commentId: comment.id,
        type: 1,
      })).then(response => {
        setLoading(false);
  
        if (!response.ok) {
          setLiked(true);
        }
      })

    } else {
      setLiked(true);
      changeNumberOfLikes('+');
      
      dispatch(actLikeCommentAsync({
        commentId: comment.id,
        type: 1,
      })).then(response => {
        setLoading(false);
  
        if (!response.ok) {
          setLiked(false);
        }
      })
    }
  }

  useEffect(() => {
    if (!comment) return;

    if (comment?.liked) setLiked(true);
  }, [comment]);

  if (!comment) return null;
  if (!user) return null;

  return (
    <div className="comment-reactions">
      <div 
        className={ liked ? "react like active" : "react like" }
        onClick={ likeComment }
      >
        Thích
      </div>
      <div 
        className="react reply"
        onClick={ () => toggleReplyZone() }
      >
        Trả lời
      </div>
      {
        user?.id === comment?.user_id 
          ? <DeleteComment comment={ comment } />
          : null
      }
      <div className="react datetime">
        {    
          dayjs(comment.created_at).format('DD ++ MM, YYYY lúc HH:mm')
          .replace('++', 'thg')
        }
      </div>
    </div>
  );
}
