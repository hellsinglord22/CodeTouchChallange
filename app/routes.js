const express = require('express'),
      router  = express.Router(), 
      signupController = require('./controllers/signup.controller');

// Sign Up Route(s)
router.post('/signup', signupController.signUserUp); 
router.get('/signup', signupController.showSignUpForm); 

// Log In Route(s)


// Log Out Route(s)


// Index Route(s)


module.exports = router; 