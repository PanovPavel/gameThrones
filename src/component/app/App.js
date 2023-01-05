import './App.css';
import React from "react";
import Header from '../header/header'
import RandomCharacter from "../rendom-chatacter/randomCharacter";
import Characters from "../charactersPage/characters";
import Books from "../BooksPage/books";
import House from "../housePage/house";
function App() {
  return (
    <div className="App">
        <Header/>
        {/*<RandomCharacter/>*/}
        <Characters/>
        <Books/>
        <House/>
    </div>
  );
}

export default App;
