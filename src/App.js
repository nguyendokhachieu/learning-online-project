import "./assets/scss/app.scss";

import { useSelector } from "react-redux";
import { Switch, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailLessonPage from "./pages/DetailLessonPage";
import CoursesPage from "./pages/CoursesPage";
import CourseIntroPage from "./pages/CourseIntroPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import ModalLoadingFullScreen from "./pages/ModalLoadingFullScreen";

function App() {
  const location = useLocation();
  const { modalLoadingFullScreen } = useSelector(state => state.modals);

  const isHideFooter = ['/learn', '/login', '/register'].includes(location.pathname || '');
  const isHideHeader = ['/login', '/register'].includes(location.pathname || '');

  return (
    <>
    <div className="fullscreen">
       {
        !isHideHeader 
          ? <Header />
          : null
      }
      <section className="main">
        <Switch>
          <Route path="/learn/:slug">
            <DetailLessonPage />
          </Route>
          <Route path="/course/:slug">
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
          <Route exact path="/">
            <CoursesPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </section>
      {
        !isHideFooter 
          ? <Footer />
          : null
      }
    </div>
    <ModalLoadingFullScreen show={ modalLoadingFullScreen.show } />
    </>
  );
}

export default App;