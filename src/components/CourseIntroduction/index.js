import "./course-introduction.scss";

export default function CourseIntroduction({
  courseDetail = null,
}) 
{
  if (!courseDetail) return null;

  return (
    <>
      <div className="course-name">
        <h1 className="title" title={ courseDetail.name }>{ courseDetail.name }</h1>
      </div>
      <div className="paragraph">
        <p className="text">{ courseDetail.short_desc }</p>
      </div>
      <div className="heading">
        <h2 className="title">Bạn sẽ học những gì?</h2>
      </div>
      {
        courseDetail.paragraph_descs.length !== 0 && (
          courseDetail.paragraph_descs.map((p, idx) => (
            <div className="paragraph" key={ idx }>
              <p className="text has-icon"><i className="fas fa-check icon"></i>{ p }</p>
            </div>
          ))
        )
      }     
      <div className="heading course-chapters-heading">
        <h2 className="title">Nội dung khóa học</h2>
      </div>
    </>
  );
}
