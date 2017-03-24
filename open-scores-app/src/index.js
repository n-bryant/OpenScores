import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';

// import MainHeader from './components/MainHeader';
import App from './components/App';
import Profile from './components/profile/Profile';
import Score from './components/score/Score';
import MainForm from './components/loginForm/MainForm';
import './css/App.css';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Profile}/>
            {/*<Route path='profile/:userId' component={Profile}*/}
            <Route path='score' component={Score}/>
            {/*}<Route path='score' component={Score}>
              <IndexRoute component={Score}/>
              <Route path='score/:scoreId' component={Score}/>
            </Route>*/}
            <Route path='loginForm' component={MainForm}/>
        </Route>
    </Router>
), document.getElementById('root'));
