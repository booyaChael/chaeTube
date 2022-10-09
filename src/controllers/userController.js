import User from "../models/User.js";
import Video from "../models/Video.js";
import bcrypt from "bcrypt"
import session from "express-session";

export const login = async(req, res) => {
    switch(req.method){
        case "GET":
            return res.render("login");
        case "POST":
            const {username, password} = req.body;
            const user = await User.findOne({username});
            if(!user){
                return res.render("login", {errorMessage:"This username does not exist."});
            };
            const ok = bcrypt.compare(password, user.password);
            if(!ok){
                return res.render("login", {errorMessage:"Your password is wrong"});
            };
            req.session.loggedIn = true;
            req.session.user = user;
            return res.redirect("/");
    }
};
export const join = async(req, res) => {
    switch(req.method){
        case "GET":
            return res.render("join");
        case "POST":
            const {username, password, password2} = req.body;
            const usernameExists = await User.exists({username});
            if(usernameExists){
                return res.render("join", {errorMessage:"Username already exists"});
            };
            if(password!==password2){
                return res.render("join", {errorMessage:"Password and Confirm Password are not same"});
            }else{
                const user = await User.create({
                    username,
                    password
                })
            };
            return res.redirect("/");
    }
};

export const profile = async(req, res) => {
    switch(req.method){
        case "GET":
            return res.render("profile");
        case "POST":
            const {
                session: {
                    user: {_id},
                },
                body: {username},
            } = req;
            console.log(req.session);
            console.log("userID");
            console.log(_id);
            const updatedUser = await User.findByIdAndUpdate(_id ,{
                username,
                },
                {new:true}
            );
            req.session.user = updatedUser;
            res.locals.loggedInUser = updatedUser;

            console.log(updatedUser);
            return res.render("profile");
    }
};

export const changePw = async(req, res) => {
    switch(req.method){
        case "GET":
            return res.render("changePw");
        case "POST":
            const {
                session: {
                  user: {_id},
                },
                body: {oldPassword, newPassword, newPasswordConfirmation},
            } = req;
            const user = await User.findById(_id);
            const ok = await bcrypt.compare(oldPassword, user.password);
            if(newPassword !== newPasswordConfirmation){
                return res.render("changePw", {errorMessage:"New Password and New Password Confirmation aren't same"});
            };
            user.password = newPassword;
            await user.save();
            return res.redirect("/");      
    }
};


