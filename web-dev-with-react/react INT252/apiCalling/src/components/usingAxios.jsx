import React, {useState} from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom/client';

const UsingAxios = () => {
    const [users, setUsers] = useState([]);
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        setUsers(response.data);
    })
    .catch(error => {
        console.log(error);
    });

    return (
        <div>
            <ul>
                {
                    users && users.map(user => 
                        <li key={user.id}>{user.id} - {user.name}</li>
                        )
                }
            </ul>
        </div>
    )
}

export default UsingAxios;