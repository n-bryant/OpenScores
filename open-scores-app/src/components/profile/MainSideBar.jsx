import React, {Component} from 'react';
import ChatContainer from '../chatApp/ChatContainer';

class MainSideBar extends Component {

    render() {
        return (
            <div className="main-side-container">
                <div className="user-profile-image">
                    <img className="profile-pic" src={this.props.avatar} alt={this.props.name}></img>
                    <p>{this.props.name}</p>
                </div>
            </div>
        );
    }
}

export default MainSideBar;
