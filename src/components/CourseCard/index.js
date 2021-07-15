import "./course-card.scss";

export default function CourseCard({
  courseDetail = null
}) 
{
  if (!courseDetail) return null;

  return (
    <div className="course-card">
      <div className="course-thumbnail">
        <img
          src={ `https://img.youtube.com/vi/${ courseDetail.thumbnail_id }/hqdefault.jpg` }
          className="img"
          alt={ courseDetail.name }
        />
      </div>
      <div className="course-price">
        <span className="text">
          { Number(courseDetail.price_in_vnd) === 0 ? 'Miễn phí' : courseDetail.price_in_vnd }
        </span>
      </div>
      <div className="course-register">
        <button className="btn btn-register">Đăng ký học</button>
      </div>
      <div className="course-shortdesc">
        <div className="item">
          <i className="fas fa-check icon"></i>
          <span className="text">
            {
              Number(courseDetail.level) === 1
                ? 'Trình độ cơ bản'
                : Number(courseDetail.level) === 2
                  ? 'Trình độ trung bình'
                  : 'Trình độ cao'
            }
          </span>
        </div>
        <div className="item">
          <i className="fas fa-check icon"></i>
          <span className="text">{ courseDetail.chapters_count } chương học</span>
        </div>
        <div className="item">
          <i className="fas fa-check icon"></i>
          <span className="text">{ courseDetail.lessons_count } bài học</span>
        </div>
      </div>
    </div>
  );
}
