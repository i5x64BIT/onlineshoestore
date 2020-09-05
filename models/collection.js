const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
	name: { type: String, unique: true },
	description: String,
	displayPicture: mongoose.Schema.Types.ObjectId,
	items: [ { type: mongoose.Schema.Types.ObjectId, unique: true } ]
});

module.exports = mongoose.model('Collection', collectionSchema);
