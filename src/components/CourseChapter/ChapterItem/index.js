import { useState } from "react";

import ChapterName from "../ChapterName";
import LessonsList from "../LessonsList";

export default function ChapterItem({
  chapter = null,
}) 
{
  const [showLessonsList, setShowLessonsList] = useState(false);

  if (!chapter) return null;
  
  return (
    <section className="dropdown">
      <ChapterName 
        onToggleDropdown={ () => setShowLessonsList(!showLessonsList) } 
        chapter={ chapter }
      />
      {
        showLessonsList ? <LessonsList chapter={ chapter } /> : null
      }
    </section>
  );
}
