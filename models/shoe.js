const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
	name: { type: String, unique: true },
	description: String,
	displayPicture: mongoose.Schema.Types.ObjectId,
	pictures: [ { type: mongoose.Schema.Types.ObjectId } ],
	price: Number,
	collections: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Collection' } ],
	dateOfPublish: { type: Date, default: Date.now },
	comments: [
		{
			userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
		}
	]
});

module.exports = mongoose.model('Shoe', shoeSchema);
