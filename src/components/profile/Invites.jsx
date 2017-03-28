import React, {Component} from 'react';
import InviteItem from './InviteItem';

class Invites extends Component {
  constructor() {
    super();
    this.state = {};
    this.hideInvites = this.hideInvites.bind(this);
  }

  hideInvites() {
    document.querySelector('.invites-wrapper').classList.add('is-hidden');
    console.log(this.props.invites);
  }

  render() {
    return (
      <div className="invites-wrapper is-hidden">
        <div className="exit-invites-btn" onClick={this.hideInvites}>X</div>
        <div className="invites-container">
          <ul className="invites-list is-flex">
            {Object.keys(this.props.invites)
              .map((invite) => <InviteItem key={invite} scoreId={invite} currUser={`user-${this.props.currUser}`} invite={this.props.invites[invite]}/>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Invites;
