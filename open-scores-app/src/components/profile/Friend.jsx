import React, {Component} from 'react';

class Friend extends Component {
    render() {
        return (
            <div>
                <a href="#">
                    <div className="single-friend-container">
                        <img className="friend-image" src="https://www.soundstream.tv/assets/default_profile-e08597880fc222202f22984a4f1966a29b108e856a3fb935072bfbbc302a4b73.png" alt="user avatar"></img>
                        <p>Some Friend</p>
                    </div>
                </a>
            </div>
        );
    }
}
export default Friend;
