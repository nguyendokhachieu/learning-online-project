import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Helpers } from "../../../../../utils/Helpers";

import { actReadNotificationAsync } from "../../../../../store/notifications/actions";
import { 
    actShowLoadingFullscreen, 
    actHideLoadingFullscreen 
} from "../../../../../store/modals/actions";
import { 
    actFetchUserRegisteredCourseByLessonIdAsync,
    actUpdateCurrentLessonInfo
} from "../../../../../store/courses/actions";

export default function NotificationsItem({
    n = null,
    readAllNotifications = false,
    onSetCloseNotificationBox = function(){},
}) 
{
    const dispatch = useDispatch();
    const history = useHistory();
    const [isRead, setIsRead] = useState(false);
    const [loading, setLoading] = useState(false);

    function handler() {
        if (!n) return;
        if (loading) return;

        onSetCloseNotificationBox();
        setIsRead(true);
        setLoading(true);
        dispatch(actReadNotificationAsync({ allOrSingle: 'single', notificationId: n.id }))
        dispatch(actShowLoadingFullscreen());
        dispatch(actFetchUserRegisteredCourseByLessonIdAsync({
            lessonId: n.lesson_id,
          })).then(async response => {
            setLoading(false);
            
            await dispatch(actUpdateCurrentLessonInfo({
                current_lesson_id: n.lesson_id,
                current_video_id: n.video_id,
            }))

            if (response.ok) {
                history.push(`/learn/${n.lesson_id}`)
            } else {
                !response.ok && history.push('/not-found');
            }

            dispatch(actHideLoadingFullscreen());
          });
    }

    useEffect(() => {
        readAllNotifications && setIsRead(true)
    }, [readAllNotifications]);

    useEffect(() => {
        if (!n) return;

        if (Number(n.is_read) === 1) {
            setIsRead(true);
        } else {
            setIsRead(false);
        }
    }, [n]);

    if (!n) return null;

    return (
        <div 
            className={ isRead ? "notification-item" : "notification-item unread"  }
            onClick={ handler }
        >
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
