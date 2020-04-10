import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import SSR from './SSR.jsx';
const port = process.env.PORT || 3002;
const host = process.env.HOST || `http://localhost:${port}`;
const app = express();
const production = process.env.NODE_ENV === 'production';

app.listen(port);

app.use("/decide/static/", express.static("./dist"));

app.get('/decide/', (_, res) => {
    if(production) {
        const js = `<${host}/decide/static/fragment.js>; rel="fragment-script"`;
        res.writeHead(200, {
            Link: `${js}`,
            'Content-Type': 'text/html'
        });
    }
    ReactDOMServer.renderToNodeStream(
        <div>
            <SSR/>
            {!production && <script src={`${host}/decide/static/fragment.js`}></script>}
        </div>
    ).pipe(res);
});