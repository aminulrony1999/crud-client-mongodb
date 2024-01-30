import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser = useLoaderData();
    console.log(loadedUser);
    return (
        <div>
            <h3>Update information of {loadedUser.name}</h3>
            <form>
                <input type="text" name="name" id="" defaultValue={loadedUser?.name} /> <br />
                <input type="email" name="name" id="" defaultValue={loadedUser?.email} /> <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;