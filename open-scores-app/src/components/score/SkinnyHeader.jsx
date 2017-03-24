import React, {Component} from 'react';

class SkinnyHeader extends Component {

  render() {
    return (
      <header className="vertical">
        <div className="header-content-container">
          <a href="/" className="is-flex">
            <img className="logo-image" src="https://image.flaticon.com/icons/svg/118/118328.svg" alt="OpenScores Logo"></img>
            <p className="logo-text">OpenScores</p>
          </a>
        </div>
      </header>
    );
  }
}

export default SkinnyHeader;
