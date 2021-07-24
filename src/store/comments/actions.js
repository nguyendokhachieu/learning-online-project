import { CommentService } from "../../services/comment";

export const ACT_POST_NEW_COMMENT = 'ACT_POST_NEW_COMMENT';
export const ACT_GET_LIST_COMMENTS = 'ACT_GET_LIST_COMMENTS';

export const actGetListCommentsParentAsync = ({
    lessonId = null,
    parentId = null,
    page = 1,
    perPage = 10,
}) => {
    return async dispatch => {
        if (!lessonId) return;
        if (!parentId) return;

        try {
            const response = await CommentService.get({
                lessonId,
                parentId,
                page,
                perPage,
            })

            if (response.data.ok) {
                dispatch(actGetListCommentsParent({
                    page,
                    perPage,
                    list: response.data.data || [],
                }))
            }
        } catch (error) {
            
        }
    }
}

const actGetListCommentsParent = ({
    page,
    perPage,
    list,
}) => {
    return {
        type: ACT_GET_LIST_COMMENTS,
        payload: {
            page, 
            perPage,
            list,
        }
    }
}

export const actPostNewCommentAsync = ({
    content = null,
    lessonId = null,
    parentId = null,
}) => {
    return async dispatch => {
        if (!content) return;
        if (!lessonId) return;
        if (!parentId) return;

        try {
            const response = await CommentService.create({
                content,
                lessonId,
                parentId,
            });

            if (response.data.ok) return { ok: true }
            return { ok: false }
        } catch (error) {
            return { ok: false }
        }
    }
}