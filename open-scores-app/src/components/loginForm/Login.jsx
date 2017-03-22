import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <form className="login-container">
                    <input className="userName" type="text" placeholder="USERNAME"></input>
                    <input className="password" type="password" placeholder="PASSWORD"></input>
                    <button className="login-button" type="button">LOGIN</button>
                </form>
            </div>
        );
    }
}

export default Login;
