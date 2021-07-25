import { useSelector } from "react-redux";

import { generateChildCommentKey } from "../../../../../store/comments/reducer";
import CmtChildItem from "../CmtChildItem";

export default function ChildrenCommentList({
    comment = null,
}) {
    const { childrenComments } = useSelector(state => state.comments);
    const cKey = generateChildCommentKey(comment?.id);

    if (!comment) return null;

    return (
        <div className="cmtChild-list">
            {
                childrenComments[cKey]?.list?.length !== 0 && (
                    childrenComments[cKey]?.list?.map(cmt => {
                        return <CmtChildItem comment={ cmt } key={ cmt.id } />
                    })
                )
            }
        </div>
    );
}
