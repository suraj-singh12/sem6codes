import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{display: 'inline-block', width: '49vw'}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React from Lovely Professional University 
        </a>
      </header>
    </div>
  );
}

export default App;
