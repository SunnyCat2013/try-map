import React from 'react';
import ReactDOM from 'react-dom';
import { Counter } from './components/helloworld/counter';
import { MadaMap } from './components/MGraph/MadaMap';

ReactDOM.render(
  <div>
    <Counter />
    <MadaMap />
  </div>,
  document.getElementById('map')
);
