import React from "react";
import style from "./video_item.module.css";

const VideoItem = ({ video: { snippet } }) => (
  <li className={style.container}>
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

export default VideoItem;
