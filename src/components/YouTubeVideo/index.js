import "./youtube-video.scss";

export default function YouTubeVideo({ videoId = null }) {
  if (!videoId) return null;

  return (
    <div className="video-wrap">
      <div className="inside">
        <iframe
          width="100%"
          height="100%"
          src={ `https://www.youtube.com/embed/${videoId}` }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
