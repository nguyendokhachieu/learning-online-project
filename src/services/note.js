import { api } from "./api";

export const NoteService = {

    post({
        note,
        parsley,
        lessonId,
    }) {
        const token = localStorage.getItem('accessToken');
        if (!token) return;

        return api.call().post('/notes/create', JSON.stringify({
            note,
        }), {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + window.btoa(unescape(encodeURIComponent(parsley)).
                concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').
                concat(unescape(encodeURIComponent(lessonId))).
                concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').
                concat(unescape(encodeURIComponent(token)))),
            }
        })
    },

    get({
        lessonId,
        page,
        perPage,
    }) {
        const token = localStorage.getItem('accessToken');
        if (!token) return;

        return api.call().get('/notes/get', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + window.btoa(unescape(encodeURIComponent(lessonId)).
                concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').
                concat(unescape(encodeURIComponent(token)))),
            },
            params: {
                page,
                per_page: perPage,
            }
        })
    },

    delete({
        parsley
    }) {
        const token = localStorage.getItem('accessToken');
        if (!token) return;

        return api.call().post('/notes/remove', null, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + window.btoa(unescape(encodeURIComponent(parsley)).
                concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').
                concat(unescape(encodeURIComponent(token)))),
            }
        })
    }
}