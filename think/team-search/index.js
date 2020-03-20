import express from 'express';
import ssr from './views/ssr';

const app = express();

app.listen(3003);

app.use("/search_assets", express.static("./assets"));

app.get('/search/', (_, res) => {
    const response = ssr();
    res.send(response);
});