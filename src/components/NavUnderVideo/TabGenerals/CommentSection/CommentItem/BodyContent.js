
export default function BodyContent({
  comment = null,
}) 
{
  if (!comment) return null;

  return (
    <div className="comment-content">
      <div className="commentator-name">{ comment.username }</div>
      <div className="comment-text" dangerouslySetInnerHTML={{ __html: comment.content }}></div>
    </div>
  );
}
