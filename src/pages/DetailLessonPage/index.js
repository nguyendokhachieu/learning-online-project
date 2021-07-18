import "./detail-lesson-page.scss";

import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { actHideLoadingFullscreen, actShowLoadingFullscreen } from "../../store/modals/actions";
import { actFetchUserRegisteredCourseByLessonIdAsync } from "../../store/courses/actions";

import YouTubeVideo from "../../components/YouTubeVideo";
import NavUnderVideo from "../../components/NavUnderVideo";
import CourseGeneralInfo from "../../components/CourseGeneralInfo";
import CourseChapter from "../../components/CourseChapter";

export default function DetailLessonPage() {
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  
  const { registeredCourseDetail, currentLessonInfo } = useSelector(state => state.courses);

  const [isSideNavHidden, setIsSideNavHidden] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (history && history.action === 'POP') {
      dispatch(actShowLoadingFullscreen());
    }
  }, [dispatch, history]);

  useEffect(() => {
    registeredCourseDetail && dispatch(actHideLoadingFullscreen());

    if (history && history.action === 'POP') {
      if (params?.lessonId) {
        if (registeredCourseDetail) {
          Number(registeredCourseDetail.current_lesson_id) !== Number(params.lessonId)
            && history.push(`/learn/${ registeredCourseDetail.current_lesson_id }`)
        }
      }
    }
    
  }, [registeredCourseDetail]);

  useEffect(() => {
    if (history && history.action === 'PUSH') return;
    if (!params) return;
    if (isNaN(params?.lessonId)) history.push('/not-found');
    if (loading) return;

    setLoading(true);
    if (params && params.lessonId) {
      dispatch(actFetchUserRegisteredCourseByLessonIdAsync({
        lessonId: params.lessonId,
      })).then(response => {
        setLoading(false);

        !response.ok && dispatch(actHideLoadingFullscreen()); 
        !response.ok && history.push('/not-found');
      });
    }
  }, [dispatch, history]);

  if (!registeredCourseDetail) return null;
  if (!currentLessonInfo) return null;

  return (
    <div className={ isSideNavHidden ? "detail-lesson-section hide-side-nav" : "detail-lesson-section" }>
      <div className="video">
        <div className="content-scrollable">
          <div className="container">
            <YouTubeVideo videoId={ currentLessonInfo?.current_video_id } />
            <NavUnderVideo />
          </div>
        </div>
      </div>
      <div className="lessons-nav">
        <CourseGeneralInfo 
          hideSideNav={ () => setIsSideNavHidden(!isSideNavHidden) } 
          registeredCourseDetail={ registeredCourseDetail }
        />
        <CourseChapter registeredCourseDetail={ registeredCourseDetail } />
      </div>
    </div>
  );
}