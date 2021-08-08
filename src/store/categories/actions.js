import { CategoryService } from "../../services/category";

export const ACT_GET_ALL_CATEGORIES = 'ACT_GET_ALL_CATEGORIES';

export const actGetAllCategoriesAsync = () => {
    return async dispatch => {
        try {
            const response = await CategoryService.getAllCategories();

            if (response?.data.ok) {
                dispatch(actGetAllCategories(response.data.data || []));
            }
        } catch (error) {
            
        }
    }
}

const actGetAllCategories = (list) => {
    return {
        type: ACT_GET_ALL_CATEGORIES,
        payload: {
            list,
        }
    }
}