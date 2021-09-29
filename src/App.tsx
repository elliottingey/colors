import React from 'react';
import logo from './logo.svg';


import './App.css';





function clickMe(){
  alert(Math.random());
 
}



function randomize(){
  //outputs a random 6 digit string with # in front to make randomized hex code
  var alphaNumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
  var randColor = '#';
  for (var i=0; i < 6; i++){
    randColor += alphaNumeric.charAt(Math.floor(Math.random() * alphaNumeric.length));
  }

  alert(randColor);
  //window.alert(document.getElementById('bodyID'));
  //var elem = document.getElementById('bodyID')?.innerHTML;
 // window.alert(elem);
 
 return randColor
  //var elem = document.getElementById('bruh');
  //alert(elem)
  
 // var colorChange = document.getElementById('bruh');//.style.backgroundColor = 'Red';
  //document.body.style.backgroundColor = randColor;
}



//const colorA = randColor;

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

      <body className="App-body" id="bodyID" style={{ backgroundColor: "red"}}>
        
        <p>bruh 2</p>

      </body>
      
        
      

    </div>

   
  );
}

export default App;
