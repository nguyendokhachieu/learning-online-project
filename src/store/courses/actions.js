import { CourseService } from "../../services/course";

export const ACT_FETCH_LIST_COURSES = 'ACT_FETCH_LIST_COURSES';

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