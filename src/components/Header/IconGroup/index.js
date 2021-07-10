import "./icon-group.scss";

import LoginButton from "./LoginButton";
import SearchButton from "./SearchButton";
import NotificationButton from "./NotificationButton";
import CoursesButton from "./CoursesButton";
import UserButton from "./UserButton";

export default function IconGroup({
  showSideNav = function() {},
  onShowSearchBar = function() {},
}) 
{
  return (
    <div className="icon-group">
      <LoginButton />
      <SearchButton onShowSearchBar={ () => onShowSearchBar() } />
      <NotificationButton />
      <CoursesButton />
      <UserButton />
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