import React, {useState} from 'react';
import axios from 'axios';

const UsingAxiosPost = () => {
    const [name, setName] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/users', {
            userName: name
        })
        .then(response => {
            console.log('Got response: ', response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Enter Username: </label>
            <input type="text" name="name" placeholder="Username" id="name" onChange={handleNameChange}/>
            
            <button type="submit">Submit</button>
        </form>
    )
}

export default UsingAxiosPost