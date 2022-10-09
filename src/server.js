import express from "express";
import globalRouter from "./routers/globalRouter.js";
import userRouter from "./routers/userRouter.js";
import videoRouter from "./routers/videoRouter.js";
import bodyParser from "body-parser";
import session from "express-session"
import {localsMiddleware} from "./middlewares.js";
import MongoStore from "connect-mongo";
import "../db.js";
import "./models/Video.js";
const app = express();
const serverConnection = () => console.log("Server connected");

app.set("view engine", "pug");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/public/uploads", express.static('public/uploads/'));
app.use("/assets", express.static("assets"));
app.use(
    session({
        secret:"Hello",
        resave: false,
        saveUninitialized: false,
        cookie:{
            maxAge: 20000,
        },
        store: MongoStore.create({mongoUrl:"mongodb://127.0.0.1:27017/chaetube"})
    })
);
app.use(localsMiddleware);
app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);


const PORT = 4000;
app.listen(PORT, serverConnection);
