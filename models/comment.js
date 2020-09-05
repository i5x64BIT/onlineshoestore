const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
	userId: { type: mongoose.Types.ObjectId, unique: true },
	body: String,
	dateOfPublish: Date.now(),
	rating: Number, // 0 -> 5
	verifiedPurchase: Boolean
});

module.exports = mongoose.model('Comment', commentSchema);
