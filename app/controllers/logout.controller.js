module.exports = {
	logout: logout
}; 

function logout(request, response){
	response.send('logout page'); 
}
