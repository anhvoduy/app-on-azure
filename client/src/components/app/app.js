import React, { useEffect, useState } from 'react';
import logo from '../../logo.svg';
import './app.css';
import authService from '../../services/authService';
import baseService from '../../services/baseService';

function App() {
  const [firstEmployee, setFirstEmployee] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      let tokenInfo = await authService.getAccessToken();
      let { token_type, access_token } = tokenInfo;    
      let emp = await baseService.getEmployee(token_type, access_token);
      setFirstEmployee(emp);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload: {firstEmployee ? firstEmployee.Title : 'None'}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React App
        </a>
      </header>
    </div>
  );
}

export default App;
