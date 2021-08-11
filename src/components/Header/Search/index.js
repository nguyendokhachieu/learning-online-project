import "./search.scss";

import { useEffect, useState } from "react";
import { useHistory } from "react-router";

export default function Search({
  showSearchBar = false,
  onHideSearchBar = function() {},
}) 
{
  const history = useHistory();
  const [q, setQ] = useState('');

  function submitSearch(e) {
    e.preventDefault();
    if (q.trim().length === 0) return;

    history.push(`/search?q=${q}`);
  }

  useEffect(() => {
    showSearchBar && document.getElementById('search-input').focus();
  }, [showSearchBar]);

  return (
    <div className={ showSearchBar ? "search-fixed active" : "search-fixed" }>
      <div className="centered">
        <form className="search-form" onSubmit={ submitSearch }>
          <input
            type="text"
            className="search-input"
            id="search-input"
            placeholder="Tìm kiếm khóa học "
            value={ q }
            onChange={ e => setQ(e.target.value) }
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
