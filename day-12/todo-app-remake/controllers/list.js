const List = require("../models/list");
var express = require("express");
const pug = require("pug");

class listController {
  static async addList(req, res) {
    const { params, file, body } = req;
    console.log("Menambah list");
    let newList = await new List({
      name: body.name,
      description: body.description,
      date: new Date(),
      status: 0,
      imageFile: file,
    });

    newList
      .save()
      .then(res.redirect(301, "/list"))
      .catch((err) => res.send(err));
  }

  static async editList(req, res) {
    List.findOne({
      _id: req.params.id,
    }).then((data) => {
      console.log("Berhasil Mendapatkan List yang mau diedit");
      const compiledFunction = pug.compileFile("views/edit.pug");
      const a = compiledFunction({
        data: data,
      });
      res.send(a);
    });
  }

  static async editListPost(req, res) {
    console.log("Berhasil Edit list");
    const { params, file, body } = req;
    const image = file === undefined ? "nullObj" : "imageFile";
    List.updateOne(
      { _id: req.body.id },
      {
        $set: {
          name: body.name,
          description: body.description,
          date: new Date(),
          [image]: file,
        },
      },
      { multi: true, new: true }
    ).then((data) => res.redirect(301, "/list/"));
  }

  static async changeStatus(req, res) {
    console.log("Berhasil Ganti Status");
    List.updateOne(
      { _id: req.body.id },
      { $set: { status: req.body.status } },
      { multi: true, new: true }
    ).then((data) => res.send(data));
  }

  static async deleteOneList(req, res) {
    console.log("Berhasil Delete");
    List.findByIdAndRemove({
      _id: req.params.id,
    })
      .then((response) => res.redirect(301, "/list/"))
      .catch((err) => err);
  }

  static async showTable(req, res) {
    List.find({})
      .then((data) => {
        console.log("Berhasil Mendapatkan list");
        const compiledFunction = pug.compileFile("views/home.pug");
        const a = compiledFunction({
          data: data,
        });
        res.send(a);
      })
      .catch((err) => console.log(err));
  }
}

module.exports = listController;
