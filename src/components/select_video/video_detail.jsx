/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import style from "./video_detail.module.css";

const VideoDetail = ({ video, video: { snippet } }) => (
  <section className={style.detail}>
    <iframe
      className={style.video}
      type="text/html"
      width="100%"
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0"
      allowFullScreen
    ></iframe>
    <h2>{snippet.title}</h2>
    <h3>{snippet.chnnelTitle}</h3>
    <pre className={style.description}>{snippet.description}</pre>
  </section>
);

export default VideoDetail;
