const { author } = require("../db/models");
var jsonwebtoken = require("jsonwebtoken");
var passport = require("passport");
var JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
passport.initialize();
passport.session();
// passport.authenticate("jwt")
passport.use(
    new JwtStrategy(opts, function (jwt_payload, done) {
      // console.log("JWT New Strategy",jwt_payload.id)
      author.findByPk(jwt_payload.id)
        .then((user) => user ? done(null, user) : done(null, false))
        .catch(err => done(err, false));
    })
  );
  passport.serializeUser(function (user, done) {
    // console.log("TEST Serialize :",user.id)
    done(null, user.id);
  });
  passport.deserializeUser(function (id, done) {
    // console.log("\n\nTEST DESerialize :",id)
    author.findByPk(id)
      .then(res => done(null, id))
      .catch(err => done(err));
  });
//   

module.exports = passport.authenticate("jwt")

// module.exports = AuthController