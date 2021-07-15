import { CourseService } from "../../services/course";

export const ACT_FETCH_LIST_COURSES = 'ACT_FETCH_LIST_COURSES';
export const ACT_FETCH_COURSE_IN_DETAIL = 'ACT_FETCH_COURSE_IN_DETAIL';

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