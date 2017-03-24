import React, {Component} from 'react';
import MainHeader from './MainHeader';
import MainSideBar from './MainSideBar';
import UserCompositions from './UserCompositions';
import ChatContainer from '../chatApp/ChatContainer';
import ReactApp from '../react-chat/ReactApp';

class Profile extends Component {
    render() {
        return (
            <section className="profile-wrapper">
                <MainHeader/>
                <UserCompositions scores={this.props.scores}/>
                <ReactApp/>
                <MainSideBar/>
            </section>
        );
    }
}

export default Profile;
