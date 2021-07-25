import "./course-intro-page.scss";

import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { actFetchCourseInDetailAsync } from "../../store/courses/actions";
import { actHideLoadingFullscreen, actShowLoadingFullscreen } from "../../store/modals/actions";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { useConstructor } from "../../hooks/useContructor";

import Breadcrumb from "../../components/Breadcrumb";
import CourseIntroduction from "../../components/CourseIntroduction";
import CourseChapterAccordion from "../../components/CourseChapterAccordion";
import CourseCard from "../../components/CourseCard";
import NotFound from "../../components/NotFound";

export default function CourseIntroPage() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const { scrollToTop } = useScrollToTop();
  const { courseDetail } = useSelector(state => state.courses);

  useConstructor(() => {
    if (history.action === 'POP') dispatch(actShowLoadingFullscreen());
  });

  let courseId = location.pathname.split('.').length === 2 ? location.pathname.split('.')[1] : null;
  courseId = isNaN(courseId) ? null : Number(courseId);
  courseId = courseId < 1 ? null : courseId;

  useEffect(() => {
    if (loading) return;
    setLoading(true);

    dispatch(actFetchCourseInDetailAsync({
      courseId
    })).finally(() => {
      setLoading(false);
      if (history.action === 'POP') {
        setTimeout(() => {
          dispatch(actHideLoadingFullscreen());
        }, 750);
      } else {
        dispatch(actHideLoadingFullscreen());
      }
    });

    scrollToTop();
  }, [courseId, dispatch, history.action, scrollToTop]);

  if (loading) return null;

  if (!courseId || !courseDetail) return <NotFound />;
  
  return (
    <section className="courses-introduction-section">
      <div className="container">
          <div className="col-9">
              <Breadcrumb courseDetail={ courseDetail } />
              <CourseIntroduction courseDetail={ courseDetail } />
              <CourseChapterAccordion courseDetail={ courseDetail } />
          </div>
          <div className="col-3">
              <CourseCard courseDetail={ courseDetail } />
          </div>
      </div>
    </section>
  );
}
