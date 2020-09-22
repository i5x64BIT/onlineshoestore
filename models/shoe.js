const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
	name: { type: String, unique: true },
	description: String,
	displayPicture: mongoose.Schema.Types.ObjectId,
	pictures: [ { type: mongoose.Schema.Types.ObjectId } ],
	price: Number,
	collections: [ { type: mongoose.Schema.Types.ObjectId, unique: true } ],
	dateOfPublish: { type: Date, default: Date.now },
	comments: [
		{
			userId: { type: mongoose.Schema.Types.ObjectId, unique: true, ref: 'Comment' }
		}
	]
});

module.exports = mongoose.model('Shoe', shoeSchema);
