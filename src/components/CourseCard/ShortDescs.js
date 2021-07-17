
export default function ShortDescs({ 
    courseDetail = null 
}) 
{
  if (!courseDetail) return null;

  return (
    <div className="course-shortdesc">
      <div className="item">
        <i className="fas fa-check icon"></i>
        <span className="text">
          {Number(courseDetail.level) === 1
            ? "Trình độ cơ bản"
            : Number(courseDetail.level) === 2
            ? "Trình độ trung bình"
            : "Trình độ cao"}
        </span>
      </div>
      <div className="item">
        <i className="fas fa-check icon"></i>
        <span className="text">{courseDetail.chapters_count} chương học</span>
      </div>
      <div className="item">
        <i className="fas fa-check icon"></i>
        <span className="text">{courseDetail.lessons_count} bài học</span>
      </div>
      <div className="item">
        <i className="fas fa-check icon"></i>
        <span className="text">Hơn { Math.round(courseDetail.time_in_seconds / 60) } phút</span>
      </div>
    </div>
  );
}
