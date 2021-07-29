import "./notifications-section.scss";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actFetchUserNotificationsAsync } from "../../../../../store/notifications/actions";

import NotificationsItem from "./NotificationItem";

export default function NotificationsSection({
  showNotificationBox = false,
}) 
{
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { list, page, hasMore } = useSelector(state => state.notifications.userNotifications);

  function loadmore() {
    if (loading) return;
    if (!hasMore) return;

    setLoading(true);
    dispatch(actFetchUserNotificationsAsync({
      page: page + 1,
      perPage: 20,
    })).then(() => {
      setLoading(false);
    })
  }

  useEffect(() => {
    if (!showNotificationBox) return;
    if (loading) return;

    setLoading(true);
    dispatch(actFetchUserNotificationsAsync({
      page: 1,
      perPage: 20,
    })).then(() => {
      setLoading(false);
    })

  }, [dispatch, showNotificationBox]);

  return (
    <section 
      className={ 
        showNotificationBox 
          ? "notifications-section-dropdown-box active" 
          : "notifications-section-dropdown-box" 
      }
    >
      <div className="notifications-heading">
        <h3 className="title">Thông báo</h3>
        <div className="options">Đánh dấu tất cả là đã đọc</div>
      </div>
      <div className="scrollable-list">
        <div className="notifications-list">
          {
            loading && list.length === 0
              ? <div className="textLoad">Đang tải <i className="fas fa-circle-notch icon fa-spin"></i></div>
              : list.length !== 0
                ? list.map(item => {
                  return <NotificationsItem n={ item } key={ item.id } />
                })
                : <div className="textLoad">Bạn chưa có thông báo nào!</div>
          }
        </div>
      </div>
      {
        list.length >= 20 && hasMore
          ? (
            <div className="notifications-footer">
              <span 
                className={ loading ? "text disabled" : "text" }
                onClick={ loadmore }
              >
                {
                  loading ? "Đang tải" : "Hiển thị thêm"
                }
              </span>
            </div>
          )
          : null
      }
    </section>
  );
}
