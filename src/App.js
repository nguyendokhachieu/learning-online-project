import "./assets/scss/app.scss";

import { Switch, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailLessonPage from "./pages/DetailLessonPage";
import CoursesPage from "./pages/CoursesPage";
import CourseIntroPage from "./pages/CourseIntroPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const location = useLocation();

  const isHideFooter = ['/learn', '/login', '/register'].includes(location.pathname || '');
  const isHideHeader = ['/login', '/register'].includes(location.pathname || '');

  return (
    <div className="fullscreen">
       {
        !isHideHeader 
          ? <Header />
          : null
      }
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
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
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