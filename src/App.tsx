import React, { useEffect, useState } from 'react';
import { createImportSpecifier } from 'typescript';
import './App.css';






//TODO add function here to find appropriate values

//TODO add image of color picker


function randomize(){
  //outputs a random 6 digit string with # in front to make randomized hex code
  const randColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  //alert(randomColor);

  return randColor;
}


function insertRandomColor(){
  //calls randomize() then inserts into correct body <div>
  const insertColor = randomize();
  
  //alert(insertColor);
  console.log(insertColor);

  const getHeaderElem = document.getElementById('headerID')!;
  const getBodyElem = document.getElementById('bodyID')!;

  getHeaderElem.style.backgroundColor = insertColor;
  getBodyElem.style.backgroundColor = insertColor;

  //RBGTextChange();
  return insertColor;
}
//TODO make function that sees what version the website is in (RBG or HEX),
  //then chooses correct function to display text


function resetColor() {
  const getBodyElem = document.getElementById('bodyID')!;
  const getHeaderElem = document.getElementById('headerID')!;
  //console.log(getBodyElem.style.backgroundColor);

  //TODO fix this alert. console prints rbg values, not sure why
  if (getBodyElem.style.backgroundColor === "#123456"){
    alert("Default site color is already selected.")
  }
  
  getBodyElem.style.backgroundColor = "#123456";
  getHeaderElem.style.backgroundColor = "#123456";
}



function ModeSelect() {
  //const mode = useState('RGB');
  //alert(mode);
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState<string>("");


  function changeModeHex() {
    console.log('test1= ',mode);
    setMode("Hex");
    console.log('test2= ',mode);
  };
  function changeModeRGB(){
    console.log('test1= ',mode);
    setMode("RGB");
    console.log('test2= ',mode);
  };

  console.log('test3= ', mode);
  //


  return(
    <div>
      <p>You clicked {count} times</p>
      <button className="button-action" onClick={() => setCount(count + 1)}>Click me</button>

      <div><button className="button-action" onClick={changeModeHex}>Hex</button></div>
      <div><button className="button-action" onClick={changeModeRGB}>RGB</button></div>
    </div>
  );
}

/*
// this will run when the component mounts and anytime the stateful data changes
React.useEffect(() => {
  alert('Hey, Nads here!');
});

// this will run, when the component is first initialized
React.useEffect(() => {
  alert('Hey, Nads here!');
}, []);

// this will run only when count state changes
React.useEffect(() => {
  fetch('nads').then(() => setLoaded(true));
}, [count]);

// this will run when the component is destroyed or before the component is removed from UI.
React.useEffect(() => {
  alert('Hey, Nads here');
  return () => alert('Goodbye Component');
});
**/


//TODO add correct color appearing and changing
//TODO if RGB mode use, if hex mode use, etc for h2 and other relevant parts
//TODO customize dropdown buttons
function App() {
  return (
    <div className="App">
      <header className="App-header" id="headerID">

     
      <h1 className="h1title"> Background Color Selector</h1>
      <h2 className="h2title">Color Formatting Selected: RGB</h2>
      <h2 className="h2title2">Colors: R bruh G: bruh B: bruh</h2>

      </header>

      
      <body className="App-body" id="bodyID">
        {ModeSelect()}
 
        <div>
          <button className="button-action" onClick={insertRandomColor}>Randomize</button>
          <button className="button-action" onClick={resetColor}>Reset</button>
        </div>

        <div>
          <div className="dropdown">
            <button className="dropbtn">Custom</button>
            <div className="dropdown-content" style={{right:10}}>
              <div><button className="custom-drop-btn">rgb</button></div>
              <div><button className="custom-drop-btn">Hex Values</button></div>
              <div><button className="custom-drop-btn">color picker</button></div>
              <div><a href="#">Link 3</a></div>
            </div>
          </div>


          <div className="dropdown">
            <button className="dropbtn">History</button>
            <div className="dropdown-content" style={{left:10}}>
              <div><button className="custom-drop-btn">rgb</button></div>
              <div><button className="custom-drop-btn">Hex Values</button></div>
              <div><button className="custom-drop-btn">hsla</button></div>
              <div><button className="custom-drop-btn">RBG</button></div>
              <div><a href="#">Link 3</a></div>
            </div>
          </div>


        </div>
      </body>

    </div>

   
  );
}

export default App;
