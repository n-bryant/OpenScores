import React, {Component} from 'react';
import base from '../base';
// import Tone from 'tone';

class App extends Component {
  constructor() {
    super();
    this.addScore = this.addScore.bind(this);
    this.updateBPM = this.updateBPM.bind(this);
    this.updateTitle = this.updateTitle.bind(this);

    this.state = {
      bpm: 120,
      title: 'Score Title',
      scores: {},
      users: {}
    };
  }

  componentWillMount() {
    this.ref = base.syncState('/scores',
      {
        context: this,
        state: 'scores'
      }
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addScore(scoreObj) {
    const scores = {
      ...this.state.scores
    };

    scores[`score-${scoreObj.id}`] = scoreObj;
    this.setState({scores});
  }

  updateBPM(newBPM) {
    let bpm = {
      ...this.state.bpm
    };

    bpm = newBPM;
    this.setState({bpm});
  }

  updateTitle(newTitle) {
    let title = {
      ...this.state.title
    };

    title = newTitle;
    this.setState({title});
  }

  render() {
    const childWithProp = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        addScore: this.addScore,
        editBPM: this.updateBPM,
        editTitle: this.updateTitle,
        bpm: this.state.bpm,
        scores: this.state.scores,
        title: this.state.title
      });
    });
    return (
      <div>
        {childWithProp}
      </div>
    );
  }
}

export default App;
