const User = require('../models/user'); 

module.exports = {
	signup: signup,
	view: view
	
}


function signup(request, response) {
	response.send(request.body); 
}

function view(request, response){
	response.render('pages/signup', {title: 'signup'}); 
}

