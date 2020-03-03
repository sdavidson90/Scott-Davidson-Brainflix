const express = require("express");
const videosFile = __dirname + "/../../models/videos.json";
const videos = require(videosFile);
const helper = require("../../helper/helper");
const router = express.Router();

//get all videos
router.get("/", (req, res) => {
  const videoList = videos.map(video => {
    return {
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: video.image
    };
  });
  res.json(videoList);
});

//get video by id
router.get("/:id", (req, res) => {
  const found = videos.some(video => video.id === req.params.id);
  if (found) {
    res.json(videos.filter(video => video.id === req.params.id));
  } else {
    res
      .status(400)
      .json({ errorMessage: `Video with ID:${req.params.id} not found` });
  }
});

//upload video
router.post("/", (req, res) => {
  const newVideo = {
    id: helper.getNewId(),
    title: req.body.title,
    description: req.body.description,
    channel: "Scott Davidson",
    image: req.body.image,
    comments: []
  };
  if (!newVideo.title || !newVideo.description || !newVideo.image) {
    return res.status(400).json({
      errorMessage: "Please provide title, description, and image for the video"
    });
  }
  videos.push(newVideo);
  helper.writeJSONFile(videosFile, videos);
  res.json(videos);
});

module.exports = router;
