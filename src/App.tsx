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



function ColorValSelection() {
  const [colorVal, setColorVal] = useState('');

  if(colorVal === 'Hex'){
    console.log('1 bruh');
    
  }
  else if(colorVal === 'RGB'){
    console.log('2 bruh');
    
  }
  else if(colorVal === 'Color Wheel'){
    console.log('3 bruh');
    
  }


  return (
<div>
  <h2 className="h2title2">Selected Color Type: {colorVal}</h2>
  <div>
    <button className="button-action" onClick={insertRandomColor}>Randomize</button>
    <button className="button-action" onClick={resetColor}>Reset</button>
  </div>
  <div>
    <div className="dropdown">
      <button className="dropbtn">Custom</button>
      <div className="dropdown-content" style={{right:10}}>
        <div><button className="custom-drop-btn" onClick={() => setColorVal('Hex')}>Hex</button></div>
        <div><button className="custom-drop-btn" onClick={() => setColorVal('RGB')}>RGB</button></div>
        <div><button className="custom-drop-btn" onClick={() => setColorVal('Color Wheel')}>Color Wheel</button></div>
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
</div>
  );
}




function headerSet(count: number) {
  var headerText = ''; 

  if(count === 1){
    headerText = 'Color Formatting Selected: #';
    //console.log('1 bruh moment');
  }
  else if(count === 2){
    headerText = 'Color Formatting Selected: RGB';
    //console.log('2 bruh')
  }
  else if(count === 3){
    headerText = 'Color Formatting Selected: ';
    //console.log('3 bruh')
  }
  // Similar to componentDidMount and componentDidUpdate:  useEffect(() => {    // Update the document title using the browser API    document.title = `You clicked ${count} times`;  });
  return headerText;
}


//TODO add correct color appearing and changing
//TODO if RGB mode use, if hex mode use, etc for h2 and other relevant parts
//TODO customize dropdown buttons
function App() {
  return (
    <div className="App">
      <header className="App-header" id="headerID">

     
      <h1 className="h1title"> Background Color Selector</h1>
      
      
      <h2 className="h2title2">Colors: R bruh G: bruh B: bruh</h2>

      </header>

      
      <body className="App-body" id="bodyID">
      {ColorValSelection()}
      


      </body>

    </div>

   
  );
}

export default App;
