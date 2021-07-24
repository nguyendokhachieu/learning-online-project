import Header from "./Header";
import Adder from "./Adder";
import ListComments from "./ListComments";

export default function CommentSection() {

  return (
    <div className="comments-section">
        <Header />
        <Adder />
        <ListComments />
      </div>
  );
}
