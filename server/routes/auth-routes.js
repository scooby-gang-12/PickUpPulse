const router = require('express').Router();
const passport = require('passport');
const authController = require('../controllers/authController')

// Route to Login
router.post('/login', passport.authenticate('local', {failureMessage: 'User not authenticated'}), (req, res) => {
    //figure out what to send back
    return res.status(200).json(req.user);
})

// Route to Register
router.post('/register', authController.createUser, (req, res) => {
    res.sendStatus(200);
})

// Route to Logout 
router.post('/logout', authController.logout, (req, res) => {
    //figure out what to send back
    return res.redirect('/');
})

// Route to Get User
router.get('/', (req, res) => {
    return res.status(200).json(req.user);
})



module.exports = router;