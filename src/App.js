import React from 'react';
import logo from './logo.svg';
import './App.css';
import WordCard from './WordCard';

function refreshPage() {
  window.location.reload(false);
}

var word = "";
var rand = Math.floor(Math.random() * 5);

switch (rand) {
  case 0:
    word = "Hello";
    break;
  case 1:
    word = "Smile";
    break;
  case 2:
    word = "Image";
    break;
  case 3:
    word = "Engine";
    break;
  case 4:
    word = "ability";
    break;
}

function App() {
    return (
      <div id="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        🙌 Word Game ! Test your English vocabulary 🙌
        </p>
        <p>
          __________________________________________________________
        </p>
        {
          <WordCard value={word}/>
        }
        <button onClick={refreshPage}>Click to reload the Word!</button>
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

export default App;
