import "./course-general-info.scss";

export default function CourseGeneralInfo() {
  return (
    <div className="course-general-info">
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
        <button className="btn-minimize">
          <i className="fas fa-chevron-right icon"></i>
        </button>
      </div>
      <div className="lesson-processing"></div>
    </div>
  );
}
