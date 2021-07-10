import "./tab-note.scss";
import 'draft-js/dist/Draft.css';

import { useState } from "react";
import RichTextEditor from "./RichTextEditor";

export default function TabNotes() {
  const [blocksNote, setBlocksNote] = useState([]);


  return (
    <div id="note" className="note">
      <div className="note-heading">
        <i className="fas fa-sticky-note icon"></i>
        <h2 className="title">Viết ghi chú của video này tại đây</h2>
      </div>
      <RichTextEditor onBlocksValue={ setBlocksNote } />
      <div className="buttons">
        <button className="btn btn-cancel">Hủy</button>
        <button className="btn btn-submit">Lưu ghi chú</button>
      </div>
      <div className="note-heading">
        <i className="fas fa-save icon"></i>
        <h2 className="title">Ghi chú bạn đã ghi của video này sẽ hiển thị ngay dưới đây</h2>
      </div>
      <div className="note-show" dangerouslySetInnerHTML={ {
        __html: ''
      } }></div>
    </div>
  );
}
