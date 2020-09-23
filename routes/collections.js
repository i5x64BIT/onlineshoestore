const router = require('express').Router(),
	Shoe = require('../models/shoe'),
	Collection = require('../models/collection');

///Index
router.get('/', (req, res) => {
	Collection.find({}, (err, allCollections) => {
		if (err) {
			return console.log(err);
		}
		return res.render('collections/index.ejs', { collections: allCollections });
	});
});
//New
router.get('/new', (req, res) => {
	return res.render('collections/new.ejs');
});
//Create
router.post('/', (req, res) => {
	Collection.create(
		{
			name: req.body.name,
			description: req.body.description,
			//displayPicture: mongoose.Schema.Types.ObjectId,
			items: []
		},
		(err, coll) => {
			if (err) {
				console.log(err);
			} else {
				return res.redirect('/');
			}
		}
	);
});
//Show
router.get('/:id', (req, res) => {
	Collection.findById(req.params.id).populate('items').exec((err, coll) => {
		if (err) {
			return console.log(err);
		}
		res.render('collections/show.ejs', { collection: coll });
	});
});
module.exports = router;
