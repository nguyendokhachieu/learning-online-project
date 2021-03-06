import { api } from "./api";

export const CourseService = {

    searchCourses({
        page,
        perPage,
        q
    }) {
        // const token = localStorage.getItem('accessToken');

        // if (!token) return;
        const token = '';
        return api.call().get('/search/courses/get', {
            params: {
                page,
                per_page: perPage,
                q,
            },
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + window.btoa(unescape(encodeURIComponent(token))),
            },
        })
    },

    getListCourseByCategorySlug({
        page = 1,
        perPage = 10,
        categorySlug = null,
    }) 
    {
        // const token = localStorage.getItem('accessToken');
        const token = '';

        // if (!token) return;
        if (!categorySlug) return;

        return api.call().get('/courses/category/get', {
            params: {
                page,
                per_page: perPage,
            },
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + window.btoa(unescape(encodeURIComponent(categorySlug)).concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').concat(unescape(encodeURIComponent(token)))),
            },
        })
    },

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
    },

    register(courseId = null) {
        if (!courseId) return;
        const token = localStorage.getItem('accessToken');

        return api.call().post('/courses/user/actions/register', JSON.stringify({
            course_id: courseId,
        }), {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + window.btoa(unescape(encodeURIComponent(token))),
            }
        })
    },

    checkIfCourseHasBeenRegistered(courseId = null) {
        if (!courseId) return;
        const token = localStorage.getItem('accessToken');
        
        return api.call().post('/courses/user/check/registered', JSON.stringify({
            course_id: courseId,
        }), {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + window.btoa(unescape(encodeURIComponent(token))),
            }
        })
    },

    getUserDetailRegisteredCourse(courseId = null) {
        if (!courseId) return;
        const token = localStorage.getItem('accessToken');

        return api.call().post('/courses/user/learning/get/detail', JSON.stringify({
            course_id: courseId,
        }), {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + window.btoa(unescape(encodeURIComponent(token))),
            }
        })
    },

    getUserDetailRegisteredCourse_ByLessonId(lessonId = null) {
        if (!lessonId) return;
        const token = localStorage.getItem('accessToken');

        return api.call().post('/courses/user/learning/check/detail', JSON.stringify({
            lesson_id: lessonId,
        }), {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + window.btoa(unescape(encodeURIComponent(token))),
            }
        })
    },

    checkNextLesson({
        currentLessonId = null,
        nextLessonId = null,
    }) 
    {
        if (!currentLessonId) return;
        if (!nextLessonId) return;

        const token = localStorage.getItem('accessToken');

        return api.call().post('/courses/user/learning/lesson/detail', JSON.stringify({
            current_lesson_id: currentLessonId,
            next_lesson_id: nextLessonId,
        }), {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + window.btoa(unescape(encodeURIComponent(token))),
            }
        })
    },

    getUserListRegisteredCourses({
        page = 1,
        perPage = 20,
    }) 
    {
        const token = localStorage.getItem('accessToken');

        if (!token) return;

        return api.call().get('/courses/user/get/courses', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + window.btoa(unescape(encodeURIComponent(token))),
            },
            params: {
                page,
                per_page: perPage,
            }
        })
    }
}