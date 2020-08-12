const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

const rootIndex = require("./src/routes/index");
const routerUsers = require("./src/routes/author");
const routerPost = require("./src/routes/posts");
const routerComment = require("./src/routes/comment");

const fileUpload = require('express-fileupload')

app.use(fileUpload({
  useTempFiles: true
}))


const {author} = require("./src/db/models")

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
const jsonwebtoken = require("jsonwebtoken");
const passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';


app.use("/", rootIndex);
app.use("/author",routerUsers);
app.use("/posts",passport.authenticate("jwt"), routerPost);
app.use("/comments",passport.authenticate("jwt"), routerComment);

passport.use(
    new JwtStrategy(opts, function (jwt_payload, done) {
      console.log("JWT New Strategy",jwt_payload.id)
      author.findByPk( jwt_payload.id)
      .then((user) => {
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      })
      .catch(err => done(err, false));
    })
  );

  passport.serializeUser(function (user, done) {
    console.log("TEST Serialize :",user.id)
    done(null, user.id);
  });
  passport.deserializeUser(function (id, done) {
    console.log("\n\nTEST DESerialize :",id)
    author.findByPk(id)
    .then(res => {
      done(null,id)
    })
    .catch(err => done(err))
  });

  app.get("/home", passport.authenticate("jwt"), (req,res) => {
    res.json({
      user: "success",
      data: req.user
    });
  });


app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    // console.log(author.prototype)
    const users = await author.findAll({
        where: {
          username: username
        }
      });
    //   console.log(user[0].dataValues)
      const user = users[0].dataValues
       
      if (!user) {
        return res.json({ error: "cuy" })
      }
      if (user.password != password) {
        return res.json({ error: "cuy" })
      }
        const token = jsonwebtoken.sign(user, opts.secretOrKey);
      res.json({
        status: "success",
        token
      });

  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});