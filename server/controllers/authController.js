const User = undefined;
const bcrypt = require('bcrypt');


const authController = {};


authController.createUser = async (req, res, next) => {
    const { username, password, fullName, userLocation, favoriteSports } = req.body;

    if(!username || !password || !fullName || !userLocation || !favoriteSports) return next({message: 'Missing User Information'});


    await User.create({ username: username, password: password, fullName: fullName, userLocation: userLocation, favoriteSports: favoriteSports })
        .then((newUser) => {
            //figure out what we want to do with this information
        })
        .catch((err) => console.log('Issue with creating user in authController.createUser middleware'));


}

authController.verifyUser = async (req, res, next) => {
    const { username, password } = req.body;

    if(!username || !password) return next({message: 'Need username and password'})

    await User.findOne({ username: username })
        .then((foundUser) => {
            if (!foundUser) return (next({message: 'User not found'}))

            bcrypt.compare(password, foundUser.password)
                .then((result) => {
                    if(!result) return next({message: 'Incorrect Password'})
                })
        })
        .catch((err) => next(err));
};


module.exports = authController;