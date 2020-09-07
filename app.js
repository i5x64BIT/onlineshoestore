const express = require('express'),
	app = express(),
	mongoose = require('mongoose');
const port = 80;
const ip = 'localhost';

mongoose.connect('mongodb://localhost/shoe_store');
app.use(require('body-parser').urlencoded({ extended: false }));

app.use('/', require('./routes/index'), {});
app.use('/shoes', require('./routes/shoes'));

app.listen(port, ip, () => console.log(`App listening on port ${port}!`));
