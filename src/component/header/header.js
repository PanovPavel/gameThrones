import React, {Component} from "react";
import './header.css'
export default class Header extends Component{
    render() {
        return(
            <>
            <div className={'content'}>
                <header>
                        <div className={`caption`}>Game of thrones</div>
                        <menu>
                            <nav><a href={`#`}>Characters</a></nav>
                            <nav>Houses</nav>
                            <nav>Books</nav>
                        </menu>
                </header>
            </div>
            </>
        )
    }
}