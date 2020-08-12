const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/AuthorController");

router
.get("/",UsersController.getAuthor)
.post("/",UsersController.saveAuthor)
.post("/image",UsersController.uploadImage)

router.route("/:id")
.get(UsersController.getAuthorById)
.patch(UsersController.updateAuthor)
.delete(UsersController.deleteAuthor)

module.exports = router;