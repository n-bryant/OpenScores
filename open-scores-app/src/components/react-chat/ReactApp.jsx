import React, {Component} from 'react';
import io from 'socket.io-client';
import $ from 'jquery';

let socket = io(`http://localhost:3001`);

class ReactApp extends Component {

  constructor() {
    super();
    this.state = {
      messages: []
    }
  }
  componentDidMount() {
    let self = this;
    socket.on("receive-message", function(msg){
      let messages = self.state.messages;
        messages.push(msg);
      self.setState({messages: messages});
      console.log(self.state.messages);
    });
  }


  submitMessage(event) {
    event.preventDefault();
    let message = document.getElementById("message").value;
    socket.emit("new-message", message);
    console.log(message);
  }

  render() {
    let i = 0;
    let self = this;
    let id = Date.now();
    let messages = self.state.messages.map(function(msg) {
      return <li key={i++}>{msg}</li>
    });




    return(
      <div className="main-chat-container">
        <ul className="message-text-container">
          {messages}
        </ul>
        <fieldset>
        <form onSubmit={(message) => self.submitMessage(message)}>
        <input className="message-container" id="message" type="text"></input>
        </form>
        </fieldset>
      </div>
    );
  }
}

export default ReactApp;
