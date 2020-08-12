const mongoose = require("mongoose");
const { program } = require("@caporal/core");
const yesno = require("yesno");
const List = require("./schema");
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.connect("mongodb://localhost:27017/todo-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Terhubung ke mongo"));
const close = () => mongoose.connection.close();
program
  .command("list")
  .option("--date <boolean>", "", {
    default: false,
  })
  .action(({ options }) => {
    List.find({})
      .then((data) => {
        if(data.length == 0) data = [{description:"tidak ada data",_id:false,date:new Date()}];
        data.forEach((data, i) => {
          let date = data.date;
          if (!options.date) date = "";
          console.log(data._id, data.description, data.status==1?"(done)":"", date);
        });
      })
      .catch((err) => console.log(err))
      .then(close);
  })
  .command("add", "Menambah List")
  .argument("<text>", "String, Deskripsi")
  .action(({ logger, args }) => {
    let newList = new List({
      description: args.text,
      date: new Date(),
      status: 0,
    });
    // this is modal object.
    newList
      .save()
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
      .then(close);
  })
  .command("update", "Update Deskripsi")
  .argument("<id>", "array index")
  .argument("<text>", "String, Deskripsi")
  .action(({ logger, args }) => {
    (async () => {
      const before = await List.find({ _id: args.id }).then((v) => v);
      const after = await List.updateOne(
        { _id: args.id },
        { $set: { description: args.text } },
        { multi: true, new: true }
      );

      return { before: before[0].description, after: args.text };
    })()
      .then((data) => console.log(`${data.before} => ${data.after}`))
      .catch((err) => console.log(err))
      .then(close);
  })
  .command("done", "done")
  .argument("<id>", "array index")
  .action(({ logger, args }) => {
    (async () => {
      const update = await List.updateOne(
        { _id: args.id },
        { $set: { status: 1 } },
        { multi: true, new: true }
      );
      const doneList = await List.find({ status: 1 }).then((v) =>
        v.map((data) => {
          return {
            _id: data.id,
            description: data.description,
            status: data.status,
          };
        })
      );

      return doneList;
    })()
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
      .then(close);
  })
  .command("undone", "done")
  .argument("[<id>]", "array index")
  .action(({ logger, args }) => {
    (async () => {
      const update = await List.updateOne(
        { _id: args.id },
        { $set: { status: 0 } },
        { multi: true, new: true }
      );
      const unDoneList = await List.find({ status: 0 }).then((v) =>
        v.map((data) => {
          return {
            _id: parseInt(data.id),
            description: data.description,
            status: data.status,
          };
        })
      );

      return unDoneList;
    })()
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
      .then(close);
  })
  .command("clear", "hapus semua list")
  .action(({ logger }) => {
    (async () => {
      const ok = await yesno({
        question: "yakin menghapus Semua list? ( ya / gak )",
        yesValues: ["ya"],
        noValues: ["gak"],
      });
      if (ok) {
        List.deleteMany({})
          .then((data) => console.log(data))
          .catch((err) => err)
          .then(close);
      } else {
        logger.info(`ga jadi dihapus`);
        close();
      }
    })();
  });

program.run();
