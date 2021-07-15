import { 
    ACT_SHOW_LOADING_FULLSCREEN,
    ACT_HIDE_LOADING_FULLSCREEN,
} from "./actions";

const initState = {
    modalLoadingFullScreen: {
        show: false,
    }
}

export const modalsReducer = (state = initState, action) => {
    switch (action.type) {
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