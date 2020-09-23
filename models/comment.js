const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
	userId: { type: mongoose.Types.ObjectId, unique: true, ref: 'User' },
	body: String,
	dateOfPublish: { type: Date, default: Date.now },
	rating: Number, // 0 -> 5
	verifiedPurchase: Boolean
});

module.exports = mongoose.model('Comment', commentSchema);
