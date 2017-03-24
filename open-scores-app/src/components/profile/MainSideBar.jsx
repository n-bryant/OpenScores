import React, {Component} from 'react';
import ChatContainer from '../chatApp/ChatContainer';

class MainSideBar extends Component {
    render() {
        return (
            <div className="main-side-container">
                <div className="user-profile-image">
                    <img className="profile-pic" src="https://s-media-cache-ak0.pinimg.com/736x/bf/b6/19/bfb6192a36bb33728209ac1040f2f574.jpg" alt="Corgi default image"></img>
                    <p className="user-name">Scott Corgi</p>
                </div>
            </div>
        );
    }
}

export default MainSideBar;
