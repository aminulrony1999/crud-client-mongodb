import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            {
                console.log(users)
            }
        </div>
    );
};

export default Users;