const express = require("express");
const router = express.Router();

const CommentController = require("../controllers/CommentController");

router.route("/")
.get(CommentController.getComments)
.post(CommentController.saveComment);


router.route("/:id")
.get(CommentController.getCommentById)
.patch(CommentController.updateComment)
.delete(CommentController.deleteComment);

module.exports = router;
