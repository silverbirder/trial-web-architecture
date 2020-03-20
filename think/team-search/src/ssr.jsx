import React from 'react';
import { renderToString } from 'react-dom/server';
import CountUp from './CountUp';

const ssr = () => (`
        <div id="search-app">
        ${renderToString(<CountUp />)}
        </div>
        <script src="/search_assets/client.js"></script>
`);

export default ssr;