import { Link } from "react-router-dom";
import { Helpers } from "../../../../../utils/Helpers";

export default function CourseItem({
    course = null,
    closeCoursesBox = function(){},
}) 
{
    if (!course) return null;

    return (
        <Link 
            to={ `/course/${course.slug}` } 
            className="d-he-item"
            onClick={ () => closeCoursesBox() }
        >
            <div className="image-wrap">
                <img
                src={ `https://img.youtube.com/vi/${course.thumbnail_id}/hqdefault.jpg` }
                alt="avatar"
                className="img"
                />
            </div>
            <div className="body">
                <h6 className="name">{ course.name }</h6>
                <div className="text"></div>
                <div className="date-time">{ Helpers.getTimeAgoInString(course.participated_at) }</div>
            </div>
        </Link>
  );
}
