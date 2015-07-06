var express = require("express");
var fs = require('fs');
var bodyParser = require('body-parser');
var router = express.Router();

app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" :true}));
app.use(router);

function indexHTML(req, res) {

    var path = 'ui/index.html';

    var index = fs.readFileSync(path, 'utf8');
    res.send(200, index);
}

app.get('/', indexHTML);

console.log("app started..!");

//app.listen(3001);

module.exports= app;