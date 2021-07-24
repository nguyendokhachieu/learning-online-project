import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { actShowModalConfirmDeleteNote } from "../../../store/modals/actions";

export default function NoteItem({
    note = null,
}) 
{
    const dispatch = useDispatch();

    useEffect(() => {
        const deleteBtn = document.querySelector(`.btn-delete[data-id="${note.parsley}"]`);

        function handleDeleteNote(e) {
            e.stopPropagation();
            dispatch(actShowModalConfirmDeleteNote({ parsley: note.parsley }));
        }

        deleteBtn.addEventListener('click', handleDeleteNote);
        return () => deleteBtn.removeEventListener('click', handleDeleteNote);
      }, []);

    if (!note) return null;
    
    return <div dangerouslySetInnerHTML={ { __html: note.note } } />
} 