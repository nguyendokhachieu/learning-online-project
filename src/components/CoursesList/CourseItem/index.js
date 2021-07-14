import "./course-item.scss";

import { Link } from "react-router-dom";

export default function CoursesItem({
  course = null,
}) 
{
  if (!course) return null;

  return (
    <section className="course-item">
      <div className="course-item-inner">
        <div className="course-thumbnail">
          <Link to={ `/course/${ course.slug }` }>
            <img
              src={ `https://img.youtube.com/vi/${ course.thumbnail_id }/hqdefault.jpg` }
              className="img"
              alt={ course.name }
            />
          </Link>
        </div>
        <div className="course-item-body">
          <div className="course-item-heading">
            <div className="course-name-title">
              <h2>
                <Link 
                  to={ `/course/${ course.slug }` } 
                  title={ course.name }
                >
                  { course.name }
                </Link>
              </h2>
            </div>
            <p className="course-desc">
              { course.short_desc }
            </p>
          </div>
          <div className="course-info-bottom">
            <div className="participants-count">
              <i className="fas fa-users icon"></i>
              <span className="text">{ course.participants_count } người tham gia</span>
            </div>
            <div className="course-item-pop-up">
              <Link 
                to={ `/course/${ course.slug }` } 
                className="btn btn-enroll-to"
              >
                  XEM CHI TIẾT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
