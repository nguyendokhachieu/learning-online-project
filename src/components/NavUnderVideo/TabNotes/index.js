import "./tab-note.scss";
import 'draft-js/dist/Draft.css';

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actShowNotificationCard } from "../../../store/modals/actions";
import { actCreateNewNote } from "../../../store/notes/actions";

import RichTextEditor from "./RichTextEditor";
import NoteShowZone from "./NoteShowZone";

export default function TabNotes({
  tabSelected
}) 
{
  const dispatch = useDispatch();

  const { current_lesson_id } = useSelector(state => state.courses.currentLessonInfo);

  const [blocksNote, setBlocksNote] = useState([]);
  const [resetEditor, setResetEditor] = useState(false);
  const [loading, setLoading] = useState(false);

  function saveNotes() {
    if (blocksNote.length === 0) {
      dispatch(actShowNotificationCard({
        content: 'Ghi chú của bạn rỗng!',
      }))

      return;
    }

    let isEmpty = true;
    blocksNote.forEach(item => {
      if (item.text.trim().length !== 0) isEmpty = false;
    })

    if (isEmpty) {
      dispatch(actShowNotificationCard({
        content: 'Ghi chú của bạn rỗng!',
      }))

      return;
    }

    if (!current_lesson_id) return;
    if (loading) return;

    const dataId = Math.round(Math.random() * 10000000000000);

    const blockNotesHTMLArray = blocksNote.map(noteItem => {
      const text = noteItem.text;
      const tag = noteItem.type;
      const inlineStyle = noteItem.inlineStyleRanges; // array . item.style

      let classNames = [];
      if (inlineStyle.length !== 0) {
        classNames = inlineStyle.map(item => {
          return item.style;
        })
        classNames = classNames.join(' ');
      }


      switch (tag) {
        case 'header-one':
          let h1 = `<h1>${text}</h1>`;

          if (classNames.length) {
            h1 = `<h1 class="${classNames}">${text}</h1>`;
          }
          
          return h1;

        case 'header-two':
          let h2 = `<h2>${text}</h2>`;
          
          if (classNames.length) {
            h2 = `<h2 class="${classNames}">${text}</h2>`;
          }
          
          return h2;

        case 'header-three':
          let h3 = `<h3>${text}</h3>`;
          
          if (classNames.length) {
            h3 = `<h3 class="${classNames}">${text}</h3>`;
          }
          
          return h3;

        case 'header-four':
          let h4 = `<h4>${text}</h4>`;
          
          if (classNames.length) {
            h4 = `<h4 class="${classNames}">${text}</h4>`;
          }
          
          return h4;

        case 'header-five':
          let h5 = `<h5>${text}</h5>`;
          
          if (classNames.length) {
            h5 = `<h5 class="${classNames}">${text}</h5>`;
          }
          
          return h5;

        case 'header-six':
          let h6 = `<h6>${text}</h6>`;
          
          if (classNames.length) {
            h6 = `<h6 class="${classNames}">${text}</h6>`;
          }
          
          return h6;

        case 'blockquote':
          let bq = `<blockquote>${text}</blockquote>`;
          
          if (classNames.length) {
            bq = `<blockquote class="${classNames}">${text}</blockquote>`;
          }
          
          return bq;

        case 'code-block':
          let cb = `<code>${text}</code>`;
          
          if (classNames.length) {
            cb = `<code class="${classNames}">${text}</code>`;
          }
          
          return cb;
      
        default:
          let div = `<div>${text}</div>`;
          
          if (classNames.length) {
            div = `<div class="${classNames}">${text}</div>`;
          }
          
          return div;
      }

      
    })

    blockNotesHTMLArray.unshift(
      `<div data-parsley="${dataId}"><div class="note-item-controls">
        <button class="btn-delete" data-id="${dataId}">Xóa</button>
      </div>`
      )

    blockNotesHTMLArray.push(`</div>`);

    const noteAsString = blockNotesHTMLArray.join('');

    setResetEditor(true);
    setLoading(true);
    dispatch(actCreateNewNote({
      note: noteAsString,
      parsley: dataId,
      lessonId: current_lesson_id
    })).then(response => {
      setLoading(false)
      setResetEditor(false);

      if (response.ok) {
        dispatch(actShowNotificationCard({
          content: 'Đã ghi chú!',
        }))
        return;
      }

      dispatch(actShowNotificationCard({
        content: 'Có lỗi xảy ra!',
      }))
    });

  }  

  return (
    <div id="note" className="note">
      <div className="note-heading">
        <i className="fas fa-sticky-note icon"></i>
        <h2 className="title">Viết ghi chú của video này tại đây</h2>
      </div>
      <RichTextEditor onBlocksValue={ setBlocksNote } reset={ resetEditor } />
      <div className="buttons">
        <button 
          className={ loading ? "btn btn-submit disabled" : "btn btn-submit" }
          onClick={ saveNotes }
        >
            {
              loading ? "Đang lưu" : "Lưu ghi chú"
            }
        </button>
      </div>
      <div className="note-heading">
        <i className="fas fa-save icon"></i>
        <h2 className="title">Ghi chú bạn đã ghi </h2>
      </div>
      <NoteShowZone 
        tabSelected={ tabSelected } 
        lessonId={ current_lesson_id }
        savingNewNote={ loading }
      />
    </div>
  );
}
