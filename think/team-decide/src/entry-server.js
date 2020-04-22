import express from 'express';
import React from 'react';
import router from './Routes/serverRoutes';

const port = process.env.PORT || 3002;
const app = express();
app.listen(port);

app.use("/decide/static/", express.static("./dist"));

app.get('/decide/items', router);