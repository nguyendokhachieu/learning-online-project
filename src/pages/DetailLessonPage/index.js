import "./detail-lesson-page.scss";

import YouTubeVideo from "../../components/YouTubeVideo";
import NavUnderVideo from "../../components/NavUnderVideo";
import CourseGeneralInfo from "../../components/CourseGeneralInfo";
import CourseChapter from "../../components/CourseChapter";

export default function DetailLessonPage() {
  return (
    <div className="detail-lesson-section">
      <div className="video">
        <div className="content-scrollable">
          <div className="container">
            <YouTubeVideo />
            <NavUnderVideo />
          </div>
        </div>
      </div>
      <div className="lessons-nav">
        <CourseGeneralInfo />
        <CourseChapter />
      </div>
    </div>
  );
}