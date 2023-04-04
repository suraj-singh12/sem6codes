import React from 'react';
import {useState} from 'react';

const FuncComp = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setName(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Username: ${name} Password: ${password}`);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="uname">
                Username:
                <input type="text" name="uname" id="uname" onChange={handleUsernameChange}/>
            </label>
            <label htmlFor="password">
                Password:
                <input type="password" name="password" id="password" onChange={handlePasswordChange}/>
            </label>

            <button type="submit">Submit</button>
        </form>
    )
}

export default FuncComp;