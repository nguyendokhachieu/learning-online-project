import { Helpers } from "../../../../../utils/Helpers";

export default function NotificationsItem({
    n = null,
}) 
{
console.log(n);
    if (!n) return null;

    return (
        <div className="notification-item unread">
        <div className="image-wrap">
            <img
            src={ n.avatar !== 'null' && n.avatar !== '' ? n.avatar : `/assets/images/default-avatar.png` }
            alt="avatar"
            className="img"
            />
        </div>
        <div className="body">
            {
                Number(n.type) == 3
                    ? <h6 className="author">Thông báo hệ thống</h6>
                    : null
            }
            <div className="text">
                {
                    Number(n.type) === 1 
                        ? `${n.rfname } đã trả lời bình luận của bạn`
                        : Number(n.type) === 2
                            ? `${n.rfname } đã thích bình luận của bạn`
                            : null
                }
            </div>
            <div className="date-time">
                {
                    Helpers.getTimeAgoInString(n.created_at)
                }
            </div>
        </div>
        </div>
    );
}
