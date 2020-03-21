import React from 'react';
import { hydrate } from 'react-dom';
import CountUp from './components/CountUp';

hydrate(<CountUp />, document.querySelector('#team-decide'));