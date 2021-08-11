import "./search-page.scss";

import { useHistory, useLocation } from "react-router";

import SearchRenderer from "../../components/SearchRenderer";

export default function SearchPage() {
  const location = useLocation();
  const history = useHistory();

  if (!location.search.startsWith('?q=')) history.push('/courses?category=tat-ca-khoa-hoc');

  const searchKey = location.search.substring(1, 2);

  if (searchKey !== 'q') history.push('/courses?category=tat-ca-khoa-hoc');

  const searchQuery = location.search.substr(3, location.search.length);

  if (searchQuery.trim() === '') history.push('/courses?category=tat-ca-khoa-hoc');

  return (
    <section className="search-m-section">
      <div className="container">
        <div className="search-infomation">
          <div className="text-center">
            <i className="fas fa-search icon"></i>
            <span className="text">Tìm kiếm từ khóa <span className="highlight" style={{color: 'green', backgroundColor: 'lightgreen'}}>{ decodeURIComponent(searchQuery) }</span></span>
          </div>
        </div>
        <SearchRenderer q={ decodeURIComponent(searchQuery) } />
      </div>
    </section>
  );
}
