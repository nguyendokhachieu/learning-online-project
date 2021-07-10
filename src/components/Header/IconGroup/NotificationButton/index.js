import { useEffect, useRef, useState } from "react";

import NotificationsSection from "./NotificationsSection";

export default function NotificationButton() {
  const notificationBoxRef = useRef();
  const [showNotificationBox, setShowNotificationBox] = useState(false);

  useEffect(() => {
    function onClickHandler(e) {
      notificationBoxRef.current &&
        !notificationBoxRef.current.contains(e.target) &&
        setShowNotificationBox(false);
    }
    document.addEventListener("click", onClickHandler);

    return () => document.removeEventListener("click", onClickHandler);
  }, []);

  return (
    <div
      className={
        showNotificationBox
          ? "icon-wrap notifications-icon active"
          : "icon-wrap notifications-icon"
      }
      ref={ notificationBoxRef }
    >
      <div
        className="link"
        onClick={ () => setShowNotificationBox(!showNotificationBox) }
      >
        <i className="fas fa-bell icon"></i>
      </div>
      <NotificationsSection showNotificationBox={ showNotificationBox } />
    </div>
  );
}
