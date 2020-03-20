import React from 'react';
import { renderToString } from 'react-dom/server';
import CountUp from './CountUp';

const ssr = () => (`
        <div id="app">
        ${renderToString(<CountUp />)}
        </div>
        <script src="/decide_assets/client.js"></script>
`);

export default ssr;