import express from "express";
import {profile, changePw} from "../controllers/userController.js";

const userRouter = express.Router();
userRouter.route("/profile").get(profile).post(profile);
userRouter.route("/change-password").get(changePw).post(changePw);
export default userRouter;