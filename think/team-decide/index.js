import express from 'express';
import ssr from './views/ssr';
const port = process.env.PORT || 3002;
const host = process.env.HOST || `http://localhost:${port}`;
const app = express();

app.listen(port);

app.use("/decide/static/", express.static("./dist"));

app.get('/decide/', (_, res) => {
    const response = ssr();
    const js = `<${host}/decide/static/fragment.js>; rel="fragment-script"`;
    res.writeHead(200, {
        Link: `${js}`,
        'Content-Type': 'text/html'
    });
    res.end(response);
});