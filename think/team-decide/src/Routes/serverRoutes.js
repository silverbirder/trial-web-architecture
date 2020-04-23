import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router';
import {renderRoutes} from 'react-router-config';
import routes from './routes';
import {Provider} from "react-redux";
import configureStore from "../Store/store";

const port = process.env.PORT || 3002;
const host = process.env.HOST || `http://localhost:${port}`;
const production = process.env.NODE_ENV === 'production';

const router = express.Router();
const store = configureStore();

router.get('*', (req, res) => {
    let context = {};
    if (production) {
        const js = `<${host}/decide/static/fragment.js>; rel="fragment-script"`;
        res.writeHead(200, {
            Link: `${js}`,
            'Content-Type': 'text/html'
        });
    }
    ReactDOMServer.renderToNodeStream(
        <div>
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    {renderRoutes(routes)}
                </StaticRouter>
            </Provider>
        </div>
    ).pipe(res);
});

export default router;