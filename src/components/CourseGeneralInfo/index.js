import { useState } from "react";
import "./course-general-info.scss";

export default function CourseGeneralInfo({
  hideSideNav = function() {},
  registeredCourseDetail = null,
}) 
{
  const [isShowMaximizeButton, setIsShowMaximizeButton] = useState(false);

  if (!registeredCourseDetail) return null;

  return (
    <div 
      className="course-general-info" 
      data-width={ Math.round(Number(registeredCourseDetail.progress_count) * 10 / Number(registeredCourseDetail.total_lessons)) }
    >
      <div className={ isShowMaximizeButton ? "maximize" : "maximize hide" }>
        <button 
          className="btn-maximize" 
          onClick={ () => { hideSideNav(); setIsShowMaximizeButton(!isShowMaximizeButton) } }
        >
          <i className="fas fa-chevron-left icon"></i>
        </button>
      </div>
      <div className="info">
        <h2
          className="course-name-in-detail-page"
          title={ registeredCourseDetail.name }
        >
          { registeredCourseDetail.name }
        </h2>
        <div className="course-process">
          Hoàn thành { registeredCourseDetail.progress_count }/{ registeredCourseDetail.total_lessons } bài học 
          ({ Math.round(Number(registeredCourseDetail.progress_count) * 100 / Number(registeredCourseDetail.total_lessons)) }%)
        </div>
      </div>
      <div className="minimize">
        <button 
          className="btn-minimize" 
          onClick={ () => { hideSideNav(); setIsShowMaximizeButton(!isShowMaximizeButton) } }
        >
          <i className="fas fa-chevron-right icon"></i>
        </button>
      </div>
      <div className="progress-estimate"></div>
    </div>
  );
}
