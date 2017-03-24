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

  rotateIcon(event) {
    event.preventDefault();
    const chatButton = document.querySelector('.chat-toggle');
    const chatWindow = document.querySelector('.chat');
    if (chatButton.classList.contains('up')) {
      chatButton.classList.remove('up');
      chatButton.classList.add('down');
      chatWindow.classList.remove('is-hidden');
    }else if (chatButton.classList.contains('down')) {
      chatButton.classList.remove('down');
      chatButton.classList.add('up');
      chatWindow.classList.add('is-hidden');
    }
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
        <div className="chat is-hidden">
        <ul className="message-text-container">
          {messages}
        </ul>
        <fieldset>
        <form onSubmit={(message) => self.submitMessage(message)}>
        <input className="message-container" id="message" type="text"></input>
        </form>
        </fieldset>
        </div>
        <div className="chat-toggle up" onClick={this.rotateIcon.bind(this)}>
          <img src="https://image.flaticon.com/icons/svg/25/25629.svg"></img>
        </div>
      </div>
    );
  }
}

export default ReactApp;
