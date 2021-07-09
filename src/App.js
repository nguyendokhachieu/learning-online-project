import "./assets/scss/app.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailLessonPage from "./pages/DetailLessonPage";
import CoursesPage from "./pages/CoursesPage";

function App() {
  return (
    <div className="fullscreen">
      <Header />
      <section className="main">
        {/* <DetailLessonPage /> */}
        <CoursesPage />
      </section>
      <Footer />
    </div>
  );
}

export default App;