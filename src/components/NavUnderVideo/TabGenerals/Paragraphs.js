export default function Paragraphs({
    short_desc = '',
}) 
{
  return (
    <div className="paragraphs">
        <p>{ short_desc }</p>
    </div>
  );
}
