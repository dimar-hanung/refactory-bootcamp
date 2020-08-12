const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/UserController");

router.get("/", UsersController.getUser);
router.post("/", UsersController.saveUser);

router.get("/:id", UsersController.getUser);
router.put("/:id", UsersController.updateUser);

module.exports = router;
