import React, {Component} from 'react';

class ChatContainer extends Component {
    constructor() {
        super();
        this.chatApp = this.chatApp.bind(this);
    }
    chatApp(event) {
        console.log("in");
        event.preventDefault();
        console.log(this.chatInput.value);
    }

    render() {
        return (
            <div>
                <ul id="messages"></ul>
                <form action="" onSubmit={this.chatApp.bind(this)}>
                    <input id="m" autoComplete="off" required placeholder="BE SOCIAL" ref={(input) => {
                        this.chatInput = input
                    }}/>
                    <button>Chat</button>
                </form>
            </div>
        );
    }
}

export default ChatContainer;
