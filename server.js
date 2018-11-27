const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/cycurity-client/'));
app.get('/*', (req, res) => res.sendfile(path.join(__dirname + '/dist/cycurity-client/index.html')));
const port = process.env.PORT || 8080;
app.listen(port, () => console.log("server is running !!"+port));