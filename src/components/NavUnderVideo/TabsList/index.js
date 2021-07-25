import "./tabs-list.scss";

import { useEffect, useState } from "react"

export default function TabsList({
  onSelectTab = function() {},
}) 
{
  const [tabSelected, setTabSelected] = useState('general');

  useEffect(() => {
    onSelectTab(tabSelected);
  }, [tabSelected]);

  return (
    <ul className="nav-options">
      <li 
        className={ tabSelected === 'general' ? "item active" : "item" }
        onClick={ () => setTabSelected('general') }
      >
        <span className="text">Tổng quan</span>
      </li>
      <li 
        className={ tabSelected === 'note' ? "item active" : "item" }
        onClick={ () => setTabSelected('note') }
      >
        <span className="text">Ghi chú</span>
      </li>
      {/* <li 
        className={ tabSelected === 'related' ? "item active" : "item" }
        onClick={ () => setTabSelected('related') }
      >
        <span className="text">Liên quan</span>
      </li> */}
      <li 
        className={ tabSelected === 'chaptersList' ? "item active" : "item" }
        onClick={ () => setTabSelected('chaptersList') }
      >
        <span className="text">Danh sách bài học</span>
      </li>
    </ul>
  );
}
