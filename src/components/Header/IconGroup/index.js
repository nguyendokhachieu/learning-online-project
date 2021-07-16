import "./icon-group.scss";

import LoginButton from "./LoginButton";
import SearchButton from "./SearchButton";
import NotificationButton from "./NotificationButton";
import CoursesButton from "./CoursesButton";
import UserButton from "./UserButton";
import { useSelector } from "react-redux";

export default function IconGroup({
  showSideNav = function() {},
  onShowSearchBar = function() {},
}) 
{
  const { accessToken } = useSelector(state => state.users.currentUser);

  return (
    <div className="icon-group">
      {
        !accessToken && <LoginButton />
      }
      <SearchButton onShowSearchBar={ () => onShowSearchBar() } />
      {
        accessToken && <NotificationButton />
      }
      {
        accessToken && <CoursesButton />
      }
      {
        accessToken && <UserButton />
      }
      <div 
        className="icon-wrap hamburger"
        onClick={ () => showSideNav() }
      >
        <div className="link">
          <i className="fas fa-bars icon"></i>
        </div>
      </div>
    </div>
  );
}