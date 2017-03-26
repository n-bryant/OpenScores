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
    let message = this.input.value;
    socket.emit("new-message", message);
    this.input.value = "";
  }

  rotateIcon(event) {
    event.preventDefault();
    const chatButton = document.querySelector('.chat-toggle');
    const chatWindow = document.querySelector('.chat');
    const bubble = document.querySelector('.bubble');
    const arrow = document.querySelector('.arrow');
    if (chatButton.classList.contains('up')) {
      chatButton.classList.remove('up');
      chatButton.classList.add('down');
      arrow.classList.remove('is-hidden');
      bubble.classList.add('is-hidden');
      chatWindow.classList.remove('is-hidden');
    } else if (chatButton.classList.contains('down')) {
      chatButton.classList.remove('down');
      chatButton.classList.add('up');
      bubble.classList.remove('is-hidden');
      arrow.classList.add('is-hidden');
      chatWindow.classList.add('is-hidden');
    }
  }

  render() {
    let i = 0;
    let self = this;
    let id = Date.now();
    let messages = self.state.messages.map(function(msg) {
      return <li className="user-message is-flex" key={i++}>
        <div className="user-icon"></div>
        <div className="user-text">{msg}</div>
        </li>
    });

    return(
      <div className="main-chat-container">
        <div className="chat is-hidden">
        <ul className="message-text-container">
          {messages}
        </ul>
        <fieldset name="chat-input">
        <form ref={(message) => this.message = message} onSubmit={this.submitMessage.bind(this)}  name="chat form">
          <div className="input-container is-flex">
        <input ref={(input) => this.input = input} className="message-container" id="message" type="text" name="chat form input"></input>
        <div className="current-user-icon is-flex">
          <img src="https://s-media-cache-ak0.pinimg.com/736x/bf/b6/19/bfb6192a36bb33728209ac1040f2f574.jpg"></img>
        </div>
        </div>
        </form>
        </fieldset>
        </div>
        <div className="chat-toggle down" onClick={this.rotateIcon.bind(this)}>
          <img className="arrow is-hidden" src="https://image.flaticon.com/icons/svg/25/25223.svg"></img>
          <img className="bubble" src="https://image.flaticon.com/icons/svg/25/25663.svg"></img>
        </div>
      </div>
    );
  }
}

export default ReactApp;