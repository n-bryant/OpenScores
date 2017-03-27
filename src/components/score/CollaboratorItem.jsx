import React, {Component} from 'react';
import base from '../../base';

class CollaboratorItem extends Component {
  constructor() {
    super();
    this.inviteCollaborator = this.inviteCollaborator.bind(this);
  }

  inviteCollaborator() {
    // write invite to selected user
    console.log(this.props.user.id);

    // hide collaborators list
  }

  render() {

    return (
      // each user is a button with a avatar/name.
      <li className="collaborator-item" onClick={this.inviteCollaborator}>
        <img className="collaborator-avatar" src={this.props.user.avatar} alt={this.props.user.name}/>
        <p className="collaborator-name is-centered">{this.props.user.name}</p>
      </li>
    );
  }
}

export default CollaboratorItem;
