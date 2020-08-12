const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/UserController");

router.route("/")
.get(UsersController.getAuthor)
.post(UsersController.saveAuthor);

router.route("/:id")
.get(UsersController.getAuthorById)
.patch(UsersController.updateAuthor)
.delete(UsersController.deleteAuthor)

module.exports = router;
