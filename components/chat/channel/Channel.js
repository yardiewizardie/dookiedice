import React, { Component } from 'react';

class Channel extends Component {
	onClick(event) {
		event.preventDefault();
		this.props.setChannel(this.props.channel);
	}

	render() {
		return (
			<li className={this.props.channel === this.props.activeChannel ? 'active': ''}>
				<a onClick={this.onClick.bind(this)}>{this.props.channel.name}</a>
			</li>
		);
	}
}

export default Channel