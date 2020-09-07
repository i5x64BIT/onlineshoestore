const express = require('express');
const app = express();
const port = 80;
const ip = 'localhost';

app.use('/', require('./routes/index/index'));
app.listen(port, ip, () => console.log(`App listening on port ${port}!`));
