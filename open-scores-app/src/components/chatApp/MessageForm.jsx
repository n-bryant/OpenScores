import React, {Component} from 'react';

class MessageForm extends Component {

constructor(props) {
  super(props);
  this.state = {text: ''}
}
//
// getInitialState() {
//   return {text: ''}
// }

handleSubmit(event) {
  event.preventDefault();
  let message = {
    user: this.props.user,
    text: this.state.text
  }
  this.props.onMessageSubmit(message);
  this.setState({ text: this.newMessage});
  // this.form.clear();
  // this.state.text = "";

}

changeHandler(event) {
  this.setState({ text : event.target.value});
  this.inputForm.value="";
  this.newMessage.value="";
}

  render() {
    return(
      <div className="message_form">
        <h3>Write New Message</h3>
        <form ref={(inputForm) => this.importForm = inputForm} onSubmit={this.handleSubmit.bind(this)}>
          <input
            ref={(newMessage) => this.newMessage = newMessage}
            onChange={this.changeHandler.bind(this)}
            value={this.state.text}
            />
        </form>
      </div>
    );
  }
}

export default MessageForm;
