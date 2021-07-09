import "./detail-lesson-page.scss";

import { useState } from "react";

import YouTubeVideo from "../../components/YouTubeVideo";
import NavUnderVideo from "../../components/NavUnderVideo";
import CourseGeneralInfo from "../../components/CourseGeneralInfo";
import CourseChapter from "../../components/CourseChapter";

export default function DetailLessonPage() {
  const [isSideNavHidden, setIsSideNavHidden] = useState(false);

  return (
    <div className={ isSideNavHidden ? "detail-lesson-section hide-side-nav" : "detail-lesson-section" }>
      <div className="video">
        <div className="content-scrollable">
          <div className="container">
            <YouTubeVideo />
            <NavUnderVideo />
          </div>
        </div>
      </div>
      <div className="lessons-nav">
        <CourseGeneralInfo hideSideNav={ () => setIsSideNavHidden(!isSideNavHidden) } />
        <CourseChapter />
      </div>
    </div>
  );
}