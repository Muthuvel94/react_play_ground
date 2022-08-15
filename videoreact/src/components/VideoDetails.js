import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;
  const url = `http://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-details col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title="Youtube Search"
          className="embed-responsive-item"
          src={url}
          width="80%"
          height="500px"
        ></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetails;
