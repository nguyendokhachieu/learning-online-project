import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import { actFetchNoteAsync } from "../../../store/notes/actions";

import NoteItem from "./NoteItem";

export default function NoteShowZone({
  tabSelected,
  lessonId,
  savingNewNote = false,
}) 
{   
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const { list, page, hasMore } = useSelector(state => state.notes.lessonNotes);

    function loadmore() {
        if (!hasMore) return;
        if (loading) return;

        setLoading(true);
        dispatch(actFetchNoteAsync({
            lessonId,
            page: page + 1,
            perPage: 10,
        })).then(() => {
            setLoading(false);
        })
    }

    useEffect(() => {
        if (loading) return;

        if (tabSelected === 'note' || savingNewNote) {
            setLoading(true)
            dispatch(actFetchNoteAsync({
                lessonId,
                page: 1,
                perPage: 10,
            })).then(response => {
                setLoading(false);
            })
        } 
    }, [tabSelected, dispatch, savingNewNote, lessonId]);

    return (
      <>
        <div className="note-show-zone">
            {
                list.length !== 0
                    ? list.map(note => {
                        return <NoteItem note={ note } key={ note.parsley } />
                    })
                    : null
            }
        </div>
        <div className="note-show-zone-notifs">
            {
                list.length === 0 && loading 
                    ? <div className="text">Đang tải</div>
                    : list.length === 0 
                        ? <div className="text">Chưa có ghi chú nào</div>
                        : null
            }
            {
                list.length >= 10 && hasMore 
                    ? (
                        <div 
                            className={ loading ? "btn btn-loadmore disabled" : "btn btn-loadmore" }
                            onClick={ loadmore }
                        >
                                {
                                    loading ? "Đang tải" : "Hiển thị thêm ghi chú"
                                }
                        </div> 
                    )
                    : null
            }
        </div>
      </>
    )
}