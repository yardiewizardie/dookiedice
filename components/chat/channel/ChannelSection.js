import React from 'react';
import ChannelList from './ChannelList';
import ChannelForm from './ChannelForm';

export default (props) => (
    <div>
        <ChannelList {...props} />
        <ChannelForm {...props} />
    </div>
)
