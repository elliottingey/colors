import React, { useEffect, useState } from 'react';
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


/*
function ModeSelect(modeEnter: string) {
  const [mode, setMode] = useState<string>('');

  useEffect(() => {

    function handleModeEnter(modeHandle: string){
      setMode(modeHandle);
      console.log(modeHandle);
    };
  });

    console.log(mode);
}





 useEffect(() => {setMode(modeEnter)
  },[modeEnter]);


**/
function ModeSelect(modeEnter: string) {
  const [mode, setMode] = useState<string>('');
  console.log('current mode: ',mode);

  
  useEffect(function modeSelectHex(){
    if (modeEnter === 'Hex'){
      setMode(modeEnter);
      console.log('Hex');
    }
  },[modeEnter]);

  useEffect(function modeSelectRGB(){
    if (modeEnter === 'RGB'){
      setMode(modeEnter);
      console.log('RGB');
    }
  },[modeEnter]);

  useEffect(function modeSelectPicker(){
    if (modeEnter === 'Picker'){
      setMode(modeEnter);
      console.log('Picker');
    }
  },[modeEnter]);

  
  return (
    <button className="button-hack" onClick={() => setMode(modeEnter)}>1</button>

  );
}


/*
function HeaderUpdate() {
  //add if statement here to do anything with new states
  if (mode === ''){
    console.log('blank string in header select');
  }
  else if (mode === 'Hex'){
    headerLine = 'Hex Header';
  }
  else if (mode === 'RGB'){
    headerLine = 'RGB Header';
  }
  else if (mode === 'Picker'){
    headerLine = 'Color Wheel Header';
  }
  else{
    console.log('something broke with header select');
  }

  updateHeaderLine();
  function updateHeaderLine(){
    if (mode !== ''){
      console.log('TODO header line update for mode: ',headerLine);
    }
  }

  return(
      <div>
        <div className="dropdown">
        <button className="dropbtn">Custom</button>
          <div className="dropdown-content" style={{right:10}}></div>
            <div><button className="button-action" onClick={changeModeHex}>Hex</button></div>
            <div><button className="button-action" onClick={changeModeRGB}>RGB</button></div>
            <div><button className="button-action" onClick={changeModePicker}>Color Wheel</button></div>
          </div>
        </div>
  );
}
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

 
        <div>
          <button className="button-action" onClick={insertRandomColor}>Randomize</button>
          <button className="button-action" onClick={resetColor}>Reset</button>
        </div>

        <div>
          <div className="dropdown">
            <button className="dropbtn">Custom</button>
            <div className="dropdown-content" style={{right:10}}>
              {ModeSelectHex('Hex')}
              {ModeSelectRBG('RBG')}
              {ModeSelectPicker('Picker')}

              
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
