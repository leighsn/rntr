import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import store from './store'
import Routes from './Routes'
import { Router, hashHistory, browserHistory } from 'react-router'


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={Routes} />
  </Provider>,
  document.getElementById('root')
);
