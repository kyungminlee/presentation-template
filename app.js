const express = require('express');
express.static.mime.define({'application/javascript': ['js']});

var path = require("path");
const app = express();

app.use('/reveal.js', express.static(__dirname + '/node_modules/reveal.js'));
app.use('/', express.static(__dirname + '/src'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/index.html'));
})

app.listen(8080, () => console.log("Listening on port 8080!"));
