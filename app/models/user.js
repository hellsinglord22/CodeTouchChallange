const mongoose = require('mongoose'),
			Schema   = mongoose.Schema; 

// Create Schema 
const userSchema = new Schema({
	username: String, 
	email: String, 
	password: String
});


const userModel = mongoose.model('User', userSchema); 

module.exports = userModel; 