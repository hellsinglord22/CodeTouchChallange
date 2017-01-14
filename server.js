const express    = require('express'),
			mongoose   = require('mongoose'), 
			bodyParser = require('body-parser'),
			routes     = require('./app/routes');

// TODO add database string to a config file 
mongoose.connect('mongodb://localhost:27017/ninja',(error) => {
	if (error) throw error; 
	else console.log ('Connected to a database');
}); 

express()
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({extended: false}))
	.use(routes)
	.listen(3000); 

