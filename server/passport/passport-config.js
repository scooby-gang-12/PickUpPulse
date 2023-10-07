const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const User = require('../models/userModel');
const bcrypt = require('bcrypt')

module.exports = function() {
passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({ username: username })
        .then((foundUser) => {
            if (!foundUser) return (done({message: 'User not found'}))

            bcrypt.compare(password, foundUser.password)
                .then((result) => {
                    if(!result) return done({message: 'Incorrect Password'})
                    return done(null, foundUser)
                })
        })
        .catch((err) => next(err));
}))

passport.serializeUser((user, done) => {
    done(null, user.id);
  });

passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
}