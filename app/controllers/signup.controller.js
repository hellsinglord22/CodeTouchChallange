const User = require('../models/user'); 
const passport = require('passport'); 
require('../../config/passport'); 

module.exports = {
	signup: signup,
	view: view
	
}

function view(request, response){
	response.render('pages/signup', {title: 'signup', authenticated: false}); 
}

function signup(request, response, next){
	passport.authenticate('local-register', {
      successRedirect: '/profile', 
      failureRedirect: '/login',
	})(request, response, next); 
}
