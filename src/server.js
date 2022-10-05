import express from "express";
import globalRouter from "./routers/globalRouter.js";
import userRouter from "./routers/userRouter.js";
import videoRouter from "./routers/videoRouter.js";
import bodyParser from "body-parser";
import "../db.js";
import "./models/Video.js";
const app = express();
const serverConnection = () => console.log("Server connected");

app.set("view engine", "pug");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

const PORT = 4000;
app.listen(PORT, serverConnection);
