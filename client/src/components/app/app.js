import React, { useEffect, useState } from 'react';
import logo from '../../logo.svg';
import './app.css';
import { getRandomString } from "@pnp/common";
import { getAccessToken } from '../../services/spService';

function App() {
  const [randomString, setRandomString] = useState('');
  
  useEffect(() => {
    const randomString = getRandomString(22);
    setRandomString(randomString);
    getAccessToken();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload: {randomString}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
