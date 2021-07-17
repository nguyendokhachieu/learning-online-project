export default function CoursePrice({ courseDetail = null }) {
  if (!courseDetail) return null;

  return (
    <div className="course-price">
      <span className="text">
        {Number(courseDetail.price_in_vnd) === 0
          ? "Miễn phí"
          : courseDetail.price_in_vnd}
      </span>
    </div>
  );
}
