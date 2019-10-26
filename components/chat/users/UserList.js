import React from 'react';
import User from './User';

export default (props) => <ul>{props.users.map((user, index) => <User key={index} user={user} />)}</ul>;
