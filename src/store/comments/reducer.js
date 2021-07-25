import { 
    ACT_GET_LIST_PARENT_COMMENTS,
    ACT_GET_LIST_CHILDREN_COMMENTS,
 } from "./actions";

export const generateChildCommentKey = parentId => `parent-${parentId}`;

const initState = {
    parentComments: {
        list: [],
        page: 1,
        perPage: 10,
        hasMore: true,
    },

    childrenComments: {

    },
}

export const commentsReducer = (state = initState, action) => {
    switch (action.type) {
        case ACT_GET_LIST_CHILDREN_COMMENTS:
            const cKey = generateChildCommentKey(action.payload.parentId);
            
            return {
                ...state,
                childrenComments: {
                    ...state.childrenComments,
                    [cKey]: {
                        ...state.childrenComments[cKey],
                        page: action.payload.page,
                        perPage: action.payload.perPage,
                        hasMore: action.payload.list.length === 0 ? false : true,
                        list: action.payload.page === 1
                                ? action.payload.list
                                : [
                                    ...state.childrenComments[cKey].list,
                                    ...action.payload.list,
                                ]
                    }
                }
            }

        case ACT_GET_LIST_PARENT_COMMENTS:

            const childHash = {};

            if (action.payload.list.length !== 0) {
                action.payload.list.forEach(cmt => {
                    const key = generateChildCommentKey(cmt.id);
                    const val = {
                        list: [],
                        page: 1,
                        perPage: 5,
                        hasMore: true,
                    }
                    childHash[key] = val;
                });
            }

            return {
                ...state,
                parentComments: {
                    ...state.parentComments,
                    page: action.payload.page,
                    perPage: action.payload.perPage,
                    hasMore: action.payload.list.length === 0 ? false : true,
                    list: action.payload.page === 1
                            ? action.payload.list
                            : [
                                ...state.parentComments.list,
                                ...action.payload.list,
                            ]
                },

                childrenComments: {
                    ...state.childrenComments,
                    ...childHash,
                }
            }

        default:
            return state;
    }
}