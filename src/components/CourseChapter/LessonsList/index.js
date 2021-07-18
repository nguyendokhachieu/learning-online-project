import { useSelector } from "react-redux";

import LessonItem from "../LessonItem";

export default function LessonsList({
  chapter = null,
  showLessonsList = false,
  registeredCourseDetail = null,
}) 
{
  const { currentLessonInfo } = useSelector(state => state.courses);

  if (!chapter) return null;
  if (!registeredCourseDetail) return null;

  return (
    <ul className={ showLessonsList ? "dropdown-items active" : "dropdown-items" }>
      {
        chapter.lessons_list.length !== 0 && (
          chapter.lessons_list.map(lesson => {
            return (
              <LessonItem 
                lesson={ lesson } 
                key={ lesson.id } 
                registeredCourseDetail={ registeredCourseDetail }
                status={ 
                  Number(lesson.id) === Number(currentLessonInfo.current_lesson_id) 
                    ? 'active' 
                    : Number(lesson.id) - 1 > Number(registeredCourseDetail.current_lesson_id) 
                      ? 'disabled'
                      : 'normal'
                }
              />
            )
          })
        )
      }
    </ul>
  );
}
