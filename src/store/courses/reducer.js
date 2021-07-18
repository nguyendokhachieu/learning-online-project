import { 
    ACT_FETCH_LIST_COURSES,
    ACT_FETCH_COURSE_IN_DETAIL,
    ACT_FETCH_USER_REGISTERED_COURSE,
    ACT_UPDATE_CURRENT_LESSON_INFO,
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

    currentLessonInfo: {
        current_lesson_id: null,
        current_video_id: null,
    }
};

export const courseReducer = (state = initState, action) => {
    switch (action.type) {
        case ACT_UPDATE_CURRENT_LESSON_INFO:
            return {
                ...state,
                currentLessonInfo: {
                    ...state.currentLessonInfo,
                    current_lesson_id: action.payload.courseDetail.current_lesson_id,
                    current_video_id: action.payload.courseDetail.current_video_id,
                }
            }

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