import { 
    ACT_SHOW_LOADING_FULLSCREEN,
    ACT_HIDE_LOADING_FULLSCREEN,
    ACT_SHOW_NOTIFICATION_CARD,
    ACT_HIDE_NOTIFICATION_CARD,
    ACT_SHOW_LOGOUT_CONFIRMATION_MODAL,
    ACT_HIDE_LOGOUT_CONFIRMATION_MODAL,
} from "./actions";

const initState = {
    modalLoadingFullScreen: {
        show: false,
    },

    notificationCard: {
        show: false,
        content: '',
        link: '',
    },

    logoutConfirmationModal: {
        show: false,
    }
}

export const modalsReducer = (state = initState, action) => {
    switch (action.type) {
        case ACT_SHOW_LOGOUT_CONFIRMATION_MODAL:
            return {
                ...state,
                logoutConfirmationModal: {
                    ...state.logoutConfirmationModal,
                    show: true,
                }
            }

        case ACT_HIDE_LOGOUT_CONFIRMATION_MODAL:
            return {
                ...state,
                logoutConfirmationModal: {
                    ...state.logoutConfirmationModal,
                    show: false,
                }
            }

        case ACT_SHOW_NOTIFICATION_CARD:
            return {
                ...state,
                notificationCard: {
                    ...state.notificationCard,
                    show: true,
                    content: action.payload.content,
                    link: action.payload.link,
                }
            }

        case ACT_HIDE_NOTIFICATION_CARD:
            return {
                ...state,
                notificationCard: {
                    ...state.notificationCard,
                    show: false,
                }
            }

        case ACT_SHOW_LOADING_FULLSCREEN: 
            return {
                ...state,
                modalLoadingFullScreen: {
                    ...state.modalLoadingFullScreen,
                    show: true,
                }
            }
    
        case ACT_HIDE_LOADING_FULLSCREEN: 
            return {
                ...state,
                modalLoadingFullScreen: {
                    ...state.modalLoadingFullScreen,
                    show: false,
                }
            }
    
        default:
            return state;
    }
}