import React from 'react';
import {hydrate} from 'react-dom';
import Items from "./components/items.jsx";
const mockData = ['apple', 'banana', 'orange'];

window.channel.search.subscribe("search.word", function (data) {
    const text = data.text;
    const filMock = mockData.filter((data) => {
        return data.match(new RegExp(text)) !== null;
    });
    const items = {
        items: filMock
    };
    hydrate(<Items {... items} />, document.querySelector('#team-decide-items'));
});