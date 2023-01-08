import React, {Component} from "react";
import './header.css'
import {Link} from 'react-router-dom'
export default class Header extends Component{
    render() {
        return(
            <>
            <div className={'content'}>
                <header>
                    <div className={`caption`}><Link to={`/`}>Game of thrones</Link></div>
                        <menu>
                            <nav><Link to={`/character`}>Characters</Link></nav>
                            <nav><Link to={`house`}>Houses</Link></nav>
                            <nav><Link to={`books`}>Books</Link></nav>
                        </menu>
                </header>
            </div>
            </>
        )
    }
}