import './App.css';
import React from "react";
import Header from '../header/header'
import RandomCharacter from "../rendom-chatacter/randomCharacter";
import Characters from "../pages/charactersPage/characters";
import Books from "../pages/BooksPage/books";
import House from "../pages/housePage/house";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import OneBook from "../pages/OneBookPage/oneBook";
import ApplePage from "../pages/ApplePage/applePage";
function App() {
  return (
      <Router >
        <div className="App">
            <Header/>
            <RandomCharacter/>
            <Routes >
                <Route path={`/character`} element={<Characters/>}/>
                <Route path={`/house`} element={<House/>}/>
                <Route path={`/books`} exact={true} element={<Books/>}/>
                <Route path={`/books/:id`} element={<OneBook/>}/>
                <Route path={'/apple/:id'} element={<ApplePage/>}/>
            </Routes>
        </div>
      </Router>
  );

}

export default App;
