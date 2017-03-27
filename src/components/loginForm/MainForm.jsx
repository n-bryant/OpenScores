import React, {Component} from 'react';
import Login from './Login';
import LoginHeader from './LoginHeader';

class MainForm extends Component {
    render() {
        return (
            <div className="login-wrapper">
              <LoginHeader />
              <div className="login-container">
                <Login/>
              </div>
            </div>
        );
    }
}

export default MainForm;
