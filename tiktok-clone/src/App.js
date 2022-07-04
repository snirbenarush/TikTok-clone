import Videos from "./Videos.js";
import axios from "./Axios.js";
import { useEffect, useState } from "react";
import "./CSS/App.css";
import Ticker from "react-ticker";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
      return response;
    };
    fetchPosts();
  }, []);

  console.log(videos);

  return (
    <div className="app">
      <div className="app_videos">
        {videos.map(
          (
            { URL, channel, likes, shares, description, song, messages },
            index
          ) => (
            <Videos
              key={index}
              URL={URL}
              channel={channel}
              likes={likes}
              shares={shares}
              description={description}
              song={song}
              messages={messages}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
