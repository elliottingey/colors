import React from 'react';
import logo from './logo.svg';


import './App.css';





function clickMe(){
  alert(Math.random());
 
}



function randomize(){
  //outputs a random 6 digit string with # in front to make randomized hex code
  var randColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  //alert(randomColor);

  return randColor;
}

function insertRandomColor(){
  //calls randomize() then inserts into correct body <div>
  var insertColor = randomize();
  
  //alert(insertColor);
  console.log(insertColor);


  var getBodyElem = document.getElementById('bodyID')!;
  getBodyElem.style.backgroundColor = insertColor;

  return insertColor;
}

function resetColor(){
  var getBodyElem = document.getElementById('bodyID')!;

  console.log(getBodyElem.style.backgroundColor);

  //TODO fix this alert. console prints rbg values, not sure why
  if (getBodyElem.style.backgroundColor === "#123456"){
    alert("Default site color is already selected.")
  }
  
  getBodyElem.style.backgroundColor = "#123456";
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> Background Color Selector</h1>


        <img src={logo} className="App-logo" alt="logo" />
  

        <p id="bruh">bruh</p>

      </header>

      <body className="App-body" id="bodyID">
      <p>bruh 2</p>
      
      <div>
        <button className="button-13" onClick={insertRandomColor}>Randomize</button>
        <button className="button-13">Custom</button>
        <button className="button-13" onClick={resetColor}>Reset</button>
        <button className="button-13">History</button>
      </div>
        

      </body>

    </div>

   
  );
}

export default App;
