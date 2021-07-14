import { ACT_FETCH_LIST_COURSES } from "./actions";

const initState = {
    courses: {
        list: [],
        page: 1,
        perPage: 10,
        hasMore: true,
    }
};

export const courseReducer = (state = initState, action) => {
    switch (action.type) {
        case ACT_FETCH_LIST_COURSES:
            return {
                ...state,
                courses: {
                    ...state.courses,
                    page: action.payload.page,
                    perPage: action.payload.perPage,
                    hasMore: action.payload.list.length === 0 ? false : true,
                    list: action.payload.page === 1
                            ? action.payload.list
                            : [
                                ...state.courses.list,
                                ...action.payload.list,
                            ]
                }
            }
        default:
            return state;
    }
}