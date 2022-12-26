import React, {Component} from "react";
import './books.css'
import CharactersItem from "../characterItem/charactersItem";
import DescriptionCharacter from "../descriptionCharacter/descriptionCharacter";
import BooksModel from "../../service/BooksModel";

export default class Books extends Component{
    render() {
        return(
            <>
                <div className={'content'}>
                    <div className={`characterBlock`}>
                        <div className='charactersItem'>
                            <ul>
                                <BooksItem/>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

class BooksItem extends React.Component{
    state = {
        books: []
    }
    componentDidMount() {
        this.getBooks();
    }

    getBooks(){
        const booksModel = new BooksModel();
        booksModel.getAllBooks()
            .then(bk=>{
                this.setState({
                    books: bk
                })
            })
    }

    render() {
        const {books} = this.state
        const allBooks = books.map((item)=>{
            return(
                <li>{item.name}</li>
            )
        })
        return(
            <>
                {allBooks}
            </>
        )
    }
}

