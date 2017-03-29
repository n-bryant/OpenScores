import React, {Component} from 'react';
import ChatContainer from '../chatApp/ChatContainer';
import base from '../../base';

class AvatarContainer extends Component {
  logout() {
    base.unauth();
    // this.setState({ uid: null});
    window.location.href = '/';
  }

  render() {
    const logout = <button className="logout-btn" onClick={this.logout}>Log Out</button>
    return (
      <div className="avatar-container">
        <div className="user-profile-image is-flex">
          <img className="profile-pic" src={this.props.avatar} alt={this.props.name}></img>
          <p className="user-name is-centered">{this.props.name}</p>
          {logout}
        </div>
      </div>
    );
  }
}

export default AvatarContainer;
