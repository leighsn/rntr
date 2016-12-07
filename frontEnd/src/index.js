import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery'

import { Provider } from 'react-redux';
import store from './store'
import Routes from './Routes'
import { Router, hashHistory, browserHistory } from 'react-router'


let $body = $("body");

$(document).on({
    ajaxStart: function() { $body.addClass("loading");    },
     ajaxStop: function() { $body.removeClass("loading"); }
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={Routes} />
  </Provider>,
  document.getElementById('root')
);
