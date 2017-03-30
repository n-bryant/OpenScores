import React, {Component} from 'react';
import base from '../../base';

class CollaboratorItem extends Component {
  constructor() {
    super();
    this.inviteCollaborator = this.inviteCollaborator.bind(this);

    this.state = {
      users: {}
    }
  }

  componentWillMount() {
    this.ref = base.syncState('/users',
      {
        context: this,
        state: 'users'
      }
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  inviteCollaborator() {
    // write invite to selected user
    // console.log(this.props.scoreID);
    // console.log(this.props.user.id);

    const users = {
      ...this.state.users
    };
    users[`user-${this.props.user.id}`].scoreInvites[this.props.scoreID] = {
      accepted: false,
      primaryComposer: this.props.user.name || 'Anonymous',
      scoreTitle: this.props.scoreTitle
    };
    this.setState({users});

    this.hideCollaborators();
  }

  hideCollaborators() {
    document.querySelector('.collaborators-wrapper').classList.add('is-hidden');
  }

  render() {

    return (
      // each user is a button with a avatar/name.
      <li className="collaborator-item" onClick={this.inviteCollaborator}>
        <div className="avatar-container">
          <img className="collaborator-avatar" src={this.props.user.avatar} alt={this.props.user.name}/>
        </div>
        <p className="collaborator-name is-centered">{this.props.user.name}</p>
      </li>
    );
  }
}

export default CollaboratorItem;
