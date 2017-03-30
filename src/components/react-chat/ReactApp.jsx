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

  toggleChatWindow() {
    const chatWindow = document.querySelector('.chat');
    const arrowIcon = document.querySelector('.arrow');
    const bubbleIcon = document.querySelector('.bubble');
    if (chatWindow.classList.contains('is-hidden')) {
      chatWindow.classList.remove('is-hidden');
      arrowIcon.classList.remove('is-hidden');
      bubbleIcon.classList.add('is-hidden');
    } else {
      chatWindow.classList.add('is-hidden');
      arrowIcon.classList.add('is-hidden');
      bubbleIcon.classList.remove('is-hidden');
    }
  }

  render() {
    let i = 0;
    let self = this;
    let id = Date.now();
    let messages = self.state.messages.map(function(msg) {
      return <li className="user-message is-flex" key={i++}>
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
                  <img src={this.props.avatar}></img>
                </div>
              </div>
            </form>
          </fieldset>
        </div>
        <div className="chat-toggle vertical" onClick={this.toggleChatWindow}>
          <img className="arrow is-hidden" src="https://image.flaticon.com/icons/svg/25/25223.svg"></img>
          <img className="bubble" src="https://image.flaticon.com/icons/svg/25/25663.svg"></img>
        </div>
        <div className="message-count is-flex">{this.state.messages.length}</div>
      </div>
    );
  }
}

export default ReactApp;
