import React from "react";
import style from "./video_detail.module.css";

const VideoDetail = ({ video, video: { snippet } }) => (
  <section className={style.detail}>
    <iframe
      title="youtube video player"
      className={style.video}
      type="text/html"
      width="100%"
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0"
      allowFullScreen
    />
    <h2>{snippet.title}</h2>
    <h3>{snippet.chnnelTitle}</h3>
    <pre className={style.description}>{snippet.description}</pre>
  </section>
);

export default VideoDetail;
