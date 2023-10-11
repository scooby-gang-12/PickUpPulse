const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const User = require('../models/userModel');
const bcrypt = require('bcrypt')

module.exports = function() {
passport.use(new LocalStrategy((username, password, done) => {
  // BOBBY ADDED TO POPULATE GAMES
    User.findOne({ username: username }).populate('hostedGames').populate('attendingGames')
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
      // BOBBY ADDED TO POPULATE GAMES
      const user = await User.findById(id).populate('hostedGames').populate('attendingGames');
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
}