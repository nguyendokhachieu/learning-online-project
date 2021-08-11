import "./courses-page.scss";

import { useHistory, useLocation } from "react-router";

import CategoriesList from "../../components/CategoriesList";
import CoursesList from "../../components/CoursesList";

export default function CoursesPage() {
  const location = useLocation();
  const history = useHistory();

  if (!location.search.startsWith('?category=')) history.push('/courses?category=tat-ca-khoa-hoc');

  const searchKey = location.search.substring(1, 9);

  if (searchKey !== 'category') history.push('/courses?category=tat-ca-khoa-hoc');

  const categorySlug = location.search.substr(10, location.search.length);

  if (categorySlug.trim() === '') history.push('/courses?category=tat-ca-khoa-hoc');

  return (
    <section className="courses-section">
      <div className="container">
        <CategoriesList />
        <CoursesList categorySlug={ categorySlug } />
      </div>
    </section>
  );
}
