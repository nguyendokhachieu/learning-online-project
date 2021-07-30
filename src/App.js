import "./assets/scss/app.scss";

import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailLessonPage from "./pages/DetailLessonPage";
import CoursesPage from "./pages/CoursesPage";
import CourseIntroPage from "./pages/CourseIntroPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SettingsPage from "./pages/SettingsPage";
import NotFoundPage from "./pages/NotFoundPage";

import ModalLoadingFullScreen from "./pages/ModalLoadingFullScreen";
import ModalLogoutConfirmation from "./components/Header/IconGroup/UserButton/UserSection/ModalLogoutConfirmation";
import ModalConfirmDelete from "./components/NavUnderVideo/TabNotes/ModalConfirmDelete";

import NotificationCard from "./components/NotificationCard";
import { useEffect, useState } from "react";
import { actAuthorizationAsync } from "./store/users/actions";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { 
    modalLoadingFullScreen, 
    notificationCard,
    logoutConfirmationModal,
  } = useSelector(state => state.modals);

  // const isHideFooter = ['/learn', '/login', '/register'].includes(location.pathname || '');
  const isHideFooter = location.pathname.startsWith('/learn') || 
                        location.pathname.startsWith('/login') ||
                        location.pathname.startsWith('/register');
  const isHideHeader = location.pathname.startsWith('/login') || 
                        location.pathname.startsWith('/register');

  useEffect(() => {
    if (loading) return;

    setLoading(true);
    dispatch(actAuthorizationAsync()).finally(() => setLoading(false));
  }, [dispatch]);

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
          <Route path="/settings">
            <SettingsPage />
          </Route>
          <Route path="/learn/:lessonId">
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
    <ModalLogoutConfirmation show={ logoutConfirmationModal.show } />
    <ModalConfirmDelete />
    <NotificationCard 
      show={ notificationCard.show } 
      content={ notificationCard.content }
      link={ notificationCard.link }
    />
    </>
  );
}

export default App;