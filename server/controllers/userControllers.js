const User = require('../models/userModel');

const userController = {};


//update profile fields (ex: usernames, password, ...etc);
userController.updateUser = async (req, res, next) => {
  const { _id, username, fullName, favoriteSports } = req.body;

  
  await User.findByIdAndUpdate( _id, {username: username, fullName: fullName, favoriteSports: favoriteSports})
    .catch((err) => next(err))


  res.locals.updatedUser = await User.findById(_id);  
  return next()  
}




module.exports = userController;