import "./notifications-section.scss";

export default function NotificationsSection({
  showNotificationBox = false,
}) 
{
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
          <div className="notification-item unread">
            <div className="image-wrap">
              <img
                src="https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-de-thuong.jpg"
                alt="avatar"
                className="img"
              />
            </div>
            <div className="body">
              <h6 className="author">Thông báo hệ thống</h6>
              <div className="text">
                Xây dựng web trong thực tế với ReactJS với cách chia sẻ chi
                tiết, tận tâm, dễ hiểu và chất giọng giàu sức sống của người
                chia sẻ Xây dựng web trong thực tế với ReactJS với cách chia sẻ
                chi tiết, tận tâm, dễ hiểu và chất giọng giàu sức sống của người
                chia
              </div>
              <div className="date-time">8 tháng trước</div>
            </div>
          </div>
        </div>
      </div>
      <div className="notifications-footer">
        <span className="text">Xem tất cả</span>
      </div>
    </section>
  );
}
