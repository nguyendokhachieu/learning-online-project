import "./course-chapter-accordion.scss";

import Chapter from "./Chapter";

export default function CourseChapterAccordion({
  courseDetail
}) 
{
  return (
    <div className="course-chapter-accordion">
      <ul className="chapters-list">
        {
          courseDetail.chapters_list.length !== 0 && (
            courseDetail.chapters_list.map(chapter => {
              return <Chapter chapter={ chapter } key={ chapter.id } />
            })
          )
        }
      </ul>
    </div>
  );
}
