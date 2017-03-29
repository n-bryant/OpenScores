import React, {Component} from 'react';
import CollaboratorItem from './CollaboratorItem';
import base from '../../base';

class Collaborators extends Component {

  hideCollaborators() {
    document.querySelector('.collaborators-wrapper').classList.add('is-hidden');
  }

  render() {
    return (
      // lightbox showing all users that aren't collaborators on the current score

      // each user is a button with a avatar/name.
        // when clicked, write invite to that users firebase record
      <div className="collaborators-wrapper is-hidden">
        <div className="exit-collaborators-btn" onClick={this.hideCollaborators}>X</div>
        <div className="collaborators-container">
          <ul className="users-list is-flex">
            {Object.keys(this.props.users)
              .map((user) => {
                if (user !== this.props.currUser) {
                  return <CollaboratorItem key={user} user={this.props.users[user]} scoreTitle={this.props.title || 'Score Title'} scoreID={this.props.scoreId} />
                }
              })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Collaborators;
