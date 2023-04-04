import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

const GetRequest = () => {
  const [users, setUsers] = useState([]);
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) 
  .then(result => setUsers(result))
  .catch(err => console.error(err));

  return(
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.id} - {user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default GetRequest;