// ./src/middleware/jwt.js
const { author } = require("../db/models");
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "secret",
};
passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    author
      .findOne({ where: { username: jwt_payload } })
      .then((user) => done(null, user))
      .catch((err) => done(err, false));
  })
);
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  author
    .findByPk(id)
    .then((user) => done(null, user))
    .catch((err) => done(err));
});
module.exports = passport.authenticate("jwt");
