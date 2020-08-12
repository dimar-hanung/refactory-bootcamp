var passport = require("passport");
passport.initialize();
passport.session();
passport.authenticate("jwt")

module.exports = passport