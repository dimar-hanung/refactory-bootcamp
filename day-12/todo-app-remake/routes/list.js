var express = require("express");
var router = express.Router();
const ListControl = require("../controllers/list");
const uploadsMiddlewar = require("../middleware/uploads");
const { editListPost } = require("../controllers/list");

router.get("/", ListControl.showTable);
router.get("/edit/:id", ListControl.editList)
router.post("/edit",uploadsMiddlewar.single("photo"),editListPost)
router.route("/add")
.post(uploadsMiddlewar.single("photo"),ListControl.addList)
.get((req,res) => res.render("add"));
router.post("/status",ListControl.changeStatus);
router.get("/delete/:id", ListControl.deleteOneList);

module.exports = router;
