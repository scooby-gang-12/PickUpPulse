const User = require('../models/userModel');

const userController = {};

//update profile fields (ex: usernames, password, ...etc);
userController.updateUser = async (req, res, next) => {
  console.log(req.body);
  const {userBio, userLocation, favoriteSports, _id } = req.body;

  console.log("bio", userBio);

  try {const user = await User.findByIdAndUpdate({_id}) 
  // const user = await User.findOne();
  if (!user.userBio) user.userBio = userBio;
  if (!user.userLocation) user.userLocation = userLocation;
  user.favoriteSports = favoriteSports;
  console.log('user', user);
  console.log("**************LOCATION***********", user.userLocation , user.favoriteSports, user.fullName, user.userBio);
  res.locals.updatedUser = user;  }
  
  catch(err) {
    console.error(err);
  }

  // const data = [user.userLocation, user.favoriteSports, user.fullName, user.userBio];
  // res.send(data);
  //user.bio = bio from req.body******
//**look up how to add property to mongoose db** what mongoose method to use?
//put a res back to fetch req, use res.locals to send back to component, send back res.status(200) do not need to send anything back
//just manipulate db
//LATER- populate user profile w/data from db. make req to db and put it in react component
  //figure out how to grab id from db
  // .catch((err) => next(err))

  // if (User) {
  //   User.username = req.body.username || User.username;
  //   User.fullName = req.body.fullName || User.fullName;
  //   User.favoriteSports = req.body.favoriteSports || User.favoriteSports;
  //   User.bio = req.body.bio || User.bio;
  //   User.userLocation = req.body.userLocation || User.userLocation;
  // }
    
``
  return next()  
};

module.exports = userController;