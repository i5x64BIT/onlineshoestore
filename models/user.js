const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	id: mongoose.Schema.Types.ObjectId,
	username: { type: String, unique: true },
	password: String,
	email: String,
	isAdmin: Boolean,
	displayname: String,
	profilePicture: { type: mongoose.Schema.Types.ObjectId, unique: true },
	purchases: [ { type: mongoose.Schema.Types.ObjectId, unique: true } ],
	isAdmin: Boolean,
	isPrivate: Boolean,
	langPref: String
});

module.exports = mongoose.model('User', userSchema);
