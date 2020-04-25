import React from 'react';
import {hydrate} from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes/routes';
import configureStore from './Store/store';

const store = configureStore();

hydrate(
    <Provider store={store}>
        <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
    </Provider>,
    document.getElementById('team-decide')
);

window.postal.publish({
    channel: 'page',
    topic: 'decide.ready',
});