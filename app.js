const express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	path = require('path');
const port = 80;
const ip = 'localhost';

mongoose.connect('mongodb://localhost/shoe_store');
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('body-parser').urlencoded({ extended: true }));

app.use('/', require('./routes/index'));
app.use('/shoes', require('./routes/shoes'));
app.use('/collections', require('./routes/collections'));

app.listen(port, ip, () => console.log(`App listening on port ${port}!`));
