import { useState } from "react";

import ChapterName from "../ChapterName";
import LessonsList from "../LessonsList";

export default function ChapterItem({
  chapter = null,
  registeredCourseDetail = null,
}) 
{
  const [showLessonsList, setShowLessonsList] = useState(true);

  if (!chapter) return null;
  if (!registeredCourseDetail) return null;
  
  return (
    <section className="dropdown">
      <ChapterName 
        onToggleDropdown={ () => setShowLessonsList(!showLessonsList) } 
        chapter={ chapter }
      />
      <LessonsList 
        showLessonsList={ showLessonsList } 
        registeredCourseDetail={ registeredCourseDetail }
        chapter={ chapter } 
      />
    </section>
  );
}
