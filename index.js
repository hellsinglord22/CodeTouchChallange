const express  = require('express'),
      mongoose = require('mongoose'),
      app      = express(); 

app.get('/', (request, response) => {
  response.send('i am working for you'); 
})


app.listen(3000); 