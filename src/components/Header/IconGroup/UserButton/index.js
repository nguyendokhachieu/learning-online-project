import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import UserSection from "./UserSection";

export default function IconGroup() {
  const userBoxRef = useRef();
  const [showUserBox, setShowUserBox] = useState(false);
  const { avatar } = useSelector(state => state.users.currentUser.user);

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
          src={ avatar && avatar !== 'null' ? avatar : '/assets/images/default-avatar.png' }
          alt="avatar"
          className="img"
        />
      </div>
      <UserSection 
        showUserBox={ showUserBox } 
        onCloseUserBox={ () => setShowUserBox(false) } 
      />
    </div>
  );
}
