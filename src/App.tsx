import React from 'react';
import './App.css';





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

  var getHeaderElem = document.getElementById('headerID')!;
  var getBodyElem = document.getElementById('bodyID')!;

  getHeaderElem.style.backgroundColor = insertColor;
  getBodyElem.style.backgroundColor = insertColor;

  //RBGTextChange();
  return insertColor;
}
//TODO make function that sees what version the website is in (RBG or HEX),
  //then chooses correct function to display text


function resetColor() {
  var getBodyElem = document.getElementById('bodyID')!;
  var getHeaderElem = document.getElementById('headerID')!;
  //console.log(getBodyElem.style.backgroundColor);

  //TODO fix this alert. console prints rbg values, not sure why
  if (getBodyElem.style.backgroundColor === "#123456"){
    alert("Default site color is already selected.")
  }
  
  getBodyElem.style.backgroundColor = "#123456";
  getHeaderElem.style.backgroundColor = "#123456";
}

function RBGTextChange() {
  var getBodyElem = document.getElementById('bodyID')!;
  alert(getBodyElem.style.backgroundColor);

}



var siteColor = '123456';
//TODO add correct color appearing and changing
function App() {
  return (
    <div className="App">
      <header className="App-header" id="headerID">
      <h1 className="h1title"> Background Color Selector</h1>

      
      <h2>Your Color: #{siteColor}</h2>

      </header>



      <body className="App-body" id="bodyID">
        
        <div>
          <button className="button-action" onClick={insertRandomColor}>Randomize</button>
          <button className="button-action" onClick={resetColor}>Reset</button>
        </div>

        <div>
          <div className="dropdown">
            <button className="dropbtn">Custom</button>
            <div className="dropdown-content" style={{right:10}}>
              <button className="button-action" onClick={insertRandomColor}>Randomize</button>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">History</button>
            <div className="dropdown-content" style={{left:10}}>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>


        </div>
      </body>

    </div>

   
  );
}

export default App;
