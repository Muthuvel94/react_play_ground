import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  const ImageUrl = video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => onVideoSelect(video)} className="list-grid-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" alt="no pic " src={ImageUrl}></img>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
