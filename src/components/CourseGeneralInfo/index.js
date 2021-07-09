import { useState } from "react";
import "./course-general-info.scss";

export default function CourseGeneralInfo({
  hideSideNav = function() {}
}) 
{
  const [isShowMaximizeButton, setIsShowMaximizeButton] = useState(false);

  return (
    <div className="course-general-info">
      <div className={ isShowMaximizeButton ? "maximize" : "maximize hide" }>
        <button className="btn-maximize" onClick={ () => { hideSideNav(); setIsShowMaximizeButton(!isShowMaximizeButton) } }>
          <i className="fas fa-chevron-left icon"></i>
        </button>
      </div>
      <div className="info">
        <h2
          className="course-name"
          title="Khóa học React js cơ bản cho người mới"
        >
          Khóa học React js cơ bản cho người mới
        </h2>
        <div className="course-process">Hoàn thành 99/199 bài học (51%)</div>
      </div>
      <div className="minimize">
        <button className="btn-minimize" onClick={ () => { hideSideNav(); setIsShowMaximizeButton(!isShowMaximizeButton) } }>
          <i className="fas fa-chevron-right icon"></i>
        </button>
      </div>
    </div>
  );
}
