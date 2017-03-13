import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';

import App from './components/App';
import Score from './components/score/Score';
import './css/App.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={Score}>
      <IndexRoute component={Score}/>
    </Route>
  </Router>
), document.getElementById('root'));
