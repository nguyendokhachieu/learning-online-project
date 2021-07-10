import "./course-chapter.scss";

import ChapterItem from "./ChapterItem";

export default function CourseChapter() {
  return (
    <div className="course-chapter">
      <div className="content-scrollable">
        <div className="chapter-list">
          <ChapterItem />
          <ChapterItem />
          <ChapterItem />
        </div>
      </div>
    </div>
  );
}
