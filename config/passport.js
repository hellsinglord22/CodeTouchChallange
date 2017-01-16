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

		console.log('the value of the user: ', user); 
		done(null, user); 
	})
}));

passport.use('local-register', new LocalStrategy({
	usernameField: 'email', 
	passwordField: 'password', 
	passReqToCallback: true
}, function(request, email, password, done)	{
	if (email == ''){
		return done(null, false, 'You Need To Provide An Email'); 	
	}

	User.findOne({email: email}, function(error, user){
		if (error) {
			return done(error); 
		}
		if(user){
			return done(null, false, 'User already exict');
		}	
		if (!user){
			const newUser = new User({
				email: email, 
				password: password
			});
			newUser.save(function(error, user){
				return done(null, user); 
			}); 
		}
	});

}));


// For Session // 
passport.serializeUser(function(user, done) {
  done(null, user._id)
})

passport.deserializeUser(function(id, done) {
	User.find({_id: id})
		.then((user) => {
			done(null, user); 
		}, done);
}); 