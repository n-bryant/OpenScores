import React, {Component} from 'react';
import AvatarContainer from '../profile/AvatarContainer';

class SkinnyHeader extends Component {


  render() {
    return (
      <header className="vertical">
        <div className="header-content-container">
          <a href="/profile" className="is-flex">
            <img className="logo-image" src="https://image.flaticon.com/icons/svg/118/118328.svg" alt="OpenScores Logo"></img>
            <p className="logo-text">OpenScores</p>
          </a>
        </div>
        <a href="/profile">
          <p className="score-user-name">{this.props.name}</p>
          <img className="score-header-avatar" src={this.props.avatar} alt={this.props.name}/>
        </a>
      </header>
    );
  }
}

export default SkinnyHeader;
