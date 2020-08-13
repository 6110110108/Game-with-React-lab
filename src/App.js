import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word1 = "Hello";
const word2 = "Smile";
const word3 = "Image";
const word4 = "Engine";
const word5 = "ability";

function App() {
  var x = Math.floor(Math.random() * 4);
  if(x == 0) {
    return (
      <div className="App">
            {
              <WordCard value={word1}/>
            }
      </div>
    );
  }
  if(x == 1) {
    return (
      <div className="App">
            {
              <WordCard value={word2}/>
            }
      </div>
    );
  }
  if(x == 2) {
    return (
      <div className="App">
            {
              <WordCard value={word3}/>
            }
      </div>
    );
  }
  if(x == 3) {
    return (
      <div className="App">
            {
              <WordCard value={word4}/>
            }
      </div>
    );
  }
  if(x == 4) {
    return (
      <div className="App">
            {
              <WordCard value={word5}/>
            }
      </div>
    );
  }
}

export default App;

/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ABC order by clicking Game
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

