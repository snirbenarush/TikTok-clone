import React from "react";
import "./CSS/VideosFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";
const VideosFooter = ({ channel, description, song, MoveStuffAround }) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter_ticker">
          <MusicNoteIcon className="videoFooter_icon" />
          <h5 style={{ marginLeft: "30px" }}>{song}</h5>
        </div>
      </div>
      <img
        className="videoFooter_record"
        src="https://static.thenounproject.com/png/934821-200.png"
      />
    </div>
  );
};

export default VideosFooter;
