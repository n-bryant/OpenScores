import React, {Component} from 'react';

class ListItem extends Component {
  render() {
    return (
      <li className="user-score-item">
          <p className="score-title is-centered">{this.props.userScore.title}</p>
          <a className="score-link" href={`/score/${this.props.userScore.id}`}>
            <img src="https://image.flaticon.com/icons/svg/92/92971.svg" alt="document icon"/>
          </a>
      </li>
    );
  }
}

export default ListItem;
