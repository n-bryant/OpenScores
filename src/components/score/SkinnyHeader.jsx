import React, {Component} from 'react';
import AvatarContainer from '../profile/AvatarContainer';
import base from '../../base';

class SkinnyHeader extends Component {
  logout() {
    base.unauth();
    // this.setState({ uid: null});
    window.location.href = '/';
  }

  render() {
    const logout = <button className="logout-btn" onClick={this.logout}>Log Out</button>
    return (
      <header className="vertical">
        <div className="header-content-container">
          <a href="/profile" className="is-flex">
            <img className="logo-image" src="https://image.flaticon.com/icons/svg/118/118328.svg" alt="OpenScores Logo"></img>
            <p className="logo-text">OpenScores</p>
          </a>
        </div>
        <div className="nav-profile-container">
          <a href="/profile">
            <p className="score-user-name">{this.props.name}</p>
            <img className="score-header-avatar" src={this.props.avatar} alt={this.props.name}/>
          </a>
        </div>
        {logout}
      </header>
    );
  }
}

export default SkinnyHeader;
