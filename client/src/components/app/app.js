import React, { useEffect, useState } from 'react';
import logo from '../../logo.svg';
import './app.css';
import { getRandomString, setup as pnpSetup } from "@pnp/common";
import { sp } from "@pnp/sp-commonjs";
import { SPFetchClient } from "@pnp/nodejs-commonjs";

const site_url = 'https://development365.sharepoint.com/sites/develop/';
const client_id = '5ca2f988-4d5f-49f8-be14-cdc63f0cce99';
const client_secret = 'mgJ9PfILUEpJClCeSAF8aEI3oM8ul4GyRm30vaQ7xt4=';

function App() {
  const [randomString, setRandomString] = useState('');
  
  useEffect(() => {
    const randomString = getRandomString(22);
    setRandomString(randomString);

    // configure your node options (only once in your application)
    sp.setup({
      sp: {
          fetchClientFactory: () => {
              return new SPFetchClient(site_url, client_id, client_secret);
          },
      },
    });

    // make a call to SharePoint and log it in the console
    sp.web.select("Title", "Description").get().then(w => {
      console.log(JSON.stringify(w, null, 4));
    });

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
