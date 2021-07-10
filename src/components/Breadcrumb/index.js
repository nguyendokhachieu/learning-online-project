import "./breadcrumb.scss";

export default function Breadcrumb() {
  return (
    <div className="breadcrumb">
      <div className="item">
        <a href="/" className="link">
          Khóa học
        </a>
      </div>
      <div className="item">
        <i className="fas fa-chevron-right icon"></i>
      </div>
      <div className="item">
        <a href="/" className="link">
          ReactJS cơ bản
        </a>
      </div>
    </div>
  );
}
