import { useState } from "react";
import Lesson from "./Lesson";

export default function Chapter() {
  const [showLessonsList, setShowLessonsList] = useState(false);

  return (
    <li className="chapter">
      <div className="chapter-name" onClick={ () => setShowLessonsList(!showLessonsList) }>
        <span className="text">Chương 1. Mở đầu</span>
        <i className={ showLessonsList ? "fas fa-caret-up icon" : "fas fa-caret-up icon rotate-up"}></i>
      </div>
      <ul className={ showLessonsList ? "lessons-list" : "lessons-list hidden" }>
        <Lesson />
      </ul>
    </li>
  );
}
