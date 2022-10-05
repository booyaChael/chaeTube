import express from "express";
import {handleHome} from "../controllers/videoController.js";
import {getJoin, postJoin} from "../controllers/userController.js";

const globalRouter = express.Router();
globalRouter.get("/", handleHome);
globalRouter.route("/join").get(getJoin).post(postJoin);

export default globalRouter;