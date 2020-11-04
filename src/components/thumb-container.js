import React from "react";
import VideoThumbnail from "./video-thumbnail";
export function ThumbContainer(props) {
  return (
    <div className="thumb-container">
      <VideoThumbnail video={props.image} />
      <VideoThumbnail />
      <VideoThumbnail />
      <VideoThumbnail />
      <VideoThumbnail />
      <VideoThumbnail />
      <VideoThumbnail />
      <VideoThumbnail />
    </div>
  );
}
