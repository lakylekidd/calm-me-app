const express = require('express');
const path = require('path');
const app = express();

// Serve static files....
<<<<<<< HEAD
app.use(express.static(__dirname + '/dist/'));

// Send all requests to index.html
app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname + '/dist/index.html'));
=======
app.use(express.static(__dirname + '/dist/MY_APP_NAME_HERE'));

// Send all requests to index.html
app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname + '/dist/MY_APP_NAME_HERE/index.html'));
>>>>>>> 2fc420942858ad493db954e55e5bc5e5bde51782
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);
