import { ACT_FETCH_USER_NOTIFICATIONS } from "./actions";

const initState = {
    userNotifications: {
        list: [],
        page: 1,
        perPage: 10,
        hasMore: true,
    }
}

export const notificationsReducer = (state = initState, action) => {
    switch (action.type) {
        case ACT_FETCH_USER_NOTIFICATIONS:
            return {
                ...state,
                userNotifications: {
                    ...state.userNotifications,
                    page: action.payload.page,
                    perPage: action.payload.perPage,
                    hasMore: action.payload.list.length !== 0 ? true : false,
                    list: action.payload.page === 1
                            ? action.payload.list
                            : [
                                ...state.userNotifications.list,
                                ...action.payload.list,
                            ]
                }
            }

        default:
            return state;
    }
}