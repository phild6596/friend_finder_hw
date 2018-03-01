const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(express.static('app/public'));

require ('./app/routing/apiRoutes.js')(app);
require ('./app/routing/htmlRoutes.js')(app);



app.listen(port, () => console.log('Listening on port: ', port));