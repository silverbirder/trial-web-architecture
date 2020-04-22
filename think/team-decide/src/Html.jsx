import React from 'react';
import { renderRoutes } from 'react-router-config';

const Html = (props) => {
    return (
        <div id="team-decide">
            {renderRoutes(props.route.routes)}
        </div>
    )
};

export default Html;