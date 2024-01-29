import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            {
                users.map(user => <p key = {user._id}>Name : {user.name} <br /> Email : {user.email}</p>)
            }
        </div>
    );
};

export default Users;