import "./course-chapter-accordion.scss";

import Chapter from "./Chapter";

export default function CourseChapterAccordion() {
  return (
    <div className="course-chapter-accordion">
      <ul className="chapters-list">
        <Chapter />
        <Chapter />
        <Chapter />
      </ul>
    </div>
  );
}
