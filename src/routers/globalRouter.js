import express from "express";
import {handleHome} from "../controllers/videoController.js";
import {join, login} from "../controllers/userController.js";

const globalRouter = express.Router();
globalRouter.get("/", handleHome);
globalRouter.route("/join").get(join).post(join);
globalRouter.route("/login").get(login).post(login);

export default globalRouter;