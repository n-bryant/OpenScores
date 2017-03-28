import React, {Component} from 'react';
import MainHeader from './MainHeader';
import AvatarContainer from './AvatarContainer';
import UserCompositions from './UserCompositions';
import ChatContainer from '../chatApp/ChatContainer';
import ReactApp from '../react-chat/ReactApp';
import Invites from './Invites';
import base from '../../base';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      invites: []
    };
  }

  componentDidMount() {
    base.onAuth((user) => {
      if(user) {
        this.authHandler(null, { user });
      }
    });
  }

  authHandler(err, authData) {
    if (err) {
      console.log(err);
      return;
    }

    // grab the profile info
    const profileRef = base.database().ref(`users/user-${authData.user.uid}`);

    // query the firebase once for the profile data
    profileRef.once('value', (snapshot) => {
      const data = snapshot.val();

      let scoresKeys = Object.keys(this.props.scores);
      let userScores = [];
      for (let i = 0; i < scoresKeys.length; i++) {
        if (this.props.scores[scoresKeys[i]].collaborators[`user-${data.id}`]) {
          userScores.push(this.props.scores[scoresKeys[i]]);
        }
      }

      let invitesKeys = Object.keys(data.scoreInvites);
      let userInvites = {};
      for (let i = 0; i < invitesKeys.length; i++) {
        if (invitesKeys[i] !== 'placeholder') {
          userInvites[invitesKeys[i]] = data.scoreInvites[invitesKeys[i]];
        }
      }

      this.setState({
        uid: data.id,
        avatar: data.avatar,
        name: data.name,
        allScores: this.props.scores,
        scores: userScores,
        invites: userInvites
      });

      this.props.setUser(this.state.uid);
    });
  }

  toggleInvites() {
    document.querySelector('.invites-wrapper').classList.remove('is-hidden');
  }

  render() {

    // check if they are the owner of the current profile
    // if (this.state.uid !== this.state.collaborator) {
    //   return (
    //     <div>
    //       <p>Sorry you aren't a collaborator on this document!</p>
    //       {logout}
    //     </div>
    //   )
    // }

    return (
      <section className="profile-wrapper">
        <MainHeader/>
        <AvatarContainer name={this.state.name} avatar={this.state.avatar}/>
        <UserCompositions uid={this.state.uid} scores={this.state.scores}/>
        <div className="toggle-invites-btn" onClick={this.toggleInvites}>Invites</div>
        <div className="invite-count is-flex">{Object.keys(this.state.invites).length}</div>
        <Invites scores={this.props.scores} invites={this.state.invites} currUser={this.props.user}/>
        <ReactApp avatar={this.state.avatar}/>
      </section>
    );
  }
}

export default Profile;
