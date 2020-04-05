const express = require('express');
const Tailor = require('node-tailor');
const tailor = new Tailor({});
const port = process.env.PORT || 3000;

const app = express();
app.use('/static/', express.static('dist'));

app.get('/', (req, res) => {
    req.headers['x-request-uri'] = req.url;
    req.url = '/index';
    tailor.requestHandler(req, res);
});

app.listen(port);