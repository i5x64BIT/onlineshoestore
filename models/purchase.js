const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
	user: { type: mongoose.Types.ObjectId, unique: true },
	items: [
		{
			shoeId: { type: mongoose.Types.ObjectId, unique: true },
			ammount: Number
		}
	],
	dateOfPublish: Date.now(),
	rating: Number, // 0 -> 5
	verifiedPurchase: Boolean
});

module.exports = mongoose.model('Purchase', purchaseSchema);
