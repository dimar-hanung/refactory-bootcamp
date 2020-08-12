const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

const rootIndex = require("./src/routes/index");
const routerUsers = require("./src/routes/author");
const routerPost = require("./src/routes/posts");
const routerComment = require("./src/routes/comment");

const {author} = require("./src/db/models")

app.use(bodyParser.json());
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


// app.use(require("morgan")("combined"));
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(express.json())
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);
var jsonwebtoken = require("jsonwebtoken");
var passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';


app.use("/", rootIndex);
app.use("/author",passport.authenticate("jwt"), routerUsers);
app.use("/posts",passport.authenticate("jwt"), routerPost);
app.use("/comments",passport.authenticate("jwt"), routerComment);


// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';

passport.use(
    new JwtStrategy(opts, function (jwt_payload, done) {
      console.log("JWT New Strategy",jwt_payload.id)
      author.findByPk( jwt_payload.id)
      .then((user) => {
        // console.log("user",user)
        
        if (user) {
          // console.log("sukses",jwt_payload.id)
          return done(null, user);
        } else {
          return done(null, false);
          // or you could create a new account
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
  
  // function (err, user)
    
  //   {
  //     if (err) {
  //       return done(err);
  //     }
  //     done(null, id);
  //   });
  // passport.deserializeUser(function (user, done) {
  //   console.log("TEST DESerialize :",user.id)
  //   done(null, user.id);
  // })  
   

  app.get("/home", passport.authenticate("jwt"), (req,res) => {
    // console.log("test",req)
    res.json({
      user: "success",
      data: req.user
    });
  });

app.get("/logout",(req,res)=>{
//   passport.deserializeUser(function (id, cb) {
//   author.findByPk(1, function (err, user) {
//     if (err) {
//       return cb(err);
//     }
    
//   })
//   .then((data)=>{res.send(cb(null, data))});
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

      
passport.deserializeUser(function (id, cb) {
  
})
      if (user) {
        // return done(null, user);
      } 
    
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
