import passport from "passport";

function getLogin(req, res, next) {
    passport.authenticate('google', { scope: ['profile'] })(req, res, next);
};

function getRedirect(req, res, next){
    passport.authenticate('google', { 
        failureRedirect: 'http://localhost:5173/login', // React app's login page
        successRedirect: 'http://localhost:5173/courses'  // React app's dashboard or home page
    })(req, res, next);
};

export default { getLogin, getRedirect };