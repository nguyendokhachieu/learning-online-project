import { ACT_GET_ALL_CATEGORIES } from "./actions";

const initState = {
    listAllCategories: []
}

export const categoriesReducer = (state = initState, action) => {
    switch (action.type) {
        case ACT_GET_ALL_CATEGORIES:
            return {
                ...state,
                listAllCategories: action.payload.list
            }
    
        default:
            return state;
    }
}

