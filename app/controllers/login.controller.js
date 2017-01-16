const passport = require('passport'); 
require('../../config/passport'); 

module.exports = {
	view: view, 
	login: login
};


function view(request, response){
	response.render('pages/login', {title: 'login'}); 	
}

function login(request, response, next){
	passport.authenticate('local-login', {
      successRedirect: '/profile', 
      failureRedirect: '/login',
	})(request, response, next); 
}
