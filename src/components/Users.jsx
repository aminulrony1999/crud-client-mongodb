import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData();
     const handleDeleteUser = _id =>{
        fetch(`http://localhost:5000/users/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
     }
    return (
        <div>
            {
                users.map(user => <p key = {user._id}>Name : {user.name} <br /> Email : {user.email} <button onClick={()=>{handleDeleteUser(user._id)}}>X</button></p>)
            }
        </div>
    );
};

export default Users;