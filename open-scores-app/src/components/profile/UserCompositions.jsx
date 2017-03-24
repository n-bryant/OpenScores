import React, {Component} from 'react';
import ListItem from './ListItem';

class UserCompositions extends Component {
    render() {
        return (
            <div className="main-comp-container">
                <div className="container-one">
                    <a href="/score">
                        <img src="https://s-media-cache-ak0.pinimg.com/564x/06/48/23/0648237215ce75e4bf516e144c647177.jpg" alt="document icon"/>
                    </a>
                </div>
                <ul className="user-score-list">
                  {Object.keys(this.props.scores)
                    .map((score) => <ListItem key={score} userScore={this.props.scores[score]}/>)}
                </ul>
            </div>
        );
    }
}

export default UserCompositions;
