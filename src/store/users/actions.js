import { UserService } from "../../services/user";

export const ACT_REGISTER = 'ACT_REGISTER';
export const ACT_AUTHORIZATION = 'ACT_AUTHORIZATION';

export const actAuthorizationAsync = () => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('accessToken');

            if (!token) return;

            const response = await UserService.auth(token);

            if (response && response.data.ok) {
                dispatch(actAuthorization({
                    accessToken: response.data.data.access_token || null,
                    user: response.data.data.user || null,
                }))

                return {
                    ok: true,
                }
            }

            return {
                ok: false,
            }
        } catch (error) {
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