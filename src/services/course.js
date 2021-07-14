import { api } from "./api";

export const CourseService = {
    getListCourse({
        page = 1,
        perPage = 10,
    }) {
        return api.call().get('/courses/get/list', {
            params: {
                page,
                per_page: perPage,
            }
        })
    },

    getCourseInDetail(courseId = null) {
        if (!courseId) return;

        return api.call().get('/courses/get/detail', {
            params: {
                course_id: courseId,
            }
        })
    }
}