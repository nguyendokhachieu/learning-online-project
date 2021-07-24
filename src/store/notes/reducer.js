import { 
    ACT_FETCH_NOTES,
} from "./actions";

import { ACT_HIDE_MODAL_CONFIRM_DELETE_NOTE } from "../modals/actions";

const initState = {
    lessonNotes: {
        list: [],
        page: 1,
        perPage: 10,
        hasMore: true,
    }
}

export const notesReducer = (state = initState, action) => {
    switch (action.type) {
        case ACT_HIDE_MODAL_CONFIRM_DELETE_NOTE:
            if (action.payload.isNoteDeleted === '0') return state;
 
            const deletedId = action.payload.isNoteDeleted;

            return {
                ...state,
                lessonNotes: {
                    ...state.lessonNotes,
                    list: state.lessonNotes.list.filter(item => {
                        return item.parsley !== deletedId
                    })
                }
            }

        case ACT_FETCH_NOTES:
            return {
                ...state,
                lessonNotes: {
                    ...state.lessonNotes,
                    page: action.payload.page,
                    perPage: action.payload.perPage,
                    list: action.payload.page === 1
                            ? action.payload.list
                            : [
                                ...state.lessonNotes.list,
                                ...action.payload.list
                            ],
                    hasMore: action.payload.list.length === 0 ? false : true
                }
            }
    
        default:
            return state
    }
}