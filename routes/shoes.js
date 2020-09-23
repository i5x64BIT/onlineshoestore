const collection = require('../models/collection');

const router = require('express').Router(),
	Shoe = require('../models/shoe'),
	Collection = require('../models/collection');

///Index
router.get('/', (req, res) => {
	Shoe.find({}, (err, allShoes) => {
		if (err) {
			return console.log(err);
		}
		return res.render('shoes/index.ejs', { shoes: allShoes });
	});
});
//New
router.get('/new', (req, res) => {
	Collection.find({}, (err, foundColl) => {
		if (err) {
			return console.log(err);
		}
		return res.render('shoes/new.ejs', { foundColl: foundColl });
	});
});
//Create
router.post('/', (req, res) => {
	Shoe.create(
		{
			name: req.body.name,
			description: req.body.description,
			price: req.body.price,
			//pictures:,
			collections: req.body.collections
		},
		(err, shoe) => {
			if (err) {
				console.log(err);
			} else {
				for (coll of shoe.collections) {
					Collection.findById(coll._id, (err, coll) => {
						if (err) console.log(err);
						coll.items.push(shoe._id);
						coll.save();
					});
				}
				return res.redirect('/');
			}
		}
	);
});
//Show
router.get('/:id', (req, res) => {
	Shoe.findById(req.params.id, (err, shoe) => {
		if (err) {
			return console.log(err);
		}
		return res.render('shoes/show.ejs', { shoe: shoe });
	});
});
module.exports = router;
