import React, {Component} from 'react';
import ChatContainer from '../chatApp/ChatContainer';
import base from '../../base';

class MainSideBar extends Component {
  logout() {
    base.unauth();
    // this.setState({ uid: null});
    window.location.href = '/';
  }

  render() {
    const logout = <button className="logout-btn" onClick={this.logout}>Log Out!</button>
    return (
      <div className="main-side-container">
        <div className="user-profile-image">
          <img className="profile-pic" src={this.props.avatar} alt={this.props.name}></img>
          <p>{this.props.name}</p>
          {logout}
        </div>
      </div>
    );
  }
}

export default MainSideBar;
