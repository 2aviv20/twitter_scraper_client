const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));
app.get('/*', (req, res) => res.sendfile(path.join(__dirname + '/dist/index.html')));
app.listen(process.env.PORT || 8080, () => console.log("server is running !!"));