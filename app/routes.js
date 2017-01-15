const express          = require('express'),
      router           = express.Router(), 
      usersController  = require('./controllers/users.controller'),
      signupController = require('./controllers/signup.controller'),
      loginController  = require('./controllers/login.controller'),
      logoutController = require('./controllers/logout.controller'),
      indexController  = require('./controllers/index.controller');



// Sign Up Route(s)
router.get('/signup', signupController.view); 
router.post('/signup', signupController.signup); 

// Log In Route(s)
router.get('/login', loginController.view)
// router.post('/login', loginController.login)



// Log Out Route(s)
router.get('/logout', logoutController.logout); 

// Index Route(s)
router.get('/', indexController.view);

// Users Route(s)
router.get('/users/seed', usersController.seed); 


module.exports = router; 