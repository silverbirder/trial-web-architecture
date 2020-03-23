import React from 'react';
import { renderToString } from 'react-dom/server';
import CountUp from './components/CountUp';

const ssr = () => (`
        <div id="team-decide">
            ${renderToString(<CountUp />)}
        </div>
        <script src="/decide_dist/index.js"></script>
`);

export default ssr;