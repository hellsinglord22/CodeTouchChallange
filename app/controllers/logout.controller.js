module.exports = {
	logout: logout
}; 

function logout(request, response){
	request.session.destroy(); 
	response.redirect('/login');
}
