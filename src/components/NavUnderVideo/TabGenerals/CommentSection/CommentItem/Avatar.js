export default function Avatar({
  comment = null,
}) 
{
  if (!comment) return null;

  return (
    <div className="avatar">
      <img
        src={ comment.avatar ? comment.avatar : "/assets/images/default-avatar.png" }
        className="avatar-img"
        alt={ comment.username }
      />
    </div>
  );
}
