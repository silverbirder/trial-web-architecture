import React from 'react';
import {hydrate} from 'react-dom';
import Items from "./components/items.jsx";

window.channel.search.subscribe("search.word", function (data) {
    hydrate(<Items {... {items: data.items}} />, document.querySelector('#team-decide-items'));
});