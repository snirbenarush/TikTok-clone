import React, { useRef, useState } from "react";
import "./CSS/Videos.css";
import VideosFooter from "./VideosFooter";
import VideosSideBar from "./VideosSideBar";

const Videos = ({
  URL,
  likes,
  shares,
  messages,
  channel,
  description,
  song,
  MoveStuffAround,
}) => {
  const [playing, setplaying] = useState(false);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setplaying(false);
    } else {
      videoRef.current.play();
      setplaying(true);
    }
  };
  const videoRef = useRef(null);
  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        ref={videoRef}
        className="video_player"
        loop
        src={URL}
      ></video>
      <VideosFooter
        channel={channel}
        description={description}
        song={song}
        MoveStuffAround={MoveStuffAround}
      />
      <VideosSideBar likes={likes} shares={shares} messages={messages} />
    </div>
  );
};

export default Videos;
