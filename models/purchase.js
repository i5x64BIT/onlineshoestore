const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
	user: { type: mongoose.Types.ObjectId, unique: true, ref: 'User' },
	items: [
		{
			shoeId: { type: mongoose.Types.ObjectId, ref: 'Shoe' },
			ammount: Number
		}
	],
	dateOfPublish: { type: Date, default: Date.now },
	rating: Number, // 0 -> 5
	verifiedPurchase: Boolean
});

module.exports = mongoose.model('Purchase', purchaseSchema);
