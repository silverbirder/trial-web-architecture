import React from 'react';

const ssr = () => (`
        <div id="team-decide">
            <div id="team-decide-items"></div>
        </div>
        <script src="/decide/static/fragment.js"></script>
`);

export default ssr;