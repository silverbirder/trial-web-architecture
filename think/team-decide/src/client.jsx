import React from 'react';
import {hydrate} from 'react-dom';
import Items from "./components/Items";

const mockData = ['apple', 'banana', 'orange'];

window.channel.search.subscribe("search.word", function (data) {
    const text = data.text;
    const filMock = mockData.filter((data) => {
       return data.match(new RegExp(text)) !== null;
    });
    hydrate(React.createElement(Items, {items: filMock}), document.querySelector('#team-decide-items'));
});