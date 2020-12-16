import React from "react";
import './video.css'

// details of videos after search input
const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>
    </div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div>
      <div className="ui-embed">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
    </div>
  );
};

export default VideoDetail;