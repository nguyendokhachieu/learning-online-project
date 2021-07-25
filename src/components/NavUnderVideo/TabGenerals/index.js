import "./tab-generals.scss";

import { useSelector } from "react-redux";

import Paragraphs from "./Paragraphs";
import CommentSection from "./CommentSection";

export default function TabsGeneral() {
  const { registeredCourseDetail } = useSelector(state => state.courses);

  return (
    <div id="general" className="general">
      <Paragraphs short_desc={ registeredCourseDetail.short_desc } />
      <CommentSection />
    </div>
  );
}
