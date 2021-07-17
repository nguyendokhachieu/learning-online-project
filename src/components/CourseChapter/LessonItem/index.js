export default function LessonItem({
  lesson = null,
}) 
{
  if (!lesson) return null;

  return (
    <li className="item">
      <div className="indicator">
        <div className="icon-wrap">
          <i className="fas fa-circle-notch icon"></i>
        </div>
      </div>
      <div className="lesson">
        <h5 className="lesson-name">{ lesson.name }</h5>
        <div className="lesson-time">15:03</div>
      </div>
    </li>
  );
}
