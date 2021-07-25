import { useState } from "react";

import Avatar from "./Avatar";
import BodyContent from "./BodyContent";
import Reactions from "./Reactions";
import ShowRepliesButton from "./ShowRepliesButton";
import ReplyZone from "./ReplyZone";
import ChildrenCommentList from "./ChildrenCommentList";

export default function CommentItem({
  comment = null,
}) 
{
  const [showReplyZone, setShowReplyZone] = useState(false);
  const [changeNumberOfLikes, setChangeNumberOfLikes] = useState('');

  if (!comment) return null;

  return (
    <section className="comment-item">
      <div className="comment-top">
        <Avatar comment={ comment } />
        <BodyContent 
          comment={ comment } 
          changeNumberOfLikes={ changeNumberOfLikes }
        />
      </div>
      <Reactions 
        toggleReplyZone={ () => setShowReplyZone(!showReplyZone) } 
        changeNumberOfLikes={ sign => setChangeNumberOfLikes(sign) }
        comment={ comment }
      />
      {
        showReplyZone 
          ? (
            <ReplyZone 
              comment={ comment } 
              toggleReplyZone={ () => setShowReplyZone(!showReplyZone) }
            /> 
          )
          : null
      }
      <ChildrenCommentList comment={ comment }/>
      {
        comment.has_children !== 0 
          ? <ShowRepliesButton comment={ comment } /> 
          : null
      }
    </section>
  );
}
