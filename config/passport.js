const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require('../app/models/user'); 

passport.use('local-login', new LocalStrategy({
	usernameField: 'email', 
	passwordField: 'password',
	passReqToCallback: true
}, localAuthenticate));

function localAuthenticate(request, email, password, done){

	User.findOne({'local.email': email})
		.then((user) => {
			if (user){
				if (user.local.password != password){
					return done(null, false, 'Incorrect password'); 
				}
				return done(null, user); 
			}
			if (!user){
				return done(null, false, 'Incorrect user');
			}
		})
		.catch(done); 
}


passport.use('local-register', new LocalStrategy({
	usernameField: 'email', 
	passwordField: 'password', 
	passReqToCallback: true
}, localAuthrize));

function localAuthrize(request, email, password, done){
	User.findOne({'local.email': email})
		.then((user) => {
			if(user){
				return done(null, false, 'User Already exict'); 
			}
			if (!user){
				const newUser = new User(); 
				newUser.local.email = email; 
				newUser.local.password = password; 
				newUser.save()
					.then((user) => {
						return done(null, user); 
					})
					.catch(done);
			}
		})
		.catch(done)
}


// For Session // 
passport.serializeUser(function(user, done) {
  done(null, user._id)
})

passport.deserializeUser(function(id, done) {
	User.findById(id)
		.then((user) => {
			done(null, user); 
		}, done);
}); 