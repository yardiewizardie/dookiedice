import React from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

export default (props) => (
	<div>
		<h6>{props.activeChannel.name}</h6>
		<MessageList {...props} />
		<MessageForm {...props} />
	</div>
);
