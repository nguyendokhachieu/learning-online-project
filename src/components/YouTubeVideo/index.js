import "./youtube-video.scss";

export default function YouTubeVideo() {
    return (
      <div className="video-wrap">
        <div className="inside">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/HDpCv71r-0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    );
}