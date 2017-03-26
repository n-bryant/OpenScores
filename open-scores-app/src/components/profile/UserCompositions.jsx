import React, {Component} from 'react';
import ListItem from './ListItem';
import base from '../../base';

class UserCompositions extends Component {
  constructor() {
    super();

    this.state = {
      scores: null
    }
  }

  render() {

    // if the user has scores, show the scores
    if (this.state.scores) {
      return (
        <div className="main-comp-container">
          <div className="container-one">
            <a href="/score">
              <img src="https://s-media-cache-ak0.pinimg.com/564x/06/48/23/0648237215ce75e4bf516e144c647177.jpg" alt="document icon"/>
            </a>
          </div>
          <ul className="user-score-list">
            {Object.keys(this.state.scores)
              .map((score) => <ListItem key={score} userScore={this.state.scores[score]}/>)}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="main-comp-container">
          <div className="container-one">
            <a href="/score">
              <img src="https://s-media-cache-ak0.pinimg.com/564x/06/48/23/0648237215ce75e4bf516e144c647177.jpg" alt="document icon"/>
            </a>
          </div>
        </div>
      );
    }
  }
}

export default UserCompositions;
