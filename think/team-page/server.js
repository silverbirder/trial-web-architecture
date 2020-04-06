const express = require('express');
const Tailor = require('node-tailor');
const filterHeaders = require('node-tailor/lib/request-fragment');
const port = process.env.PORT || 3000;
const teamSearchHost = process.env.TEAM_SEARCH_HOST || 'http://localhost:3003/search';
const teamDecideHost = process.env.TEAM_DECIDE_HOST || 'http://localhost:3002/decide';


const tailor = new Tailor({
    requestFragment: (async(a, url, attributes, req)=> {
        attributes.src = teamDecideHost;
        return await filterHeaders(url, attributes, req);
    })
});

const app = express();
app.use('/static/', express.static('dist'));

app.get('/', (req, res) => {
    req.headers['x-request-uri'] = req.url;
    req.url = '/index';
    tailor.requestHandler(req, res);
});

app.listen(port);