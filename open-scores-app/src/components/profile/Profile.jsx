import React, {Component} from 'react';
import MainHeader from './MainHeader';
import AvatarContainer from './AvatarContainer';
import UserCompositions from './UserCompositions';
import ChatContainer from '../chatApp/ChatContainer';
import ReactApp from '../react-chat/ReactApp';
import base from '../../base';

class Profile extends Component {
  constructor() {
    super();

    this.state = {};
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

      // if score.collaborators[`user-${data.id}`] {}
        // push into user scores list
      let scoresKeys = Object.keys(this.props.scores);
      let userScores = [];
      for (let i = 0; i < scoresKeys.length; i++) {
        if (this.props.scores[scoresKeys[i]].collaborators[`user-${data.id}`]) {
          userScores.push(this.props.scores[scoresKeys[i]]);
        }
      }

      this.setState({
        uid: data.id,
        avatar: data.avatar,
        name: data.name,
        scores: userScores
      });

      this.props.setUser(this.state.uid);
    });
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
        <ReactApp avatar={this.state.avatar}/>
      </section>
    );
  }
}

export default Profile;
