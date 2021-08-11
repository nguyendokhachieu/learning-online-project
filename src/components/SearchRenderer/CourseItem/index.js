import "./course-item.scss";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actShowLoadingFullscreen } from "../../../store/modals/actions";

export default function CoursesItem({
  course = null,
}) 
{
  const history = useHistory();
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(actShowLoadingFullscreen()); 
    setTimeout(() => history.push(`/course/${ course.slug }`), 500);
  }

  if (!course) return null;

  return (
    <section className="search-renderedItem-c">
      <div className="course-itemSearchRenderer-inner">
        <div className="course-thumbnail">
          <span onClick={ handleClick } title={ course.name }>
            <img
              src={ `https://img.youtube.com/vi/${ course.thumbnail_id }/hqdefault.jpg` }
              className="img"
              alt={ course.name }
            />
          </span>
        </div>
        <div className="course-item-body">
          <div className="course-item-heading">
            <div className="course-name-title">
              <h2>
                <span onClick={ handleClick } title={ course.name } >
                  { course.name }
                </span>
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
              <button 
                onClick={ handleClick }
                className="btn btn-enroll-to"
              >
                  XEM CHI TIẾT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
