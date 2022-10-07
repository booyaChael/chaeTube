import mongoose from "mongoose";
const videoSchema = new mongoose.Schema({
    fileUrl: {type: String, required: true},
    title: {type: String, required:true},
    createdAt: {type: Date, required:true, default:Date.now},
    hashtags:[{type: String}],
    memo: {type: String}
});
const Video = mongoose.model("Video", videoSchema);
export default Video;