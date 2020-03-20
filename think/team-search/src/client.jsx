import React from 'react';
import { hydrate } from 'react-dom';
import CountUp from './CountUp';

// idがappの部分をhydrateで描画する
hydrate(<CountUp />, document.querySelector('#search-app'));