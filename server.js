// NPM //
const express    = require('express'),
			mongoose   = require('mongoose'), 
			bodyParser = require('body-parser'),
			routes     = require('./app/routes'),
			database   = require('./config/database'); 
	
	// NODE // 
const path = require('path'); 

// TODO add database string to a config file 
mongoose.connect(database.url, (error) => {
	if (error) throw error; 
	else console.log ('Connected to a database');
}); 

express()
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({extended: false}))
	.use(express.static(path.join(__dirname, 'public')))
	.use(routes)
	.listen(3000); 

