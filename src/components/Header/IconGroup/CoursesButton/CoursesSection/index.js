import "./courses-section.scss";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CourseItem from "./CourseItem";
import { actFetchUserRegisteredCoursesListAsync } from "../../../../../store/courses/actions";

export default function CoursesSection({
  showCoursesBox = false,
  closeCoursesBox = function(){},
}) 
{
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { list, page } = useSelector(state => state.courses.userRegisteredCoursesList);

  function loadmore() {
    if (loading) return;

    setLoading(true);
    dispatch(actFetchUserRegisteredCoursesListAsync({
      page: page + 1,
      perPage: 20,
    })).then(() => {
      setLoading(false);
    })
  }

  useEffect(() => {
    if (!showCoursesBox) return;
    if (loading) return;

    setLoading(true);
    dispatch(actFetchUserRegisteredCoursesListAsync({
      page: 1,
      perPage: 20,
    })).then(() => {
      setLoading(false);
    })

  }, [showCoursesBox, list, dispatch]);

  return (
    <section className={ showCoursesBox ? "courses-section-dropdown-box active" : "courses-section-dropdown-box" }>
      <div className="courses-heading">
        <h3 className="title">Khóa học của bạn</h3>
        {/* <div className="options">Xem tất cả</div> */}
      </div>
      <div className="scrollable-list">
        <div className="courses-d-he-list">
          {
            loading && list.length === 0
              ? <div className="textLoad">Đang tải <i className="fas fa-circle-notch icon fa-spin"></i></div>
              : list.length !== 0 
                ? list.map(course => {
                  return (
                    <CourseItem 
                      course={ course } 
                      key={ course.id } 
                      closeCoursesBox={ () => closeCoursesBox() }
                    />
                  )
                })
                : <div className="textLoad">Bạn chưa tham gia khóa học nào</div>
          }          
        </div>
      </div>
      {
        list.length >= 20
          ? (
            <div className={ loading ? "courses-box1-footer disabled" : "courses-box1-footer" }>
              <span 
                className="text"
                onClick={ loadmore }
              >
                {
                  loading ? "Đang tải" : "Hiển thị thêm"
                }
              </span>
            </div>
          )
          : null
      }
    </section>
  );
}
