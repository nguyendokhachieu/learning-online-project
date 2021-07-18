import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { actCheckNextLesson, actUpdateCurrentLessonInfo } from "../../../store/courses/actions";
import { Helpers } from "../../../utils/Helpers";

export default function LessonItem({
  lesson = null,
  status = 'normal',
  registeredCourseDetail = null,
}) 
{
  const history = useHistory();
  const dispatch = useDispatch();
  const { currentLessonInfo } = useSelector(state => state.courses);

  const [loading, setLoading] = useState(false);

  const className = status === 'active'
                      ? 'item active'
                      : status === 'disabled'
                        ? 'item disabled'
                        : 'item';

  const icon = status === 'active'
                      ? <i className="fas fa-play icon"></i>
                      : status === 'disabled'
                        ? <i className="fas fa-lock icon"></i>
                        : <i className="fas fa-check icon"></i>;

  function handler() {
    if (!lesson) return;
    if (!registeredCourseDetail) return;
    if (lesson.id === currentLessonInfo.current_lesson_id) return;
    if (loading) return;

    const currentLessonId = registeredCourseDetail.current_lesson_id;
    const nextLessonId = lesson.id;

    if (Number(nextLessonId) <= Number(registeredCourseDetail.current_lesson_id)) {
      dispatch(actUpdateCurrentLessonInfo({
        current_lesson_id: lesson.id,
        current_video_id: lesson.video_id
      }))
      
      return;
    }
    
    setLoading(true);

    dispatch(actCheckNextLesson({
      currentLessonId,
      nextLessonId,
    })).then(response => {
      setLoading(false);

      if (!response?.ok) {
        history.push('/not-found');
      }
    })
  }

  if (!lesson) return null;
  if (!registeredCourseDetail) return null;

  return (
    <li 
      className={ className }
      onClick={ handler }
    >
      <div className="indicator">
        <div className="icon-wrap">
        { loading 
          ? <i className="fas fa-circle-notch icon fa-spin"></i> 
          : icon
        }
        </div>
      </div>
      <div className="lesson">
        <h5 className="lesson-name">{ lesson.name }</h5>
        <div className="lesson-time">
          {
            Helpers.getTimeInString(lesson.time)
          }
        </div>
      </div>
    </li>
  );
}