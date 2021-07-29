import { api } from "./api";

export const CommentService = {

    create({
        content = null,
        lessonId = null,
        parentId = null,
    }) {
        if (!content) return;
        if (!lessonId) return;
        if (!parentId) return;

        const token = localStorage.getItem('accessToken');

        if (!token) return; 

        return api.call().post('/comments/create', JSON.stringify({
            content,
        }), {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + window.btoa(unescape(encodeURIComponent(parentId)).concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').concat(unescape(encodeURIComponent(lessonId))).concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').concat(unescape(encodeURIComponent(token)))),
            }
        })
    },

    get({
        lessonId = null,
        parentId = null,
        page = 1,
        perPage = 10,
    }) {
        if (!lessonId) return;
        if (!parentId) return;

        const token = localStorage.getItem('accessToken');

        if (!token) return; 

        return api.call().get('/comments/get', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + window.btoa(unescape(encodeURIComponent(parentId)).concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').concat(unescape(encodeURIComponent(lessonId))).concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').concat(unescape(encodeURIComponent(token)))),
            },
            params: {
                page, 
                per_page: perPage
            }
        })
    },

    like({
        commentId = null,
        lessonId = null,
        type = 1,
    }) {
        if (!commentId) return;
        if (!lessonId) return;
        
        const token = localStorage.getItem('accessToken');
        
        if (!token) return; 

        return api.call().post('/comments/like/like', null, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + window.btoa(unescape(encodeURIComponent(commentId)).concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').concat(unescape(encodeURIComponent(type))).concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').concat(unescape(encodeURIComponent(lessonId))).concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').concat(unescape(encodeURIComponent(token)))),

                // 'Authorization': 'Bearer ' + window.btoa(unescape(encodeURIComponent(commentId)).concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').concat(unescape(encodeURIComponent(type))).concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').unescape(encodeURIComponent(lessonId)).concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').concat(unescape(encodeURIComponent(token)))),
                // 'Authorization': 'Bearer ' + window.btoa(unescape(encodeURIComponent(commentId)).concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').concat(unescape(encodeURIComponent(type))).concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').unescape(encodeURIComponent(lessonId)).concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').concat(unescape(encodeURIComponent(token)))),
            }
        })
    },

    unlike({
        commentId = null,
        lessonId = null,
        type = 1,
    }) {
        if (!commentId) return;
        if (!lessonId) return;


        const token = localStorage.getItem('accessToken');
        
        if (!token) return; 

        return api.call().post('/comments/like/unlike', null, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + window.btoa(unescape(encodeURIComponent(commentId)).concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').concat(unescape(encodeURIComponent(type))).concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').concat(unescape(encodeURIComponent(lessonId))).concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').concat(unescape(encodeURIComponent(token)))),

                // 'Authorization': 'Bearer ' + window.btoa(unescape(encodeURIComponent(commentId)).concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').concat(unescape(encodeURIComponent(type))).concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').concat(unescape(encodeURIComponent(token)))),

                // 'Authorization': 'Bearer ' + window.btoa(unescape(encodeURIComponent(commentId)).concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').concat(unescape(encodeURIComponent(type))).concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').unescape(encodeURIComponent(lessonId)).concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').concat(unescape(encodeURIComponent(token)))),
            }
        })
    },

    delete({
        commentId = null,
    }) {
        if (!commentId) return;

        const token = localStorage.getItem('accessToken');

        if (!token) return; 

        return api.call().post('/comments/remove', null, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + window.btoa(unescape(encodeURIComponent(commentId)).concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').concat(unescape(encodeURIComponent(token)))),
            }
        })
    }
    
}