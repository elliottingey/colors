import React from 'react';
import { NavDropdown } from 'react-bootstrap';

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

        <p id="bruh">bruh</p>

      </header>

      <body className="App-body" id="bodyID">
      <p>bruh 2</p>
      
      <div>
        <button className="button-action" onClick={insertRandomColor}>Randomize</button>

        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
            <span className="caret">Custom</span></button>
              <ul className="dropdown-menu">
                <li>Bruh1</li>
                <li>Bruh2</li>
              </ul>
        </div>
        

        <button className="button-action" onClick={resetColor}>Reset</button>
        <button className="button-dropdown">History</button>
      </div>
        

      </body>

    </div>

   
  );
}

export default App;
