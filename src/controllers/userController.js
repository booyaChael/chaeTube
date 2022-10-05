import Video from "../models/Video.js";
export const upload = async(req, res) => {
    switch(req.method){
        case "GET":
            return res.render("upload");
        case "POST":
            const {title, hashtags, createdAt, memo} = req.body;
            await Video.create({
                title,
                hashtags,
                createdAt,
                memo
            });
            return res.redirect("/");
    }
};


export const getJoin = (req, res) => {
    res.end();
};
export const postJoin = (req, res) => {
    res.end
};
