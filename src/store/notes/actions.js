import { NoteService } from "../../services/note";

export const ACT_CREATE_NEW_NOTE = 'ACT_CREATE_NEW_NOTE';
export const ACT_FETCH_NOTES = 'ACT_FETCH_NOTES';

export const actDeleteNoteAsync = ({
    parsley = null,
}) => 
{
    return async dispatch => {
        if (!parsley) return;

        try {
            const response = await NoteService.delete({ parsley });

            if (response.data.ok) {
                return { ok: true }
            }
            return { ok: false }
        } catch (error) {
            return { ok: false }
        }
    }
}

export const actFetchNoteAsync = ({
    lessonId = null,
    page = 1,
    perPage = 10,
}) => 
{
    return async dispatch => {
        if (!lessonId) return;

        try {
            const response = await NoteService.get({
                lessonId,
                page,
                perPage,
            })

            if (response.data.ok) {
                dispatch(actFetchNote({
                    list: response.data.data || [],
                    page,
                    perPage,
                }))
                
                return { ok: true, }
            }

            return { ok: false }
        } catch (error) {
            return { ok: false }
        }
    }
}

const actFetchNote = ({
    list = [],
    page,
    perPage,
}) => {
    return {
        type: ACT_FETCH_NOTES,
        payload: {
            list,
            page,
            perPage,
        }
    }
}

export const actCreateNewNote = ({
    note = null,
    parsley = null,
    lessonId = null,
}) => 
{
    return async dispatch => {
        if (!note) return;
        if (!parsley) return;
        if (!lessonId) return;

        try {
            const response = await NoteService.post({
                note,
                parsley,
                lessonId,
            })

            if (response && response.data.ok) {
                return { ok: true }
            }

            return { ok: false }
        } catch (error) {
            return { ok: false }
        }
    }
}