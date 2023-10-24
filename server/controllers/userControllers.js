const User = require('../models/userModel');

const userController = {};


//update profile fields (ex: usernames, password, ...etc);
userController.updateUser = async (req, res, next) => {
  const { _id, username, fullName, favoriteSports, bio, userLocation } = req.body;
  console.log(req.body);

  
  await User.findByIdAndUpdate(req.User._id) 
  .catch((err) => next(err))

  if (User) {
    User.username = req.body.username || User.username;
    User.fullName = req.body.fullName || User.fullName;
    User.favoriteSports = req.body.favoriteSports || User.favoriteSports;
    User.bio = req.body.bio || User.bio;
    User.userLocation = req.body.userLocation || User.userLocation;
  }
    
``
  res.locals.updatedUser = await User.findById(_id);  
  return next()  
};

module.exports = userController;