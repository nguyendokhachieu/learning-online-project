import "./loading-course-item.scss";

export default function LoadingCoursesItem({
  noOfItems = 6,
}) 
{
  let arrayRendered = [];

  for (let i = 0; i < noOfItems; i++) {
    arrayRendered.push(
      <section className="loading-course-item">
        <div className="course-item-inner">
          <div className="course-thumbnail"></div>
          <div className="course-item-body">
            <div className="course-item-heading">
              <div className="course-name-title"><h2>Đang tải khóa học. Xin vui lòng chờ</h2></div>
              <p className="course-desc">Đang tải mô tả ngắn của khóa học. Xin vui lòng chờ</p>
            </div>
            <div className="course-info-bottom"><div className="participants-count">Đang tải tổng số người tham gia</div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return arrayRendered;
}
