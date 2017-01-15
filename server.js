// NPM //
const express    = require('express'),
      passport   = require('passport'), 
			mongoose   = require('mongoose'), 
			bodyParser = require('body-parser'),
			routes     = require('./app/routes'),
			database   = require('./config/database')
			session    = require('express-session');
	
// NODE // 
const path = require('path'); 

// require passport configuration 
require('./config/passport'); 

// TODO add database string to a config file 
mongoose.connect(database.url, (error) => {
	if (error) throw error; 
	else console.log ('Connected to a database');
}); 

express()
	.set('view engine', 'ejs')
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({extended: false}))
	.use(express.static(path.join(__dirname, 'public')))
	.use(session({ secret: "i love dogs", resave: false, saveUninitialized: false }))
  .use(passport.initialize())
  .use(passport.session())
	.use(routes)
	.post('/login', passport.authenticate("local-login", {
		successRedirect: "/profile",
		failureRedirect: "/signup"
	})) 
	.listen(3000); 
