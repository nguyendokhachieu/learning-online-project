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
    }
}