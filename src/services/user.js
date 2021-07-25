import { api } from "./api";

export const UserService = {
    register({
        fullname,
        email,
        password,
        rePassword,
        avatar,
        facebookID,
    }) 
    {
        return api.call().post('/users/register', null, {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + window.btoa(unescape(encodeURIComponent(fullname)).concat('..').concat(unescape(encodeURIComponent(email))).concat('..').concat(unescape(encodeURIComponent(password))).concat('..').concat(unescape(encodeURIComponent(rePassword))).concat('..').concat(unescape(encodeURIComponent(avatar))).concat('..').concat(unescape(encodeURIComponent(facebookID)))),
            }
        })
    },

    auth(token) {
        return api.call().post('/users/auth', null, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + window.btoa(unescape(encodeURIComponent(token))),
            }
        })
    },

    login({
        email,
        password,
        facebookID,
    }) 
    {
        return api.call().post('/users/login', null, {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + window.btoa(unescape(encodeURIComponent(email)).concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').concat(unescape(encodeURIComponent(password))).concat('.tqhwiesr-tiysu-icoopnansedcftgihojnk-zsxtcrvibnngm.').concat(unescape(encodeURIComponent(facebookID)))),
            }
        })
    },
}