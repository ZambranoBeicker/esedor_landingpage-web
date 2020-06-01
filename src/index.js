import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.generated.css';
import './index.scss';
import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('App')
);
