import React from 'react';
import Channel from './Channel';

export default (props) => (
	<ul>
		{props.channels.map((channel, index) => (
			<Channel key={index} channel={channel} {...props} />
		))}
	</ul>
);
