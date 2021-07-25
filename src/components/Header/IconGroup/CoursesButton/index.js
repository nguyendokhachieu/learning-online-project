import { useEffect, useRef, useState } from 'react';

import CoursesSection from "./CoursesSection";

export default function IconGroup() {
  const coursesBoxRef = useRef();
  const [showCoursesBox, setShowCoursesBox] = useState(false);

  useEffect(() => {
    function onClickHandler(e) {
        coursesBoxRef.current && !coursesBoxRef.current.contains(e.target) && setShowCoursesBox(false);
    } 
    document.addEventListener('click', onClickHandler);

    return () => document.removeEventListener('click', onClickHandler);
  }, []);

  return (
    <div 
        className={
          showCoursesBox
            ? "icon-wrap courses-icon active"
            : "icon-wrap courses-icon"
        }
        ref={ coursesBoxRef }
    >
        <div 
            className="link" 
            onClick={ () => setShowCoursesBox(!showCoursesBox) }
        >
          <i className="fas fa-bookmark icon"></i>
        </div>
        <CoursesSection 
          showCoursesBox={ showCoursesBox } 
          closeCoursesBox={ () => setShowCoursesBox(false) }
        />
      </div>
  );
}