
export default function Reactions({
  toggleReplyZone = function(){},
}) 
{
  return (
    <div className="comment-reactions">
      <div className="react like">Thích</div>
      <div 
        className="react reply"
        onClick={ () => toggleReplyZone() }
      >
        Trả lời
      </div>
    </div>
  );
}
