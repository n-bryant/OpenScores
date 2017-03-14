import React, {Component} from 'react';
import base from '../base';
import Tone from 'tone';
import MainHeader from './MainHeader';
import MainSideBar from './MainSideBar';

class App extends Component {
  constructor() {
    super();
    this.updateTitle = this.updateTitle.bind(this);

    this.state = {
      title: 'Score Title'
    };
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
        editTitle: this.updateTitle,
        title: this.state.title
      });
    });

    return (
      <div>
        <MainHeader/>
        <MainSideBar/>
        <button id="chord" onMouseDown={this.playChord} onMouseUp={this.pauseChord}>Tone Me, Bruh!</button>
        {childWithProp}
      </div>
    );
  }
}

export default App;
