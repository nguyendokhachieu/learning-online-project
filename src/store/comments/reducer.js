import { ACT_GET_LIST_COMMENTS } from "./actions";

const initState = {
    parentComments: {
        list: [],
        page: 1,
        perPage: 10,
        hasMore: true,
    }
}

export const commentsReducer = (state = initState, action) => {
    switch (action.type) {
        case ACT_GET_LIST_COMMENTS:
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
                }
            }

        default:
            return state;
    }
}