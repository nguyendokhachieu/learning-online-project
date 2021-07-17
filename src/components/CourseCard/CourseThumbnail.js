export default function CourseThumbnail({ courseDetail = null }) {
  if (!courseDetail) return null;

  return (
    <div className="course-thumbnail">
      <img
        src={`https://img.youtube.com/vi/${courseDetail.thumbnail_id}/hqdefault.jpg`}
        className="img"
        alt={courseDetail.name}
      />
    </div>
  );
}
