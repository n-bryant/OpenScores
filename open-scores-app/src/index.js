import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';

// import MainHeader from './components/MainHeader';
import App from './components/App';
import Profile from './components/profile/Profile';
import Score from './components/score/Score';
import './css/App.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Profile}/>
      <Route path='score' component={Score}/>
    </Route>
  </Router>
), document.getElementById('root'));
