import "./assets/scss/app.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailLessonPage from "./pages/DetailLessonPage";

function App() {
  return (
    <div className="fullscreen">
      <Header />
      <section className="main">
        <DetailLessonPage />
      </section>
      <Footer />
    </div>
  );
}

export default App;