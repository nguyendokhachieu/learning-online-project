import { 
    ACT_FETCH_LIST_COURSES,
    ACT_FETCH_COURSE_IN_DETAIL,
    ACT_FETCH_USER_REGISTERED_COURSE,
} from "./actions";

const initState = {
    courses: {
        list: [],
        page: 1,
        perPage: 10,
        hasMore: true,
    },

    courseDetail: null,

    registeredCourseDetail: null,
};

export const courseReducer = (state = initState, action) => {
    switch (action.type) {
        case ACT_FETCH_USER_REGISTERED_COURSE:
            return {
                ...state,
                registeredCourseDetail: action.payload.courseDetail,
            }

        case ACT_FETCH_COURSE_IN_DETAIL:
            return {
                ...state,
                courseDetail: action.payload.detail
            }

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