import "./search-renderer.scss";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actSearchCoursesAsync } from "../../store/courses/actions";

import CourseItem from "./CourseItem";

export default function SearchRenderer({
  q = null,
}) 
{
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const { list, page, hasMore } = useSelector(state => state.courses.searchCourses);

  function loadMoreCourses() {
    if (loading) return;
    if (!q) return;

    setLoading(true);
    dispatch(actSearchCoursesAsync({
      page: page + 1,
      perPage: 6,
      q,
    })).then(() => {
      setLoading(false);
    })
  }

  useEffect(() => {
    if (loading) return;
    if (!q) return;

    setLoading(true);
    dispatch(actSearchCoursesAsync({
      page: 1,
      perPage: 6,
      q,
    })).then(() => {
      setLoading(false);
    })
  }, [q]);

  if (!q) return null;

  return (
    <div className="search-renderer">
      <div className="searchCourses">
        {
          list.length !== 0
            ? list.map(item => {
              return <CourseItem key={ item.id } course={ item } />
            })
            : loading 
              ? <div className="process-courses"><i className="fas fa-circle-notch icon fa-spin"></i>Đang tải</div>
              : <div className="process-courses">Rất tiếc, không có khóa học nào phù hợp với từ khóa của bạn</div>
        }
      </div>
      {
        list.length < 6
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
    </div>
  );
}
