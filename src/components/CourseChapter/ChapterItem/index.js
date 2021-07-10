import { useState } from "react";

import ChapterName from "../ChapterName";
import LessonsList from "../LessonsList";

export default function ChapterItem() {
  const [showLessonsList, setShowLessonsList] = useState(false);

  return (
    <section className="dropdown">
      <ChapterName onToggleDropdown={ () => setShowLessonsList(!showLessonsList) } />
      {
        showLessonsList ? <LessonsList /> : null
      }
    </section>
  );
}
