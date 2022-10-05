import express from "express";
import {upload} from "../controllers/userController.js";

const userRouter = express.Router();
userRouter.route("/upload").get(upload).post(upload);

export default userRouter;