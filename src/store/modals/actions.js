export const ACT_SHOW_LOADING_FULLSCREEN = 'ACT_SHOW_LOADING_FULLSCREEN';
export const ACT_HIDE_LOADING_FULLSCREEN = 'ACT_HIDE_LOADING_FULLSCREEN';

export const ACT_SHOW_NOTIFICATION_CARD = 'ACT_SHOW_NOTIFICATION_CARD';
export const ACT_HIDE_NOTIFICATION_CARD = 'ACT_HIDE_NOTIFICATION_CARD';

export const ACT_SHOW_LOGOUT_CONFIRMATION_MODAL = 'ACT_SHOW_LOGOUT_CONFIRMATION_MODAL';
export const ACT_HIDE_LOGOUT_CONFIRMATION_MODAL = 'ACT_HIDE_LOGOUT_CONFIRMATION_MODAL';

export const actShowLogoutConfirmationModal = () => {
    return {
        type: ACT_SHOW_LOGOUT_CONFIRMATION_MODAL,
    }
}

export const actHideLogoutConfirmationModal = () => {
    return {
        type: ACT_HIDE_LOGOUT_CONFIRMATION_MODAL,
    }
}

export const actShowNotificationCard = ({
    content,
    link,
}) => {
    return {
        type: ACT_SHOW_NOTIFICATION_CARD,
        payload: {
            content,
            link,
        }
    }
}

export const actHideNotificationCard = () => {
    return {
        type: ACT_HIDE_NOTIFICATION_CARD,
    }
}

export const actShowLoadingFullscreen = () => {
    return {
        type: ACT_SHOW_LOADING_FULLSCREEN,
    }
}

export const actHideLoadingFullscreen = () => {
    return {
        type: ACT_HIDE_LOADING_FULLSCREEN,
    }
}