import React from 'react';

const CRUD = () => {
    const handleAddUser = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {name,email};
        console.log(user);
        fetch('http://localhost:5000/users',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div>
            <form onSubmit={handleAddUser}>
                <label htmlFor="name">Enter your name : </label> <br />
                <input type="text" name="name" id="" /> <br />
                <label htmlFor="email">Enter your email:</label> <br />
                <input type="email" name="email" id="" /> <br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default CRUD;