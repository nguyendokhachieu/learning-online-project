import { useSelector } from "react-redux";
import dayjs from "dayjs";

export default function Reactions({
  toggleReplyZone = function(){},
  comment = null,
}) 
{
  const { user } = useSelector(state => state.users.currentUser);

  if (!comment) return null;
  if (!user) return null;

  return (
    <div className="comment-reactions">
      <div className="react like">Thích</div>
      {/* <div 
        className="react reply"
        onClick={ () => toggleReplyZone() }
      >
        Trả lời
      </div> */}
      {
        user?.id === comment?.user_id 
          ? <div className="react deleteCmt">Xóa</div>
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
