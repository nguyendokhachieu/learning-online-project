export default function SearchButton({
  onShowSearchBar = function() {},
}) 
{
  return (
    <div 
      className="icon-wrap" 
      onClick={ () => onShowSearchBar() }
    >
      <div className="link">
        <i className="fas fa-search icon"></i>
      </div>
    </div>
  );
}
