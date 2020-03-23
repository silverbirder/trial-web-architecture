import express from 'express';
import ssr from './views/ssr';

const app = express();

app.listen(3002);

app.use("/decide_dist", express.static("./dist"));

app.get('/decide/', (_, res) => {
    const response = ssr();
    res.send(response);
});