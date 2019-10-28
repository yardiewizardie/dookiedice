import React from 'react';
import fecha from 'fecha';

export default (props) => (
	<li>
		<div>
			<i>{fecha.format(props.message.createdAt, 'shortTime')}</i>
			{props.message.author}
		</div>:
		<div>{props.message.body}</div>
	</li>
);
