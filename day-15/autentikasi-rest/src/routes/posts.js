const express = require("express");
const router = express.Router();

const PostController = require("../controllers/PostController");

router.route("/")
.get(PostController.getPosts)
.post(PostController.savePost);


router.route("/:id")
.get(PostController.getPostById)
.patch(PostController.updatePost)
.delete(PostController.deletePost);

module.exports = router;
