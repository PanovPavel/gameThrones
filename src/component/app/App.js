import './App.css';
import React from "react";
import Header from '../header/header'
import RandomCharacter from "../rendom-chatacter/randomCharacter";
import Characters from "../characters/characters";
function App() {
  return (
    <div className="App">
        <Header/>
        <RandomCharacter/>
        <Characters/>
    </div>
  );
}

export default App;
