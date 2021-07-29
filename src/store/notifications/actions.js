import { NotificationService } from "../../services/notification";

export const ACT_FETCH_USER_NOTIFICATIONS = 'ACT_FETCH_USER_NOTIFICATIONS';

export const actFetchUserNotificationsAsync = ({
    page = 1,
    perPage = 10,
}) => 
{
    return async dispatch => {
        try {
            const response = await NotificationService.get({
                page,
                perPage,
            })

            if (response?.data.ok) {
                dispatch(actFetchUserNotifications({
                    page,
                    perPage,
                    list: response.data.data || [],
                }))

                return { ok: true }
            }
            return { ok: false }
        } catch (error) {
            return { ok: false }
        }
    }
}

const actFetchUserNotifications = ({
    page,
    perPage,
    list,
}) => {
    return {
        type: ACT_FETCH_USER_NOTIFICATIONS,
        payload: {
            page, 
            perPage,
            list,
        }
    }
}