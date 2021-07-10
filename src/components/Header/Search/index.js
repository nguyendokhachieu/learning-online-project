import { useEffect } from "react";
import "./search.scss";

export default function Search({
  showSearchBar = false,
  onHideSearchBar = function() {},
}) 
{

  useEffect(() => {
    showSearchBar && document.getElementById('search-input').focus();
  }, [showSearchBar]);

  return (
    <div className={ showSearchBar ? "search-fixed active" : "search-fixed" }>
      <div className="centered">
        <form className="search-form">
          <input
            type="text"
            className="search-input"
            id="search-input"
            placeholder="Tìm kiếm khóa học "
          />
          <input type="submit" hidden />
        </form>
        <div 
          className="search-close"
          onClick={ () => onHideSearchBar() }
        >
          <i className="fas fa-times icon"></i>
        </div>
      </div>
    </div>
  );
}
