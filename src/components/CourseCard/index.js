import "./course-card.scss";

import CourseThumbnail from "./CourseThumbnail";
import CoursePrice from "./CoursePrice";
import CourseRegister from "./CourseRegister";
import ShortDescs from "./ShortDescs";

export default function CourseCard({
  courseDetail = null
}) 
{
  if (!courseDetail) return null;

  return (
    <div className="course-card">
      <CourseThumbnail courseDetail={ courseDetail } />
      <CoursePrice courseDetail={ courseDetail } />
      <CourseRegister courseDetail={ courseDetail } />
      <ShortDescs courseDetail={ courseDetail } />
    </div>
  );
}
