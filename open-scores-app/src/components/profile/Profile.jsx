import React, {Component} from 'react';
import MainHeader from './MainHeader';
import MainSideBar from './MainSideBar';
import UserCompositions from './UserCompositions';
import ChatContainer from '../chatApp/ChatContainer';
import ReactApp from '../react-chat/ReactApp';
import base from '../../base';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      uid: null
    }
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
      const data = snapshot.val() || {};

      // create new user record if user record does not yet exist in Firebase
      if (!data.uid) {
        let recordId = `user-${authData.user.uid}`;
        profileRef.set({
          avatar: authData.user.photoURL,
          id: authData.user.uid,
          name: authData.user.displayName
        });
      }

      this.setState({
        uid: data.id,
        avatar: data.avatar,
        name: data.name,
        scores: data.scores
      });
    });
  }

  render() {

    // check if they are the owner of the current profile
    // if (this.state.uid !== this.state.collaborator) {
    //   return (
    //     <div>
    //       <p>Sorry you aren't the collaborator of this document!</p>
    //       {logout}
    //     </div>
    //   )
    // }

    return (
      <section className="profile-wrapper">
        <MainHeader/>
        <UserCompositions user={this.state.user}/>
        <ReactApp avatar={this.state.avatar}/>
        <MainSideBar name={this.state.name} avatar={this.state.avatar}/>
      </section>
    );
  }
}

export default Profile;
