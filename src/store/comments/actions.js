import { CommentService } from "../../services/comment";

export const ACT_POST_NEW_COMMENT = 'ACT_POST_NEW_COMMENT';
export const ACT_GET_LIST_PARENT_COMMENTS = 'ACT_GET_LIST_PARENT_COMMENTS';
export const ACT_GET_LIST_CHILDREN_COMMENTS = 'ACT_GET_LIST_CHILDREN_COMMENTS';

export const actGetListCommentsChildrenAsync = ({
    lessonId = null,
    parentId = null,
    page = 1,
    perPage = 5,
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
                dispatch(actGetListCommentsChildren({
                    page,
                    perPage,
                    parentId,
                    list: response.data.data || [],
                }))
            }
        } catch (error) {
            
        }
    }
}

const actGetListCommentsChildren = ({
    page,
    perPage,
    parentId,
    list,
}) => {
    return {
        type: ACT_GET_LIST_CHILDREN_COMMENTS,
        payload: {
            page, 
            perPage,
            parentId,
            list,
        }
    }
}

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
        type: ACT_GET_LIST_PARENT_COMMENTS,
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