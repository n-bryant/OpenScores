import React, {Component} from 'react';
import base from '../../base';

class InviteItem extends Component {
  constructor() {
    super();
    this.acceptInvite = this.acceptInvite.bind(this);
    this.rejectInvite = this.rejectInvite.bind(this);

    this.state = {
      scores: {},
      users: {}
    };
  }

  componentWillMount() {
    this.ref = base.syncState('/scores',
      {
        context: this,
        state: 'scores'
      }
    );
    this.userRef = base.syncState('/users',
      {
        context: this,
        state: 'users'
      }
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
    base.removeBinding(this.userRef);
  }

  hideInvites() {
    document.querySelector('.invites-wrapper').classList.add('is-hidden');
  }

  acceptInvite() {
    // write user as collaborator on score
    const scores = {
      ...this.state.scores
    };
    scores[this.props.scoreId].collaborators[this.props.currUser] = true;
    this.setState({scores});

    // delete invite record
    const users = {
      ...this.state.users
    };
    users[this.props.currUser].scoreInvites[this.props.scoreId] = null;
    this.setState({users});

    this.hideInvites();
  }

  rejectInvite() {
    const users = {
      ...this.state.users
    };
    users[this.props.currUser].scoreInvites[this.props.scoreId] = null;
    this.setState({users});

    this.hideInvites();
  }

  render() {
    return (
      <li className="invite-item">
        <div className="invite-info-container is-flex">
          <p className="score-title is-centered">'{this.props.invite.scoreTitle}'</p>
          <p className="by-line is-centered"> by {this.props.invite.primaryComposer}</p>
        </div>
        <div className="actions-container is-flex">
          {/* add user as collaborator to score */}
          <span className="accept-btn" onClick={this.acceptInvite}>&#10004;</span>
          {/* delete invite record */}
          <span className="reject-btn" onClick={this.rejectInvite}>X</span>
        </div>
      </li>
    );
  }
}

export default InviteItem;
