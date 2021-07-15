import "./course-intro-page.scss";

import { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { actFetchCourseInDetailAsync } from "../../store/courses/actions";
import { actHideLoadingFullscreen, actShowLoadingFullscreen } from "../../store/modals/actions";
import { useScrollToTop } from "../../hooks/useScrollToTop";

import Breadcrumb from "../../components/Breadcrumb";
import CourseIntroduction from "../../components/CourseIntroduction";
import CourseChapterAccordion from "../../components/CourseChapterAccordion";
import CourseCard from "../../components/CourseCard";

export default function CourseIntroPage() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const { scrollToTop } = useScrollToTop();
  const { courseDetail } = useSelector(state => state.courses);

  let courseId = location.pathname.split('.').length === 2 ? location.pathname.split('.')[1] : null;
  courseId = isNaN(courseId) ? null : Number(courseId);
  courseId = courseId < 1 ? null : courseId;

  useEffect(() => {
    if (history.action === 'POP') dispatch(actShowLoadingFullscreen());

    dispatch(actFetchCourseInDetailAsync({
      courseId
    })).finally(() => {
      if (history.action === 'POP') {
        setTimeout(() => {
          dispatch(actHideLoadingFullscreen());
        }, 750);
      } else {
        dispatch(actHideLoadingFullscreen());
      }
    });

    scrollToTop();
  }, [courseId]);

  if (!courseId) {
    history.push(`/not-found`);
    return null;
  }

  if (!courseDetail) return null;

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
