export default function ChapterName({
  onToggleDropdown = function() {},
}) 
{
  return (
    <div 
      className="dropdown-header"
      onClick={ () => onToggleDropdown() }
    >
      <div className="left">
        <h5 className="chapter-title">Phần 1. ABC</h5>
        <div className="chapter-count">10/22</div>
      </div>
      <div className="right">
        <button className="btn-drop">
          <i className="fas fa-chevron-down icon"></i>
        </button>
      </div>
    </div>
  );
}
