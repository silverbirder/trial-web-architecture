import React from 'react';
import { hydrate } from 'react-dom';
import CountUp from './components/CountUp';

const subscription = window.channel.subscribe({
    channel: "orders",
    topic: "item.add",
    callback: function(data, envelope) {
        console.log('from team-search');
        console.log(data);
        console.log(envelope);
    }
});

hydrate(<CountUp />, document.querySelector('#team-decide'));