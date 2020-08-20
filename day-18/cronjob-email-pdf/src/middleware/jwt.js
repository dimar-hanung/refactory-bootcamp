const { author } = require("../db/models");

const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "secret",
};

module.exports = passport.use(
   
  new JwtStrategy(opts, function (jwt_payload, done) {
       console.log("newJWT: ",opts.secretOrKey);
    author
      .findOne({ where: { username: jwt_payload } })
      .then((user) => done(null, user))
      .catch((err) => done(err, false));
  })
);

module.exports = passport.serializeUser((user, done) => {
    console.log("Serialize: ",user)
    done(null, user.id)
});

module.exports = passport.deserializeUser((id, done) => {
    console.log("Serialize: ",id)
  author.findByPk(id)
  .then(user => done(null,user))
  .catch(err => done(err));
});
module.exports = passport.authenticate("jwt", { session: false });
