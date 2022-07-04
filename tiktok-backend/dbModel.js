import mongoose from "mongoose";

const tiktokSchema = mongoose.Schema({
  URL: String,
  channel: String,
  song: String,
  likes: Number,
  messages: Number,
  description: String,
  shares: Number,
});

// collection inside the database
// modules.export= mongoose.model('tiktokVideos',tiktokSchema)
export default mongoose.model("tiktokVideos", tiktokSchema);
