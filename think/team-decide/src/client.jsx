import React from 'react';
import { hydrate } from 'react-dom';
import Item from "./components/Item";

setTimeout(() => {
    hydrate(React.createElement(Item, { name: 'item'}), document.querySelector('#team-decide-items'));
}, 1000);