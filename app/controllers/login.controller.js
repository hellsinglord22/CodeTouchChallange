module.exports = {
	view: view, 
	login: login		
};


function view(request, response){
	response.render('pages/login', {title: 'login'}); 	

}

function login(request, response){
}
