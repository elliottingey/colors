import React from 'react';
import logo from './logo.svg';


import './App.css';





function clickMe(){
  alert(Math.random());
 
}



function randomize(){
  var alphaNumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
  var result = '';
  for (var i=0; i < 6; i++){
    result += alphaNumeric.charAt(Math.floor(Math.random() * alphaNumeric.length));
  }

  alert(result);
  //document.getElementById(bruh).style.backgroundColor = result

  var elem = document.getElementById('bruh');
  alert(elem)
  document.body.style.backgroundColor = result;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> Background Color Selector</h1>

      <div>
        <button className="button-13" onClick={randomize}>Randomize</button>
        <button className="button-13">Custom</button>
        <button className="button-13">Reset</button>
        <button className="button-13">History</button>
      </div>

   

        <img src={logo} className="App-logo" alt="logo" />
  

        <p id="bruh">bruh</p>

      </header>

      <body>
        
        <p>bruh</p>

      </body>


    </div>
  );
}

export default App;
