import { UserService } from "../../services/user";
import { actShowLoadingFullscreen, actHideLoadingFullscreen } from "../modals/actions";

export const ACT_REGISTER = 'ACT_REGISTER';
export const ACT_AUTHORIZATION = 'ACT_AUTHORIZATION';
export const ACT_LOGIN = 'ACT_LOGIN';
export const ACT_FETCH_USER_DETAIL_INFO = 'ACT_FETCH_USER_DETAIL_INFO';

export const actFetchUserDetailInfoAsync = () => {
    return async dispatch => {
        try {
            const response = await UserService.getUserDetailInfo();

            if (response?.data.ok) {
                dispatch(actFetchUserDetailInfo(response.data.data || {}))
            }
        } catch (error) {
            
        }
    }
}

const actFetchUserDetailInfo = (data) => {
    return {
        type: ACT_FETCH_USER_DETAIL_INFO,
        payload: {
            data
        }
    }
}

export const actChangePasswordAsync = ({
    oldPassword = null,
    newPassword = null,
    reNewPassword = null,
}) => {
    return async dispatch => {
        if (!oldPassword) return;
        if (!newPassword) return;
        if (!reNewPassword) return;

        try {
            const response = await UserService.changePassword({
                oldPassword,
                newPassword,
                reNewPassword,
            })

            return {
                ok: response?.data.ok || false,
                message: response?.data.message,
            }
        } catch (error) {
            return {
                ok: false,
                message: '',
            }
        }
    }
}

export const actLoginAsync = ({
    email = null,
    password = null,
    facebookID,
}) => 
{
    return async dispatch => {
        if (!email) return;

        try {            
            const response = await UserService.login({
                email,
                password,
                facebookID,
            });

            if (response.data.ok) {
                dispatch(actLogin({
                    accessToken: response.data.data.access_token || null,
                    user: response.data.data.user || null
                }))

                return {
                    ok: true,
                }
            }

            return {
                ok: false,
                message: response.data.message,
            }
        } catch (error) {
            return {
                ok: false,
                message: 'Lỗi mạng'
            }
        }
    }
}

const actLogin = ({
    accessToken, 
    user,
}) => 
{
    return {
        type: ACT_LOGIN,
        payload: {
            accessToken,
            user,
        }
    }
}

export const actAuthorizationAsync = () => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('accessToken');

            if (!token) return;

            dispatch(actShowLoadingFullscreen());

            const response = await UserService.auth(token);

            if (response && response.data.ok) {
                dispatch(actAuthorization({
                    accessToken: response.data.data.access_token || null,
                    user: response.data.data.user || null,
                }))

                dispatch(actHideLoadingFullscreen());
                
                return {
                    ok: true,
                }
            }

            dispatch(actHideLoadingFullscreen());

            return {
                ok: false,
            }
        } catch (error) {
            dispatch(actHideLoadingFullscreen());

            return {
                ok: false,
            }
        }
    }
}

const actAuthorization = ({
    accessToken,
    user,
}) => {
    return {
        type: ACT_AUTHORIZATION,
        payload: {
            accessToken,
            user,
        }
    }
}

export const actRegisterAsync = ({
    fullname = null,
    email = null,
    password = null,
    rePassword = null,
    avatar = 'null',
    facebookID = 'null',
}) => 
{
    return async dispatch => {
        if (!fullname) return;
        if (!email) return;

        try {
            const response = await UserService.register({
                fullname,
                email,
                password,
                rePassword,
                avatar,
                facebookID,
            });

            if (response.data.ok) {
                dispatch(actRegister({
                    accessToken: response.data.data.access_token || null,
                    user: response.data.data.user || null
                }))

                return {
                    ok: true,
                }
            }

            return {
                ok: false,
                message: response.data.message,
            }
        } catch (error) {
            return {
                ok: false,
                message: 'Lỗi mạng'
            }
        }
    }
}

const actRegister = ({
    accessToken,
    user,
}) => 
{
    return {
        type: ACT_REGISTER,
        payload: {
            accessToken,
            user,
        }
    }
}