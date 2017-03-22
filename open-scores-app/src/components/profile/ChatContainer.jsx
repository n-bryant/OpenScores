import React, {Component} from 'react';
import io from 'socket.io-client';
import $ from 'jquery';


// (function() {
// let socket = io();
// document.querySelector('form').addEventListener('submit', () => {
//   socket.emit('chat message', document.getElementById('m').value());
//   document.getElementById('m').value('');
//   return false;
// });
// });

class ChatContainer extends Component {

componentDidMount() {
  let socket = io();
  $('form').submit(function(){
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
}

    constructor() {
        super();
        this.chatApp = this.chatApp.bind(this);
console.log(io(`http://localhost:3001`));
    }

    chatApp(event) {
        event.preventDefault();
        console.log(this.chatInput.value);
    }

    render() {
        return (
            <div>
                <ul id="messages"></ul>
                <form className="chat-form-container" action=""onSubmit={this.chatApp.bind(this)}>
                    <input id="m" autocomplete="off" required placeholder="BE SOCIAL" ref={(input) => {
                        this.chatInput = input
                    }}/>
                    <button>Chat</button>
                </form>
            </div>
        );
    }
}

export default ChatContainer;
