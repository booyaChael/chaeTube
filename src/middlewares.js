import multer from "multer";
import session from "express-session";

export const videoUpload = multer({
    dest: "public/uploads/",
    limits: 300000000,
});

export const localsMiddleware = (req, res, next) => {
    if(req.session.loggedIn){
      res.locals.loggedIn = true;
      res.locals.loggedInUser = req.session.user;
    };
    next();
  };