import React, {Component} from 'react';
import base from '../base';
import Tone from 'tone';

class App extends Component {
  constructor() {
    super();
    this.updateBPM = this.updateBPM.bind(this);
    this.updateTitle = this.updateTitle.bind(this);

    this.state = {
      bpm: 120,
      title: 'Score Title'
    };
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
        editBPM: this.updateBPM,
        editTitle: this.updateTitle,
        bpm: this.state.bpm,
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
