import "./search.scss";

export default function Search() {
  return (
    <div className="search-fixed">
      <div className="centered">
        <form className="search-form">
          <input
            type="text"
            className="search-input"
            placeholder="Tìm kiếm khóa học "
          />
          <input type="submit" hidden />
        </form>
        <div className="search-close">
          <i className="fas fa-times icon"></i>
        </div>
      </div>
    </div>
  );
}
