const express = require("express");
const passport = require('passport')
const app = express();
// const pug = require("pug")

const bodyParser = require("body-parser");
const port = 3000;
const path = require('path');

const routerAuth = require("./src/routes/auth");
const routerUsers = require("./src/routes/author");
const routerPost = require("./src/routes/posts");
const routerComment = require("./src/routes/comment");

const fileUpload = require("express-fileupload");

const middle = require("./src/middleware/jwt");


app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'pug');

app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.use("/", routerAuth);
app.use(express.static("src/public"));
app.use("/author",middle, routerUsers);
app.use("/posts", middle, routerPost);
app.use("/comments", middle, routerComment);
app.get("/print",(req,res)=>{
  console.log(req.body)
  res.render("welcome",{
    data: {username:"dimar"}
  })
})
app.post('/email/:template', function(req, res) {
  console.log(req.body)
  res.render(`welcome`, {
    data: req.body        
  })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
