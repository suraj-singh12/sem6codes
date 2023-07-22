import React from 'react';

class MyComponent extends React.Component {
  intervalId = null;

  componentDidMount() {
    // Set up an interval to update the component every second
    this.intervalId = setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <h1>{new Date().toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default MyComponent;
