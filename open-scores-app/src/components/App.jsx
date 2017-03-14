import React, {Component} from 'react';
import base from '../base';
import Tone from 'tone';

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
        {childWithProp}
      </div>
    );
  }
}

export default App;
