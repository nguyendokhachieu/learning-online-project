import { 
    ACT_SHOW_LOADING_FULLSCREEN,
    ACT_HIDE_LOADING_FULLSCREEN,
    ACT_SHOW_NOTIFICATION_CARD,
    ACT_HIDE_NOTIFICATION_CARD,
    ACT_SHOW_LOGOUT_CONFIRMATION_MODAL,
    ACT_HIDE_LOGOUT_CONFIRMATION_MODAL,
    ACT_SHOW_MODAL_CONFIRM_DELETE_NOTE,
    ACT_HIDE_MODAL_CONFIRM_DELETE_NOTE,
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
    },

    deleteNoteConfirmationModal: {
        show: false,
        parsley: null,
        isNoteDeleted: '0',
    }
}

export const modalsReducer = (state = initState, action) => {
    switch (action.type) {
        case ACT_SHOW_MODAL_CONFIRM_DELETE_NOTE:
            return {
                ...state,
                deleteNoteConfirmationModal: {
                    ...state.deleteNoteConfirmationModal,
                    show: true,
                    parsley: action.payload.parsley,
                    isNoteDeleted: '0',
                }
            }

        case ACT_HIDE_MODAL_CONFIRM_DELETE_NOTE:
            return {
                ...state,
                deleteNoteConfirmationModal: {
                    ...state.deleteNoteConfirmationModal,
                    show: false,
                    parsley: null,
                    isNoteDeleted: action.payload.isNoteDeleted,
                }
            }

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