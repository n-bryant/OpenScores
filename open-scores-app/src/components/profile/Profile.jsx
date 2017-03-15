import React, {Component} from 'react';
import MainHeader from './MainHeader';
import MainSideBar from './MainSideBar';
import UserCompositions from './UserCompositions';

class Profile extends Component {
    render() {
        return (
            <section className="profile-wrapper">
                <MainHeader/>
                <UserCompositions/>
                <UserCompositions/>
                <UserCompositions/>
                <UserCompositions/>
                <UserCompositions/>
                <UserCompositions/>
                <MainSideBar/>
            </section>
        );
    }
}

export default Profile;
