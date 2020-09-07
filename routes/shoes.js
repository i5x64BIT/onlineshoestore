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
	return res.render('shoes/new.ejs');
});
//Create
router.post('/', (req, res) => {
	Shoe.create(req.body.shoe, (err, shoe) => {
		if (err) {
			console.log(err);
		} else {
			return res.redirect('/');
		}
	});
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
