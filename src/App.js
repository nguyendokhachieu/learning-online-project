import "./assets/scss/app.scss";

import { Switch, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailLessonPage from "./pages/DetailLessonPage";
import CoursesPage from "./pages/CoursesPage";
import CourseIntroPage from "./pages/CourseIntroPage";

function App() {
  const location = useLocation();

  const isHideFooter = ['/learn'].includes(location.pathname || '');

  return (
    <div className="fullscreen">
      <Header />
      <section className="main">
        <Switch>
          <Route path="/learn">
            <DetailLessonPage />
          </Route>
          <Route path="/course">
            <CourseIntroPage />
          </Route>
          <Route path="/courses">
            <CoursesPage />
          </Route>
          <Route path="/">
            <CoursesPage />
          </Route>
          <Route>
            Not Found
          </Route>
        </Switch>
      </section>
      {
        !isHideFooter 
          ? <Footer />
          : null
      }
    </div>
  );
}

export default App;