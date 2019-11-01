import React, { Component } from 'react';
import ChannelSection from '../components/chat/channel/ChannelSection';
import UserSection from '../components/chat/users/UserSection';
import MessageSection from '../components/chat/message/MessageSection';
import Socket from '../utils/socket';

class Chat extends Component {
	state = {
		channels: [],
		activeChannel: '',
		users: [],
		messages: [],
		connected: false
	};

	componentDidMount() {
		let ws = new WebSocket('ws://localhost:4000')
		let socket = this.socket = new Socket(ws); 
		socket.on('disconnect', this.onDisconnect.bind(this));
		socket.on('channel add', this.newChannel.bind(this));
		socket.on('user add', this.addUser.bind(this));
		socket.on('user edit', this.editUser.bind(this));
		socket.on('user remove', this.removeUser.bind(this));
		socket.on('message add', this.addMessage.bind(this));
		ws.onopen = () => {
			this.setState({ connected: true });
			this.socket.emit('channel subscribe');
			this.socket.emit('user subscribe');
		}
	}

	onDisconnect() {
		this.setState({ connected: false });
	}

	newChannel(channel) {
		this.setState({ channels: [ ...this.state.channels, channel ] });
	}

	addUser(user) {
		this.setState({ users: [ ...this.state.users, user ] });
	}

	addChannel(name) {
		this.socket.emit('channel add', { name });
	}

	addMessage(message) {
		this.setState({ messages: [ ...this.state.messages, message ] });
	}

	sendMessage(body) {
		this.socket.emit('message add', { channelId: this.state.activeChannel.id, body });
	}

	setChannel(activeChannel) {
		this.setState({ activeChannel });
		this.socket.emit('message unsubscribe');
		this.setState({ messages: [] });
		this.socket.emit('message subscribe', { channelId: activeChannel.id });
	}

	setUser(name) {
		this.socket.emit('user edit', { name });
	}

	editUser(editedUser) {
		let { users } = this.state;
		users = users.map((user) => {
			user.id === editedUser.id ? edituser : user;
		});
		this.setState({ users });
	}

	removeUser(removedUser) {
		let { users } = this.state;
		users = users.filter((user) => user.id !== removedUser.id);
		this.setState({ users });
	}

	render() {
		return (
			<div>
				<ChannelSection
					{...this.state}
					addChannel={this.addChannel.bind(this)}
					setChannel={this.setChannel.bind(this)}
				/>
				<UserSection {...this.state} setUser={this.setUser.bind(this)} />
				<MessageSection {...this.state} addMessage={this.sendMessage.bind(this)} />
			</div>
		);
	}
}
export default Chat;
