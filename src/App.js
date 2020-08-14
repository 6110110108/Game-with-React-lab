import React from 'react';
import logo from './logo.svg';
import './App.css';
import WordCard from './WordCard';

var word = "";
var rand = Math.floor(Math.random() * 11);

switch (rand) {
  case 0: word = "Hello"; break;
  case 1: word = "Smile"; break;
  case 2: word = "Image"; break;
  case 3: word = "Engine"; break;
  case 4: word = "Signal"; break;
  case 5: word = "Apple"; break;
  case 6: word = "Market"; break;
  case 7: word = "Vanilla"; break;
  case 8: word = "Laptop"; break;
  case 9: word = "Digital"; break;
  case 10: word = "Motor"; break;
}

function App() {
    return (
      <div id="App">
        <header className="App-header">
        <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" className="App-logo" alt="logo" />
        <p>
        🙌 Word Game ! Test your English vocabulary 🙌
        </p>
        <p>
          __________________________________________________________
        </p>
        {
          <WordCard value={word}/>
        }
        <button onClick={refreshPage} class="button">Click to reload the Word!</button> 
        <p>
          __________________________________________________________
        </p>
        <p>
        🌍 6110110108 SEOULCHA RATMUMAD SECTION 02 | 3SA03 REACT LAB. 🌍
        </p>
      </header>
      </div>
      
    );
}

function refreshPage() {
    window.location.reload(false);
}

export default App;