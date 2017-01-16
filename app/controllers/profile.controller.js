
module.exports = {
	view: view	
}

function view(request, response){
	response.send({
      session: request.session,
      user: request.user,
      authenticated: request.isAuthenticated(),
    });
}