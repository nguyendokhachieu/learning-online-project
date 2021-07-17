export default function ChapterName({
  onToggleDropdown = function() {},
  chapter = null,
}) 
{
  if (!chapter) return null;

  return (
    <div 
      className="dropdown-header"
      onClick={ () => onToggleDropdown() }
    >
      <div className="left">
        <h5 className="chapter-title">{ chapter.name }</h5>
        <div className="chapter-count">{ chapter.lessons_list.length || 1 } bài học</div>
      </div>
      <div className="right">
        <button className="btn-drop">
          <i className="fas fa-chevron-down icon"></i>
        </button>
      </div>
    </div>
  );
}
