import React, {Component} from 'react';
import MainHeader from './MainHeader';
import MainSideBar from './MainSideBar';
import UserCompositions from './UserCompositions';
import ChatContainer from '../chatApp/ChatContainer';

class Profile extends Component {
    render() {
        return (
            <section className="profile-wrapper">
                <MainHeader/>
                <UserCompositions/>
                <MainSideBar/>
            </section>
        );
    }
}

export default Profile;
