import React from 'react';
import Message from './Message';

export default (props) => <ul>{props.messages.map((message, index) => <Message key={index} message={message} />)}</ul>;
