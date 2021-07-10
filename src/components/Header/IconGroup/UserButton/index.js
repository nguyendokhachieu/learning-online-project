import { useEffect, useRef, useState } from "react";

import UserSection from "./UserSection";

export default function IconGroup() {
  const userBoxRef = useRef();
  const [showUserBox, setShowUserBox] = useState(false);

  useEffect(() => {
    function onClickHandler(e) {
      userBoxRef.current &&
        !userBoxRef.current.contains(e.target) &&
        setShowUserBox(false);
    }
    document.addEventListener("click", onClickHandler);

    return () => document.removeEventListener("click", onClickHandler);
  }, []);

  return (
    <div 
      className={
        showUserBox
          ? "icon-wrap user-avatar active"
          : "icon-wrap user-avatar"
      } 
      ref={ userBoxRef }
    >
      <div 
        className="link"
        onClick={ () => setShowUserBox(!showUserBox) }
    >
        <img
          src="https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-de-thuong.jpg"
          alt="avatar"
          className="img"
        />
      </div>
      <UserSection showUserBox={ showUserBox } />
    </div>
  );
}
