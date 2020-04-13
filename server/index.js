var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
var sleepData = require('./routes/fitbit');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/fitbit', sleepData);


app.listen(3000, function(){
    console.log("Running Server on 3000");
})