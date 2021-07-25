import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetListCommentsParentAsync } from "../../../../store/comments/actions";

import CommentItem from "./CommentItem";

export default function ListComments() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const { currentLessonInfo } = useSelector(state => state.courses);
  const { user } = useSelector(state => state.users.currentUser);
  const { list, page, hasMore } = useSelector(state => state.comments.parentComments);

  function loadmore() {
    if (!hasMore) return;
    if (!currentLessonInfo.current_lesson_id) return;
    if (!user) return;
    if (loading) return;

    setLoading(true);
    dispatch(actGetListCommentsParentAsync({
        parentId: '0',
        lessonId: currentLessonInfo.current_lesson_id,
        page: page + 1,
        perPage: 10,
    })).then(() => {
        setLoading(false);
    })
  }

  useEffect(() => {
    if (loading) return;
    if (!currentLessonInfo.current_lesson_id) return;
    if (!user) return;

    setLoading(true);
    dispatch(actGetListCommentsParentAsync({
      parentId: '0',
      lessonId: currentLessonInfo.current_lesson_id,
      page: 1,
      perPage: 10,
    })).then(() => {
      setLoading(false);

    })
  }, [currentLessonInfo.current_lesson_id, user, dispatch]);

  return (
    <>
    <div className="comments-list">
        {
          list.length !== 0
            ? list.map(item => {
              return <CommentItem comment={ item } key={ item.id } />
            })
            : null
        }
    </div>
    <div className="comments-notifs">
      {
        list.length === 0 && loading 
            ? <div className="text">Đang tải</div>
            : list.length === 0 
                ? <div className="text">Hãy là người đầu tiên bình luận</div>
                : null
      }
      {
        list.length >= 10 && hasMore 
            ? (
                <div 
                    className={ loading ? "btn btn-loadmore disabled" : "btn btn-loadmore" }
                    onClick={ loadmore }
                >
                        {
                            loading ? "Đang tải" : "Xem thêm bình luận"
                        }
                </div> 
            )
            : null
      }
    </div>
    </>
  );
}
