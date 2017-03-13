import React, {Component} from 'react';
import VFDisplay from './Vex';

class Score extends Component {

  render() {

    return (
      <section className="score-wrapper">
        <div className="score-container">
          <h2 className="score-title is-centered">Score Title</h2>
          <VFDisplay />
        </div>
      </section>
    );
  }
}

export default Score;
