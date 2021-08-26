import "./courses-list.scss";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { actFetchListCoursesByCategorySlugAsync } from "../../store/courses/actions";

import CoursesItem from "./CourseItem";
import LoadingCoursesItem from "./CourseItem/LoadingCourseItem";

export default function CoursesList({
  categorySlug,
}) 
{
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { list, page, hasMore, categorySlug: savedCategorySlug } = useSelector(state => state.courses.coursesByCategorySlug);
  
  function loadMoreCourses() {
    if (loading) return;
    if (!hasMore) return;

    setLoading(true);
    dispatch(actFetchListCoursesByCategorySlugAsync({
      page: page + 1,
      perPage: 6,
      categorySlug: savedCategorySlug,
    })).finally(() => {
      setLoading(false);
    });

  }
console.log(list);
  useEffect(() => {
    if (loading) return;

    setLoading(true);

    dispatch(actFetchListCoursesByCategorySlugAsync({
      page: 1,
      perPage: 6,
      categorySlug: categorySlug.trim() === '' ? 'tat-ca-khoa-hoc' : categorySlug,
    })).finally(() => {
      setLoading(false);
    });

  }, [dispatch, categorySlug]);

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
              : (
                <>
                  <div className="courses-list-empty">Không có khóa học nào trong danh mục <span className="highlight">{ categorySlug }</span></div>
                  <div className="courses-list-empty mb-9"><a href="/courses?category=tat-ca-khoa-hoc" className="link-to-all-courses">Quay về trang tất cả khóa học</a></div>
                </>
              )
          
        }
      </div>
      {
        list.length === 0
          ? null
          : (
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
          )
      }
    </>
  );
}