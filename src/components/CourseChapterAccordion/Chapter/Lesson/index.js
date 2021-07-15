export default function Lesson({
  lesson
}) 
{
  return (
    <li className="lesson" title={ lesson.name }>
      <i className="fas fa-play icon"></i>
      <span className="text">{ lesson.name }</span>
    </li>
  );
}
