

const protectedRoute = (req, res, next) => {
    console.log(req);
    if(req.isAuthenticated()) return next();
    return res.status(400).send('Not Authenticated');
};

module.exports = protectedRoute;