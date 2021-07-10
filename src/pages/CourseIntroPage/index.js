import "./course-intro-page.scss";

import Breadcrumb from "../../components/Breadcrumb";
import CourseIntroduction from "../../components/CourseIntroduction";
import CourseChapterAccordion from "../../components/CourseChapterAccordion";
import CourseCard from "../../components/CourseCard";

export default function CourseIntroPage() {
  return (
    <section className="courses-introduction-section">
      <div className="container">
          <div className="col-9">
              <Breadcrumb />
              <CourseIntroduction />
              <CourseChapterAccordion />
          </div>
          <div className="col-3">
              <CourseCard />
          </div>
      </div>
    </section>
  );
}
