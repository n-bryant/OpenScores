import React, {Component} from 'react';
import Vexx from './Vex';

class Score extends Component {

  render() {

    return (
      <section className="score-wrapper">
        <div className="score-container">
          <h2 className="score-title is-centered">Score Title</h2>
          <Vexx />
        </div>
      </section>
    );
  }
}

export default Score;
