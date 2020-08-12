var express = require("express");
var List = require("../models/list");
const pug = require("pug");
var router = express.Router();

router.get("/", function (req, res) {
  console.log("getting all List");
  List.find({})
    .then((data) => {
      const compiledFunction = pug.compileFile("views/home.pug");
      // Render a set of data
      const a = compiledFunction({
        data: data,
      });
      res.send(a);
    })
    .catch((err) => console.log(err));
});

router.get("/edit/:id", function (req, res) {
  console.log("Mendapatkan List");
  // res.render("add")
  List.findOne({
    _id: req.params.id,
  }).then((data) => {
    const compiledFunction = pug.compileFile("views/edit.pug");
    const a = compiledFunction({
      data: data,
    });
    res.send(a);
  });
});

router.post("/add", function (req, res) {
  console.log(req.body);
  let newList = new List({
    name: req.body.name,
    description: req.body.description,
    date: new Date(),
    status: 0,
  });
  // this is modal object.
  newList
    .save()
    .then((data) => res.redirect(301, './'))
    .catch((err) => console.log(err));
});

router.post("/edit", function (req, res) {
  List.updateOne(
    { _id: req.body.id },
    { $set: { name: req.body.name, description: req.body.description } },
    { multi: true, new: true }
  ).then((data) => res.send(data));
});
router.post("/status", function (req, res) {
  // console.log(req)
  List.updateOne(
    { _id: req.body.id },
    { $set: { status: req.body.status } },
    { multi: true, new: true }
  ).then((data) => res.send(data));
});
router.get("/delete/:id", function (req, res) {
  // console.log(req)
  List.findByIdAndRemove({
    _id: req.params.id,
  })
    .then((response) => res.send(response))
    .catch((err) => err);
});

module.exports = router;
