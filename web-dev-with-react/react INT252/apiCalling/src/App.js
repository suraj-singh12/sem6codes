// example of controlled component

import React from 'react';

class ControlledComponent extends React.Component {
    state = {
        username: '',
        password: '',
    }

    handleUsernameChange = (event) => {
        this.setState({ username: event.target.value });
    }
    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.username, this.state.password);
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="username">
                    Username:
                    <input type="text" id="username" value={this.state.username} onChange={this.handleUsernameChange} />
                </label>
                <label htmlFor="password">
                    Password:
                    <input type="password" id="password" value={this.state.password} onChange={this.handlePasswordChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default ControlledComponent;


// controlled components: https://reactjs.org/docs/forms.html#controlled-components