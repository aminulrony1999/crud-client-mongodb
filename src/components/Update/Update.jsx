import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser = useLoaderData();
    console.log(loadedUser);
    return (
        <div>
            <h3>Name : {loadedUser.name}</h3>
            <p>Email : {loadedUser.email}</p>
            <h4>Id : {loadedUser._id}</h4>
        </div>
    );
};

export default Update;