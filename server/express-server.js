const express = require('express');
const app = express();

app.use('/', express.static('./public'));

const server = app.listen(3000, function() {
    console.log('Server is running...');
});