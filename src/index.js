import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.generated.css';
import './index.scss';
import Routes from './Routes';

import TagManager from 'react-gtm-module';

const tagManagerArgs = {
    gtmId: 'GTM-TT62JBS'
}

TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('App')
);
