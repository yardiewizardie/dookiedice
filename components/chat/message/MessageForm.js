import React, { Component } from 'react';

class MessageForm extends Component {
	onSubmit(event) {
		event.preventDefault();
		const node = this.refs.message;
		const message = node.value;
		this.props.addMessage(message);
		node.value = '';
	}

	render() {
		return (
			<form onSubmit={this.onSubmit.bind(this)}>
				{this.props.activeChannel.id !== undefined && <input ref="message" type="text" placeholder="Chat" />}
			</form>
		);
	}
}

export default MessageForm;
