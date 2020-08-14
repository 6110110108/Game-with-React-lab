import React from 'react';
import logo from './logo.svg';
import './App.css';
import WordCard from './WordCard';

const word1 = "Hello";
const word2 = "Smile";
const word3 = "Image";
const word4 = "Engine";
const word5 = "ability";

function refreshPage() {
  window.location.reload(false);
}

function App() {
var x = Math.floor(Math.random() * 4);
//var x = 0;
  if(x == 0) {
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
          <WordCard value={word1}/>
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
  if(x == 1) {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        🙌 Word Game ! Test your English vocabulary 🙌
        </p>
        <p>
          __________________________________________________________
        </p>
        {
          <WordCard value={word2}/>
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
  if(x == 2) {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        🙌 Word Game ! Test your English vocabulary 🙌
        </p>
        <p>
          __________________________________________________________
        </p>
        {
          <WordCard value={word3}/>
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
  if(x == 3) {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        🙌 Word Game ! Test your English vocabulary 🙌
        </p>
        <p>
          __________________________________________________________
        </p>
        {
          <WordCard value={word4}/>
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
  if(x == 4) {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        🙌 Word Game ! Test your English vocabulary 🙌
        </p>
        <p>
          __________________________________________________________
        </p>
        {
          <WordCard value={word5}/>
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
}  


export default App;
