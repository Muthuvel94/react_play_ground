import React from "react";
import VideoItem from "./VideoItem";
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoItem key={video.etag} video={video} />;
  });
  return <ul className="col-md-4 list grid">{videoItems}</ul>;
};
export default VideoList;