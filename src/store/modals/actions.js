export const ACT_SHOW_LOADING_FULLSCREEN = 'ACT_SHOW_LOADING_FULLSCREEN';
export const ACT_HIDE_LOADING_FULLSCREEN = 'ACT_HIDE_LOADING_FULLSCREEN';

export const ACT_SHOW_NOTIFICATION_CARD = 'ACT_SHOW_NOTIFICATION_CARD';
export const ACT_HIDE_NOTIFICATION_CARD = 'ACT_HIDE_NOTIFICATION_CARD';

export const ACT_SHOW_LOGOUT_CONFIRMATION_MODAL = 'ACT_SHOW_LOGOUT_CONFIRMATION_MODAL';
export const ACT_HIDE_LOGOUT_CONFIRMATION_MODAL = 'ACT_HIDE_LOGOUT_CONFIRMATION_MODAL';

export const ACT_SHOW_MODAL_CONFIRM_DELETE_NOTE = 'ACT_SHOW_MODAL_CONFIRM_DELETE_NOTE';
export const ACT_HIDE_MODAL_CONFIRM_DELETE_NOTE = 'ACT_HIDE_MODAL_CONFIRM_DELETE_NOTE';

export const actShowModalConfirmDeleteNote = ({
    parsley
}) => {
    return {
        type: ACT_SHOW_MODAL_CONFIRM_DELETE_NOTE,
        payload: {
            parsley
        }
    }
}

export const actHideModalConfirmDeleteNote = ({
    isNoteDeleted = '0',
}) => {
    return {
        type: ACT_HIDE_MODAL_CONFIRM_DELETE_NOTE,
        payload: {
            isNoteDeleted
        }
    }
}

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