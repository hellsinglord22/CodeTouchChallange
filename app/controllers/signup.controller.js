const User = require('../models/user'); 

module.exports = {
	signUserUp: signUserUp,
	showSignUpForm: showSignUpForm
}


function signUserUp(request, response) {
	response.send(request.body); 
}

function showSignUpForm(request, response) {
	response.send('showSignUpForm');
}


