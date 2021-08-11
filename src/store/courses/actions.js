import { CourseService } from "../../services/course";

export const ACT_FETCH_LIST_COURSES = 'ACT_FETCH_LIST_COURSES';
export const ACT_FETCH_COURSE_IN_DETAIL = 'ACT_FETCH_COURSE_IN_DETAIL';
export const ACT_REGISTER_NEW_COURSE = 'ACT_REGISTER_NEW_COURSE';
export const ACT_FETCH_USER_REGISTERED_COURSE = 'ACT_FETCH_USER_REGISTERED_COURSE';
export const ACT_UPDATE_CURRENT_LESSON_INFO = 'ACT_UPDATE_CURRENT_LESSON_INFO';
export const ACT_FETCH_USER_REGISTERED_COURSES_LIST = 'ACT_FETCH_USER_REGISTERED_COURSES_LIST';
export const ACT_FETCH_LIST_COURSES_BY_CATEGORY_SLUG = 'ACT_FETCH_LIST_COURSES_BY_CATEGORY_SLUG';
export const ACT_SEARCH_COURSES = 'ACT_SEARCH_COURSES';

export const actSearchCoursesAsync = ({
    page = 1,
    perPage = 6,
    q = null,
}) => {
    return async dispatch => {
        if (!q) return;

        try {
            const response = await CourseService.searchCourses({
                page,
                perPage,
                q,
            });

            if (response?.data.ok) {
                dispatch(actSearchCourses({
                    page,
                    perPage,
                    list: response?.data.data || [],
                }))
            }

        } catch (error) {
            
        }
    }
}

const actSearchCourses = ({
    page,
    perPage,
    list,
}) => {
    return {
        type: ACT_SEARCH_COURSES,
        payload: {
            page,
            perPage,
            list,
        }
    }
}

export const actFetchListCoursesByCategorySlugAsync = ({
    page = 1,
    perPage = 6, 
    categorySlug = null,
}) => {
    return async dispatch => {
        if (!categorySlug) return;

        try {
            const response = await CourseService.getListCourseByCategorySlug({
                page,
                perPage,
                categorySlug,
            });

            if (response?.data.ok) {
                dispatch(actFetchListCoursesByCategorySlug({
                    page,
                    perPage,
                    list: response?.data.data || [],
                    categorySlug: response?.data.category_slug || 'tat-ca-khoa-hoc',
                }))
            }
        } catch (error) {
            
        }
    }
}

const actFetchListCoursesByCategorySlug = ({
    page,
    perPage,
    list,
    categorySlug,
}) => {
    return {
        type: ACT_FETCH_LIST_COURSES_BY_CATEGORY_SLUG,
        payload: {
            page,
            perPage,
            list,
            categorySlug,
        }
    }
}

export const actFetchUserRegisteredCoursesListAsync = ({
    page = 1,
    perPage = 20,
}) => 
{
    return async dispatch => {
        try {
            const response = await CourseService.getUserListRegisteredCourses({
                page,
                perPage,
            })

            if (response.data.ok) {
                dispatch(actFetchUserRegisteredCoursesList({
                    page,
                    perPage,
                    list: response.data.data || []
                }))
            }
        } catch (error) {
            
        }
    }
}

const actFetchUserRegisteredCoursesList = ({
    page,
    perPage,
    list
}) => {
    return {
        type: ACT_FETCH_USER_REGISTERED_COURSES_LIST,
        payload: {
            page,
            perPage,
            list,
        }
    }
}

export const actUpdateCurrentLessonInfo = (courseDetail) => {
    return {
        type: ACT_UPDATE_CURRENT_LESSON_INFO,
        payload: {
            courseDetail
        }
    }
}

export const actCheckNextLesson = ({
    currentLessonId = null,
    nextLessonId = null,
}) => 
{
    return async dispatch => {
        if (!currentLessonId) return;
        if (!nextLessonId) return;

        try {
            const response = await CourseService.checkNextLesson({
                currentLessonId,
                nextLessonId,
            })

            if (response.data.ok) {
                dispatch(actFetchUserRegisteredCourse(response.data.data));
                dispatch(actUpdateCurrentLessonInfo(response.data.data));

                return { ok: true }
            }

            return { ok: false }
        } catch (error) {
            return { ok: false }
        }
    }
}

export const actFetchUserRegisteredCourseByLessonIdAsync = ({
    lessonId = null,
}) => 
{
    return async dispatch => {
        if (!lessonId) return;

        try {
            const response = await CourseService.getUserDetailRegisteredCourse_ByLessonId(lessonId);

            if (response.data.ok) {
                dispatch(actFetchUserRegisteredCourse(response.data.data));
                dispatch(actUpdateCurrentLessonInfo(response.data.data));

                return {
                    ok: true,
                }
            }

            return {
                ok: false,
            }
        } catch (error) {
            return {
                ok: false,
            }
        }
    }
}

export const actFetchUserRegisteredCourseAsync = ({
    courseId = null,
}) => 
{
    return async dispatch => {
        if (!courseId) return;

        try {
            const response = await CourseService.getUserDetailRegisteredCourse(courseId);

            if (response.data.ok) {
                dispatch(actFetchUserRegisteredCourse(response.data.data));
                dispatch(actUpdateCurrentLessonInfo(response.data.data));

                return {
                    ok: true,
                }
            }

            return {
                ok: false,
            }
        } catch (error) {
            return {
                ok: false,
            }
        }
    }
}

const actFetchUserRegisteredCourse = (courseDetail) => {
    return {
        type: ACT_FETCH_USER_REGISTERED_COURSE,
        payload: {
            courseDetail
        }
    }
}

export const actRegisterNewCourse = ({
    courseId = null,
}) => 
{
    return async () => {
        if (!courseId) return;

        try {
            const response = await CourseService.register(courseId);

            if (response.data.ok) {
                return {
                    ok: true
                }
            }

            return {
                ok: false,
            }
        } catch (error) {
            return {
                ok: false,
            }
        }
    }
}

export const actFetchListCoursesAsync = ({
    page = 1,
    perPage = 10,
}) => 
{
    return async dispatch => {
        try {
            const response = await CourseService.getListCourse({
                page,
                perPage,
            });

            if (response.data?.ok) {
                dispatch(actFetchListCourses({
                    page,
                    perPage,
                    list: response.data.data || []
                }))

                return {
                    ok: true,
                }
            }

        } catch (error) {
            return {
                ok: false,
            }
        }
    }
}

const actFetchListCourses = ({
    page = 1,
    perPage = 10,
    list = [],
}) => 
{
    return {
        type: ACT_FETCH_LIST_COURSES,
        payload: {
            page,
            perPage,
            list
        }
    }
}

export const actFetchCourseInDetailAsync = ({
    courseId = null,
}) => 
{
    return async dispatch => {
        if (!courseId) return;

        try {
            const response = await CourseService.getCourseInDetail(courseId);

            if (response?.data?.ok) {
                dispatch(actFetchCourseInDetail(response.data.data || null));

                return {
                    ok: true,
                }
            }

            return {
                ok: false,
            }
        } catch (error) {
            return {
                ok: false,
            }
        }
    }
}

const actFetchCourseInDetail = (detail) => {
    return {
        type: ACT_FETCH_COURSE_IN_DETAIL,
        payload: {
            detail,
        }
    }
}