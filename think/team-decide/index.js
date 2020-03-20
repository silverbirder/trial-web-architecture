import express from 'express';
import ssr from './views/ssr';

const app = express();

app.listen(3003);

app.use("/decide_assets", express.static("./assets"));

app.get('/decide/', (_, res) => {
    const response = ssr();
    res.send(response);
});