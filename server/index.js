var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
var sleepData = require('./routes/');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/sleepdata', sleepData);

app.listen(3000, function(){
    console.log("Running Server on 3000");
})