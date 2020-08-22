const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

const routerAuth = require("./src/routes/auth");
const routerUsers = require("./src/routes/author");
const routerPost = require("./src/routes/posts");
const routerComment = require("./src/routes/comment");
const passport = require("passport");
const middle = require("./src/middleware/jwt");

app.use(bodyParser.json());
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(express.json())
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());


app.use("/", routerAuth);
app.use("/author",middle, routerUsers);
app.use("/posts",middle, routerPost);
app.use("/comments",middle, routerComment);


  app.get("/home", middle, (req,res) => {
    res.json({
      user: "success",
      data: req.user
    });
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
