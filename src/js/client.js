import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Archived from './pages/Archived';
import Featured from './pages/Featured';
import Layout from './pages/Layout';
import Settings from './pages/Settings';

var app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="archived" component={Archived}></Route>
      <Route path="settings" component={Settings}></Route>
    </Route>
  </Router>,
app);
