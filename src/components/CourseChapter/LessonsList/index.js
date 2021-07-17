import LessonItem from "../LessonItem";

export default function LessonsList({
  chapter = null,
}) 
{
  if (!chapter) return null;

  return (
    <ul className="dropdown-items">
      {
        chapter.lessons_list.length !== 0 && (
          chapter.lessons_list.map(lesson => {
            return <LessonItem lesson={ lesson } key={ lesson.id } />;
          })
        )
      }
    </ul>
  );
}
