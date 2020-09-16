const router = require("express").Router()
const ProductOutController = require("../controllers/ProductOutController")

router.post("/", ProductOutController.create)
router.get("/", ProductOutController.show)
router.get("/:id", ProductOutController.find)
router.put("/:id", ProductOutController.update)
router.delete("/:id", ProductOutController.delete)

module.exports = router