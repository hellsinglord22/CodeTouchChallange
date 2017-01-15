const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require('../app/models/user'); 

passport.use('local-login', new LocalStrategy({
	usernameField: 'email', 
	passwordField: 'password',
	passReqToCallback: true
},
function(request, email, password, done){
	User.findOne({email: email},function(error, user){
		if(error){
			return done(error); 
		}

		if(!user){
				return done(null, false, 'Incorrect username'); 
		}

		if (user.password != password){
			return done(null, false, 'Incorrect password');
		}

		return done(null, user); 
	})
}));


// For Session // 
passport.serializeUser(function(user, done) {
  done(null, user.id)
})

passport.deserializeUser(function(id, done) {
	User.find({id: id})
		.then((user) => {
			done(null, user); 
		}, done);
}); 