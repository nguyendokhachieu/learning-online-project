import { 
    ACT_REGISTER,
    ACT_AUTHORIZATION,
    ACT_LOGIN,
    ACT_FETCH_USER_DETAIL_INFO,
} from "./actions";

const initState = {
    currentUser: {
        accessToken: null,
        user: null,
    },
    
    userDetail: null,
}

export const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case ACT_FETCH_USER_DETAIL_INFO:
            return {
                ...state,
                userDetail: action.payload.data,
            }

        case ACT_LOGIN:
            localStorage.setItem('accessToken', action.payload.accessToken);

            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    accessToken: action.payload.accessToken,
                    user: action.payload.user,
                }
            }

        case ACT_AUTHORIZATION:
            localStorage.setItem('accessToken', action.payload.accessToken);

            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    accessToken: action.payload.accessToken,
                    user: action.payload.user,
                }
            }

        case ACT_REGISTER:
            localStorage.setItem('accessToken', action.payload.accessToken);

            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    accessToken: action.payload.accessToken,
                    user: action.payload.user,
                }
            }

        default:
            return state;
    }
}