import React, {Component} from 'react';
import ListItem from './ListItem';
import base from '../../base';

class UserCompositions extends Component {

  render() {

    // if the user has scores, show the scores
    if (this.props.scores) {
      return (
        <div className="user-comp-container">
          <ul className="user-score-list is-flex">
            <li className="user-score-item">
                <p className="score-title is-centered">New Score</p>
                <a className="score-link"href={"/score"}>
                  <img src="https://image.flaticon.com/icons/svg/92/92971.svg" alt="document icon"/>
                    <div className="plus">+</div>

                </a>
            </li>
            {Object.keys(this.props.scores)
              .map((score) => <ListItem key={score} userScore={this.props.scores[score]}/>)}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="user-comp-container">
          <ul className="user-score-list is-flex">
            <li className="user-score-item">
                <p className="score-title is-centered">New Score</p>
                <a className="score-link" href={"/score"}>
                  <img src="https://image.flaticon.com/icons/svg/92/92971.svg" alt="document icon"/>
                </a>
            </li>
          </ul>
        </div>
      );
    }
  }
}

export default UserCompositions;
