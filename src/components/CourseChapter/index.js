import "./course-chapter.scss";

export default function CourseChapter() {
  return (
    <div className="course-chapter">
      <div className="content-scrollable">
        <div className="chapter-list">
          <section className="dropdown">
            <div className="dropdown-header">
              <div className="left">
                <h5 className="chapter-title">Phần 1. ABC</h5>
                <div className="chapter-count">10/22</div>
              </div>
              <div className="right">
                <button className="btn-drop">
                  <i className="fas fa-chevron-down icon"></i>
                </button>
              </div>
            </div>
            <ul className="dropdown-items">
              <li className="item active">
                <div className="indicator">
                  <div className="icon-wrap">
                    <i className="fas fa-circle-notch icon"></i>
                  </div>
                </div>
                <div className="lesson">
                  <h5 className="lesson-name">22. Abc</h5>
                  <div className="lesson-time">15:03</div>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
