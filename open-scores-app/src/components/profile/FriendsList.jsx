import React, {Component} from 'react';
import Friend from './Friend';

class FriendsList extends Component {
    render() {
        return (
            <div>
                <section className="friends-list">
                    <Friend/>
                    <Friend/>
                    <Friend/>
                </section>
            </div>
        );
    }
}

export default FriendsList;
