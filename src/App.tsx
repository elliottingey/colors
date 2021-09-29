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

var siteColor = '123456';
//TODO add correct color appearing and changing
function App() {
  return (
    <div className="App">
      <header className="App-header">
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
              <a href="#">Link 1</a>
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
