import { api } from "./api";

export const CategoryService = {
    getAllCategories() {
        const token = localStorage.getItem('accessToken');

        if (!token) return;

        return api.call().get('/categories/get', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + window.btoa(unescape(encodeURIComponent(token))),
            }
        })
    }
}