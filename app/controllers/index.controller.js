module.exports = {
	view: view
}; 

function view(request, response){
	response.render('pages/index', { title: 'index', authenticated: false} ); 
}
