const router = require('express').Router(),
	mongoose = require('mongoose'),
	Shoe = require('.../models/shoe');

///Index
router.get('/', (req, res) => {
	return res.render('index.ejs', { shoes: Shoe.findById({}) });
});

module.exports = router;
