import React from 'react';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button';

import './App.css';



function clickMe(){
  alert('you clicked me!');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> Background Color Selector</h1>

      <div>
        <button onClick={clickMe}>Button</button>
        <Button className="btn btn-primary" onClick={clickMe}>Button2</Button>
        <Button variant="primary">bruh</Button>
      </div>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>

      <body>
        

      </body>


    </div>
  );
}

export default App;
