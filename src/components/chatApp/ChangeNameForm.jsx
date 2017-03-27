import React, {Component} from 'react';

class ChangeNameForm extends Component {

constructor() {
  super();
  this.state = {newName: ''};
}

  // getInitialState() {
  //   return {newName: ''};
  // }

  onKey(event) {
    this.setState({ newName : event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let newName = this.state.newName;
    this.props.onChangeName(newName);
    this.setState({ newName: ''});
  }

  render() {
    return(
      <div className="change_name_form">
        <h3> Change Name </h3>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.onKey.bind(this)}
            value={this.state.newName}
            />
        </form>
      </div>
    );
  }
}

export default ChangeNameForm;
