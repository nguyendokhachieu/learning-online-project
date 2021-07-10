import "./course-card.scss";

export default function CourseCard() {
  return (
    <div className="course-card">
      <div className="course-thumbnail">
        <img
          src="https://media.vlpt.us/images/azurestefan/post/3e27e1ff-808a-4e1c-bb84-284372f3c634/react.png"
          className="img"
          alt="course-thumbnail"
        />
      </div>
      <div className="course-price">
        <span className="text">Miễn phí</span>
      </div>
      <div className="course-register">
        <button className="btn btn-register">Đăng ký học</button>
      </div>
      <div className="course-shortdesc">
        <div className="item">
          <i className="fas fa-check icon"></i>
          <span className="text">Trình độ cơ bản</span>
        </div>
        <div className="item">
          <i className="fas fa-check icon"></i>
          <span className="text">8 chương học</span>
        </div>
        <div className="item">
          <i className="fas fa-check icon"></i>
          <span className="text">80 bài học</span>
        </div>
      </div>
    </div>
  );
}
