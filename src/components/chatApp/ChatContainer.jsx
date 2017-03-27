import React, {Component} from 'react';
import UsersList from './UsersList';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import ChangeNameForm from './ChangeNameForm';
import io from 'socket.io-client';
import $ from 'jquery';

let socket = io(`http://localhost:3001`)


class ChatContainer extends Component {

  constructor() {
    super();
    this.state = {users: [], messages:[], text: ''};
  }
  //
  // getInitialState() {
  //   return {users: [], messages: [], text: ''};
  // }

  componentDidMount() {
    socket.on('init', this._initialize);
    socket.on('send:message', this._messageRecieved);
    socket.on('user:join', this._userJoined);
    socket.on('user:left', this._userLeft);
    socket.on('change:name', this._userChangeName);
    socket.on(`server:event`, data => {
      this.setState({data})
    })
    // socket.on(`sendMessage`, function(msg) {
    //   console.log('Message:' + message);
    // })
  }

  _initialize(data) {
    let {users, name} = data;
    this.setState({users, user:name});
  }

  _messageRecieve(message) {
    let {messages} = this.state;
    messages.push(message);
    this.setState({messages});
  }

  _userJoined(data) {
    let {users, messages} = this.state;
    let {name} = data;
    users.push(name);
    messages.push({
      user:'APPLICATION BOT',
      text: name +' Joined'
    });
    this.setState({users, messages});
  }

  _userLeft(data) {
    let {users, messages} = this.state;
    let {name} = data;
    let index = users.indexOf(name);
    users.splice(index, 1);
    messages.push({
      user: 'APPLICATION BOT',
      text: name +' LEFT'
    });
    this.setState({users, messages});
  }

  _userChangeName(data) {
    let {oldName, newName} = data;
    let {users, messages} = this.state;
    let index = users.indexOf(oldName);
    users.splice(index, 1, newName);
    messages.push({
      user: 'APPLICATION BOT',
      text : 'Change Name : ' + oldName == ' ==> '+ newName
    });
    this.setState({users, messages});
  }

  handleChangeName(newName) {
    let oldName = this.state.user;
    socket.emit('change:name', { name : newName}, (result) => {
      if(!result) {
        return alert('There was an error changing your name');
      }
      let {users} = this.state;
      let index = users.indexOf(oldName);
      users.splice(index, 1, newName);
      this.setState({users, user: newName});
    });
  }

  // sendMessage = message => {
  //   socket.emit(`client:sendMessage`, message)
  // }
  //   constructor() {
  //       super();
  //       this.handleSubmit = this.handleSubmit.bind(this);
  //   }

    // handleSubmit(event) {
    //     event.preventDefault();
    //
    //     console.log(this.chatInput.value);
    //     // sendMessage = chatMessage => {
    //     //   socket.emit(`chatMessage`, chatMessage)
    //     // }
    // }


    // <Child
    //   socket = {socket}
    //   sendMessage = {this.sendMessage}
    //   />

    // <ul id="messages"></ul>
    // <form className="chat-form-container" action=""onSubmit={this.handleSubmit.bind(this)}>
    //     <input id="m" autoComplete="off" placeholder="BE SOCIAL" ref={(input) => {
    //         this.chatInput = input
    //     }}/>
    //     <button>Chat</button>
    // </form>


    render() {
        return (
          <div>
              <UsersList
                users={this.state.users} />
              <MessageList
                messages={this.state.messages}
                />
              <MessageForm onMessageSubmit={this.handleMessageSubmit} user={this.state.user} />
              <ChangeNameForm onChangeName={this.handleChangeName} />
          </div>
        );
    }
}

export default ChatContainer;
