import passport from "passport";

function getLogin() {
    passport.authenticate('google', { scope: ['profile'] })
};

function getRedirect(){
    passport.authenticate('google', { 
        failureRedirect: '/login' 
    }), function(req, res) {
	res.json({ message: 'Google authentication successful' }
    )}
};

export default { getLogin, getRedirect };