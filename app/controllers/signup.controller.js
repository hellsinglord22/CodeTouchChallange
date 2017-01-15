const User = require('../models/user'); 

module.exports = {
	signUserUp: signUserUp,
}


function signUserUp(request, response) {
	response.send(request.body); 
}

