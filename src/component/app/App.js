import './App.css';
import React from "react";
import Header from '../header/header'
import RandomCharacter from "../rendom-chatacter/randomCharacter";
import Characters from "../characters/characters";
import Books from "../BooksPage/books";

function App() {
  return (
    <div className="App">
        <Header/>
        <RandomCharacter/>
        <Characters/>
        <Books/>
    </div>
  );
}

export default App;
