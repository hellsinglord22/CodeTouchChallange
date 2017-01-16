const passport = require('passport');
require('../../config/passport');

module.exports = {
	authenticate: authenticate, 
	authorize: authorize	
}; 


function authenticate(request, response, next){
	passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] })
														(request, response, next);
}

function authorize(request, response, next){
	passport.authenticate('google', { failureRedirect: '/login' })(request,response,next); 
}