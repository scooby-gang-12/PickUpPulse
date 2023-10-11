const User = require('../models/userModel');
const bcrypt = require('bcrypt');


const authController = {};


authController.createUser = async (req, res, next) => {
    const { username, password, fullName, location, favoriteSports } = req.body;
    if(!username || !password || !fullName || !location || !favoriteSports) return next({message: 'Missing User Information'});


    await User.create({ username: username, password: password, fullName: fullName, location: location, favoriteSports: favoriteSports })
        .then((newUser) => {
            //figure out what we want to do with this information
            res.locals.user = newUser;
            return next()
        })
        .catch((err) => console.log(err));


}

// authController.verifyUser = async (req, res, next) => {
//     const { username, password } = req.body;

//     if(!username || !password) return next({message: 'Need username and password'})

//     await User.findOne({ username: username })
//         .then((foundUser) => {
//             if (!foundUser) return (next({message: 'User not found'}))

//             bcrypt.compare(password, foundUser.password)
//                 .then((result) => {
//                     if(!result) return next({message: 'Incorrect Password'})
//                 })
//         })
//         .catch((err) => next(err));
// };

authController.logout = (req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      
      return next()
    });
  };

// BOBBY TEMP NEED
authController.getUser = (req,res,next)=> {
  res.status(200).json(req.user)
}


module.exports = authController;