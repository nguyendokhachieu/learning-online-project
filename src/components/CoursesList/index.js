import "./courses-list.scss";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actFetchListCoursesAsync } from "../../store/courses/actions";

import CoursesItem from "./CourseItem";
import LoadingCoursesItem from "./CourseItem/LoadingCourseItem";

export default function CoursesList() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { list, page, hasMore } = useSelector(state => state.courses.courses);

  function loadMoreCourses() {
    if (loading) return;
    if (!hasMore) return;

    setLoading(true);
    dispatch(actFetchListCoursesAsync({
      page: page + 1,
      perPage: 5,
    })).finally(() => {
      setLoading(false);
    });

  }

  useEffect(() => {
    if (loading) return;

    setLoading(true);
    dispatch(actFetchListCoursesAsync({
      page: 1,
      perPage: 5,
    })).finally(() => {
      setLoading(false);
    });

  }, [dispatch]);

  return (
    <>
      <div className="courses-list">
        {
          list.length !== 0 
            ? list.map(course => {
              return <CoursesItem course={ course } key={ course.id } />
            })
            : loading 
              ? <LoadingCoursesItem noOfItems={ 6 } />
              : null
          
        }
      </div>
      <div className="load-more-courses">
        <button 
          className={ loading || !hasMore ? "btn btn-loadmore disabled" : "btn btn-loadmore" }
          onClick={ loadMoreCourses }
        >
          {
            loading 
              ? <><i className="fas fa-circle-notch icon fa-spin"></i>Đang tải</>
              : hasMore
                ? <>Hiển thị thêm các khóa học khác</>
                : <>Bạn đã xem hết các khóa học</>
          }
        </button>
      </div>
    </>
  );
}