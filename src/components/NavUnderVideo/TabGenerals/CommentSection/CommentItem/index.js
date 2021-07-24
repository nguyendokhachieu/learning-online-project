import { useState } from "react";

import Avatar from "./Avatar";
import BodyContent from "./BodyContent";
import Reactions from "./Reactions";
import ShowRepliesButton from "./ShowRepliesButton";
import ReplyZone from "./ReplyZone";

export default function CommentItem({
  comment = null,
}) 
{
  const [showReplyZone, setShowReplyZone] = useState(false);

  if (!comment) return null;

  return (
    <section className="comment-item">
      <div className="comment-top">
        <Avatar comment={ comment } />
        <BodyContent comment={ comment } />
      </div>
      <Reactions toggleReplyZone={ () => setShowReplyZone(!showReplyZone) } />
      {
        comment.has_children !== 0 
          ? <ShowRepliesButton /> 
          : null
      }
      {
        showReplyZone 
          ? <ReplyZone comment={ comment } /> 
          : null
      }
    </section>
  );
}
