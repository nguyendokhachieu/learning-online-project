import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { generateChildCommentKey } from "../../../../../store/comments/reducer";
import { actGetListCommentsChildrenAsync } from "../../../../../store/comments/actions";

export default function ShowRepliesButton({
  comment = null,
}) 
{
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [isFirstPage, setIsFirstPage] = useState(true);
  const { childrenComments } = useSelector(state => state.comments);
  const cKey = generateChildCommentKey(comment?.id);
  
  function fetchCommentsChildren() {
    if (loading) return;
    if (!comment) return;
    if (!childrenComments[cKey]) return;

    setLoading(true);
    dispatch(actGetListCommentsChildrenAsync({
      lessonId: comment.lesson_id,
      parentId: comment.id,
      page: isFirstPage ? 1 : childrenComments[cKey].page + 1,
      perPage: 5,
    })).then(() => {
      setLoading(false);
      setIsFirstPage(false);
    })
  }

  if (!comment) return null;
  if (!childrenComments[cKey]) return null;
  
  return (
    childrenComments[cKey].hasMore && (
      <div 
        className={ loading ? "comment-show-reply disabled" : "comment-show-reply" }
        onClick={ fetchCommentsChildren }
      >
        {
          loading 
            ? <i className="fas fa-circle-notch icon fa-spin"></i> 
            : <i className="fas fa-arrow-right icon"></i>
        }
        <span className="text">
          {
            loading 
              ? "Đang tải thêm các câu trả lời"
              : "Xem thêm các câu trả lời"
          }
        </span>
      </div>
    )
  );
}
