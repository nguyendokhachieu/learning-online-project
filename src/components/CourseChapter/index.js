import "./course-chapter.scss";

import ChapterItem from "./ChapterItem";

export default function CourseChapter({
  registeredCourseDetail = null,
}) 
{
  if (!registeredCourseDetail) return null;

  return (
    <div className="course-chapter">
      <div className="content-scrollable">
        <div className="chapter-list">
          {
            registeredCourseDetail.chapters_list.length !== 0 && (
              registeredCourseDetail.chapters_list.map(chapter => {
                return (
                  <ChapterItem 
                    chapter={ chapter } 
                    registeredCourseDetail={ registeredCourseDetail }
                    key={ chapter.id } 
                  />
                )
              })
            )
          }
        </div>
      </div>
    </div>
  );
}
