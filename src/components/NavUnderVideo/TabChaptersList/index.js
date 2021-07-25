import "./chapters-list.scss";

import { useSelector } from "react-redux";

import CourseChapter from "../../CourseChapter";

export default function TabChaptersList() {

  const { registeredCourseDetail } = useSelector(state => state.courses);

  if (!registeredCourseDetail) return null;

  return (
    <div id="chaptersList" className="chapters-list">
      <CourseChapter registeredCourseDetail={ registeredCourseDetail } />
    </div>
  );
}
