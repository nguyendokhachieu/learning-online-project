import "./breadcrumb.scss";

import { Link } from "react-router-dom";

export default function Breadcrumb({
  courseDetail = null,
}) 
{
  if (!courseDetail) return null;
  
  return (
    <div className="breadcrumb">
      <div className="item">
        <Link to="/courses" className="link">
          Khóa học
        </Link>
      </div>
      <div className="item">
        <i className="fas fa-chevron-right icon"></i>
      </div>
      <div className="item">
        <span className="link">
          { courseDetail.name }
        </span>
      </div>
    </div>
  );
}
