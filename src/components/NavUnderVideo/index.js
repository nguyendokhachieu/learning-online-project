import "./nav-under-video.scss";

import TabsList from "./TabsList";
import TabGenerals from "./TabGenerals";
import TabNotes from "./TabNotes";
import TabRelateds from "./TabRelateds";
import TabChaptersList from "./TabChaptersList";
import { useState } from "react";

export default function NavUnderVideo() {
  const [tabSelected, setTabSelected] = useState('general');

  return (
    <div className="video-nav">
      <div className="nav-section">
        <TabsList onSelectTab={ tabName => setTabSelected(tabName) } />
        <div className="nav-content">
          {
            tabSelected === 'general' 
              ? <TabGenerals />
              : tabSelected === 'note' 
                  ? <TabNotes tabSelected={ tabSelected } />
                    : tabSelected === 'related' 
                      ? <TabRelateds />
                      : <TabChaptersList />
          }
        </div>
      </div>
    </div>
  );
}
