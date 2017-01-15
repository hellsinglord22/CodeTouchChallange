const express = require('express'),
      router  = express.Router(), 
      signupController = require('./controllers/signup.controller')
      usersController  = require('./controllers/users.controller'); 

// Sign Up Route(s)
router.post('/signup', signupController.signUserUp); 

// Log In Route(s)


// Log Out Route(s)


// Index Route(s)


// Users Route(s)
router.get('/users/seed', usersController.seed); 


module.exports = router; 