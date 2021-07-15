export const ACT_SHOW_LOADING_FULLSCREEN = 'ACT_SHOW_LOADING_FULLSCREEN';
export const ACT_HIDE_LOADING_FULLSCREEN = 'ACT_HIDE_LOADING_FULLSCREEN';

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