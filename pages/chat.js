import React, { Component } from 'react';
import ChannelSection from '../components/chat/channel/ChannelSection';
import UserSection from '../components/chat/users/UserSection';
import MessageSection from '../components/chat/message/MessageSection';

class Chat extends Component {
	state = {
        channels: [],
        activeChannel: '',
        users: [], 
        messages: []
	};

	addChannel(name) {
		let { channels } = this.state;
		channels.push({ id: channels.length, name });
		this.setState({ channels });
	}

	setChannel(activeChannel) {
		this.setState({ activeChannel });
    }
    
    setUser(name) {
        let { users } = this.state;
        users.push({ id: users.length , name });
        this.setState({ users })
    }

    addMessage(message) {
        let { messages, users } = this.state;
        let createdAt = new Date;
        let author = users.length > 0 ? users[0].name: 'Anon';
        messages.push({ id: messages.length, message, createdAt, author });
        this.setState({ messages })
        console.log(messages)
    }

	render() {
		return (
            <>
			<ChannelSection
				{...this.state}
				addChannel={this.addChannel.bind(this)}
				setChannel={this.setChannel.bind(this)}
			/>
            <UserSection {...this.state} setUser={this.setUser.bind(this)} />
            <MessageSection {...this.state} addMessage={this.addMessage.bind(this)} />
            </>
		);
	}
}
export default Chat;
