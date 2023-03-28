import React from 'react';
import {useRef} from 'react';


const UncontrolledComponent = () => {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Username: ${inputRef1.current.value}, Password: ${inputRef2.current.value}`)
        // check here: it's .current.value
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="uname">
                Username:
                <input type="text" name="uname" id="uname" ref={inputRef1}/>
            </label>
            <label htmlFor="password">
                Password:
                <input type="password" name="password" id="password" ref={inputRef2}/>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default UncontrolledComponent;