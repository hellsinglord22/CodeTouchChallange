
module.exports = {
	view: view	
}

function view(request, response){

	var authStatus = {
      session: request.session,
      user: request.user,
      authenticated: request.isAuthenticated(),
    };

	response.render('pages/profile', 
		{title: 'profile', authenticated: request.isAuthenticated(), authStatus: authStatus})
}