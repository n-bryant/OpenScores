import React, {Component} from 'react';
import Login from './loginForm/Login';
import base from '../base';
// import Tone from 'tone';

class App extends Component {
  constructor() {
    super();
    this.addScore = this.addScore.bind(this);
    this.setUser = this.setUser.bind(this);
    this.updateBPM = this.updateBPM.bind(this);
    this.updateTitle = this.updateTitle.bind(this);

    this.state = {
      bpm: 120,
      title: '',
      scores: {},
      user: null
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

  setUser(currUser) {
    let user = {
      ...this.state.user
    };

    user = currUser;
    this.setState({user});
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
        setUser: this.setUser,
        bpm: this.state.bpm,
        scores: this.state.scores,
        title: this.state.title,
        user: this.state.user
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
