import express from 'express';
import ssr from './views/ssr';

const app = express();

app.listen(3002);

app.use("/decide/static/", express.static("./dist"));

app.get('/decide/', (_, res) => {
    const response = ssr();
    const js = '<http://localhost:3002/decide/static/fragment.js>; rel="fragment-script"';
    res.writeHead(200, {
        Link: `${js}`,
        'Content-Type': 'text/html'
    });
    res.end(response);
});