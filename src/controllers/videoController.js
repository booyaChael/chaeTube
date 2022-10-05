import Video from "../models/Video.js";

export const handleHome = async(req, res) => {
    const videos = await Video.find({});
    return res.render("home", {videos});
};

export const watch = async(req, res) => {
    const {id} = req.params;
    const video = await Video.findById(id);
    return res.render("watch", {video});
};