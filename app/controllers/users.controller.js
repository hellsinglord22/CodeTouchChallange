const User = require('../models/user');

module.exports = {
  seed: seed,
  show: show
};


const _users = [
  {
    email: 'first@test.com', 
    password: 'test1'
  },
  {
    email: 'second@test.com', 
    password: 'test2'
  },
  {
    email: 'third@test.com', 
    password: 'test3'
  },
  {
    email: 'fourth@test.com', 
    password: 'test4'
  }
]; 



// render seeder(s) page //
function seed(request, response){
  User.remove({})
  .then(() => {
    for (user of _users){
      new User(user) 
        .save()
        .then()
        .catch(console.error); 
    }
    response.render('pages/seed', {title: 'seed', users: _users, authenticated: false})
  }).catch(console.error); 

}


function show(request, response){
  User.find({})
    .then((users) => {
      response.send(users);
    })
    .catch(console.error)
}
