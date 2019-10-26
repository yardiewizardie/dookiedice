import React from 'react';
import UserList from './UserList';
import UserForm from './UserForm';

export default (props) => (
    <div>
        <UserList {...props} />
        <UserForm {...props} />
    </div>
)
