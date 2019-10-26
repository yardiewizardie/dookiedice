import React, { Component } from 'react';

class UserForm extends Component {
	onSubmit(event) {
		event.preventDefault();
		const node = this.refs.user;
		const userName = node.value;
		this.props.setUser(userName);
		node.value = '';
	}

	render() {
		return (
			<form onSubmit={this.onSubmit.bind(this)}>
				<input type="text" ref="user" placeholder="Set your name" />
			</form>
		);
	}
}

export default UserForm;
