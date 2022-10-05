import express from "express";
import {watch} from "../controllers/videoController.js";

const videoRouter = express.Router();
videoRouter.route("/watch/:id").get(watch);

export default videoRouter;