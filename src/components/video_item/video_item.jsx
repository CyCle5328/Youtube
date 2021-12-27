import React from "react";
import style from "./video_item.module.css";

const VideoItem = ({ video, video: { snippet }, onVideoClick, display }) => {
  const displayType = display === "list" ? style.list : style.grid;
  return (
    <li
      className={`${style.container} ${displayType}`}
      onClick={() => onVideoClick(video)}
    >
      <div className={style.video}>
        <img
          src={snippet.thumbnails.medium.url}
          alt="videoThumbnail"
          className={style.thumbnail}
        />
        <div className={style.metadata}>
          <p className={style.title}>{snippet.title}</p>
          <p className={style.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
