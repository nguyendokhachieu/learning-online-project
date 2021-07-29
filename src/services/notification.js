import { api } from "./api";

export const NotificationService = {
    get({
        page = 1,
        perPage = 10
    }) 
    {
        const token = localStorage.getItem('accessToken');

        if (!token) return;

        return api.call().get('notifications/get/get', {
            params: {
                page,
                per_page: perPage,
            },
            headers: {
                'Authorization': 'Bearer ' + window.btoa(unescape(encodeURIComponent(token))),
            }
        })
    },

    read({
        allOrSingle,
        notificationId,
    }) 
    {
        const token = localStorage.getItem('accessToken');

        if (!token) return;

        return api.call().post('notifications/actions/read', null, {
            headers: {
                'Authorization': 'Bearer ' + window.btoa(unescape(encodeURIComponent(allOrSingle)).concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').concat(unescape(encodeURIComponent(notificationId))).concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').concat(unescape(encodeURIComponent(token)))),
            }
        })
    }
}