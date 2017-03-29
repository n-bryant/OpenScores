import React, {Component} from 'react';
import base from '../../base';

class Login extends Component {
  constructor() {
    super();
    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.logout = this.logout.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.state = {
      uid: null
    }
  }

  componentDidMount() {
    base.onAuth((user) => {
      if(user) {
        this.authHandler(null, { user });
      }
    });
  }

  authenticate(provider) {
    console.log(`Trying to log in with ${provider}`);
    base.authWithOAuthPopup(provider, this.authHandler);
  }

  logout() {
    base.unauth();
  }

  authHandler(err, authData) {
    console.log(authData);
    if (err) {
      console.log(err);
      return;
    }

    // grab the profile info
    const profileRef = base.database().ref(`users/user-${authData.user.uid}`);

    // query the firebase once for the profile data
    profileRef.once('value', (snapshot) => {
      const data = snapshot.val() || {};

      // create new user record if user record does not yet exist in Firebase
      if (!data.id) {
        let recordId = `user-${authData.user.uid}`;
        profileRef.set({
          avatar: authData.user.photoURL,
          id: authData.user.uid,
          name: authData.user.displayName,
          scoreInvites: {
            placeholder: true
          }
        });
      }

      this.setState({
        uid: authData.user.uid
      });

      window.location.href = `/profile/${this.state.uid}`;
    });
  }

  renderLogin() {
    return (
      <nav className="login-form is-flex">
        <p className="login-instructions">Sign in to start composing and collaborating!</p>
        <button className="facebook is-flex" onClick={() => this.authenticate('facebook')}><span>Facebook Log In</span><img src="https://www.seeklogo.net/wp-content/uploads/2016/09/facebook-icon-preview-1-400x400.png" alt="facebook logo" /></button>
        <button className="github is-flex" onClick={() => this.authenticate('github')}><span>Github Log In</span><img src="https://octodex.github.com/images/original.png" alt="github octocat" /></button>
      </nav>
    )
  }

  render() {

    // check if not logged in at all
    if (!this.state.uid) {
      return <div className="login-form-container is-flex">{this.renderLogin()}</div>
    } else {
      return <div className="login-form-container is-flex">{this.renderLogin()}</div>
    }
  }
}

export default Login;
