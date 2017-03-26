import React, {Component} from 'react';

class ListItem extends Component {
  render() {
    return (
      <li className="user-score-item">
          <p className="score-title is-centered">{this.props.userScore.title}</p>
          <a className="score-link" href={`/score/${this.props.userScore.id}`}>
            <img src="https://s-media-cache-ak0.pinimg.com/564x/06/48/23/0648237215ce75e4bf516e144c647177.jpg" alt="document icon"/>
          </a>
      </li>
    );
  }
}

export default ListItem;
