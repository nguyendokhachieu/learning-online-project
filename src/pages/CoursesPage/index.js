import "./courses-page.scss";

import CategoriesList from "../../components/CategoriesList";
import CoursesList from "../../components/CoursesList";

export default function CoursesPage() {
  return (
    <section className="courses-section">
      <div className="container">
        <CategoriesList />
        <CoursesList />
      </div>
    </section>
  );
}
