import Video from "../models/Video.js";

export const handleHome = async(req, res) => {
    const videos = await Video.find({});
    return res.render("home", {videos});
};

export const upload = async(req, res) => {
    switch(req.method){
        case "GET":
            return res.render("upload");
        case "POST":
            const {
                session: {
                  user: {_id},
                },
                body: {title, hashtags, createdAt, memo},
            } = req;

            const file =req.file;
            const newVideo = await Video.create({
                title,
                hashtags: hashtags.split(' ').filter(word => word.startsWith('#')),
                createdAt,
                memo,
                fileUrl: file.path,
                owner: _id,
            });
            console.log(newVideo);
            return res.redirect("/");
    }
};

export const watch = async(req, res) => {
    const {id} = req.params;
    const video = await Video.findById(id).populate("owner");
    return res.render("watch", {video});
};

export const update = async(req, res) => {
    const {id} = req.params;
    const video = await Video.findById(id);
    const hashtagString =video.hashtags.toString();
    
    switch(req.method){
        case "GET":
            return res.render("update", {video, hashtagString});
        case "POST":
            const {title, hashtags, memo} = req.body;
            await Video.findByIdAndUpdate(id,{
                title,
                hashtags,
                memo
            });
            return res.redirect(`/video/watch/${id}`);
    }
};

export const remove = async(req, res) => {
    const {id} = req.params;
    await Video.findByIdAndDelete(id);
    res.redirect("/");
};

export const record = async(req, res) => {
    switch(req.method){
        case "GET":
            return res.render("record");
        case "POST":
            return res.redirect("/");
    };

};
