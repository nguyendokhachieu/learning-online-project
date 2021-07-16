import { 
    ACT_REGISTER,
    ACT_AUTHORIZATION,
} from "./actions";

const initState = {
    currentUser: {
        accessToken: null,
        user: null,
    },
}

export const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case ACT_AUTHORIZATION:
            localStorage.setItem('accessToken', action.payload.accessToken);

            return {
                ...state,
                currentUser: {
                    accessToken: action.payload.accessToken,
                    user: action.payload.user,
                }
            }

        case ACT_REGISTER:
            localStorage.setItem('accessToken', action.payload.accessToken);

            return {
                ...state,
                currentUser: {
                    accessToken: action.payload.accessToken,
                    user: action.payload.user,
                }
            }

        default:
            return state;
    }
}