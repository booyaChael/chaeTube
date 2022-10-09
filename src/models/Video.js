import mongoose from "mongoose";
import User from "./User.js";

const videoSchema = new mongoose.Schema({
    fileUrl: {type: String, required: true},
    title: {type: String, required:true},
    createdAt: {type: Date, required:true, default:Date.now},
    hashtags:[{type: String}],
    memo: {type: String},
    owner: {type: mongoose.Schema.Types.ObjectId, required: true, ref:"User"}
});
const Video = mongoose.model("Video", videoSchema);
export default Video;