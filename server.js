const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());

require ('./app/routing/apiRoutes.js')(app);
require ('./app/routing/htmlRoutes.js')(app);



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});