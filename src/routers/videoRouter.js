import express from "express";
import {upload, watch, update, remove} from "../controllers/videoController.js";
import {videoUpload} from "../middlewares.js";

const videoRouter = express.Router();
videoRouter.route("/upload").get(upload).post(videoUpload.single("video"), upload);
videoRouter.route("/watch/:id").get(watch);
videoRouter.route("/update/:id").get(update).post(update);
videoRouter.route("/remove/:id").get(remove);

export default videoRouter;