import { useState } from "react";
import Lesson from "./Lesson";

export default function Chapter({
  chapter
}) 
{
  const [showLessonsList, setShowLessonsList] = useState(true);

  return (
    <li className="chapter" title={ chapter.name }>
      <div className="chapter-name" onClick={ () => setShowLessonsList(!showLessonsList) }>
        <span className="text">{ chapter.name }</span>
        <i className={ showLessonsList ? "fas fa-caret-up icon" : "fas fa-caret-up icon rotate-180"}></i>
      </div>
      <ul className={ showLessonsList ? "lessons-list active" : "lessons-list" }>
        {
          chapter.lessons_list.length !== 0 && (
            chapter.lessons_list.map(lesson => {
              return <Lesson lesson={ lesson } key={ lesson.id } />;
            })
          )
        }
      </ul>
    </li>
  );
}
