import React, {Component} from "react";
import './books.css'
import BooksModel from "../../service/BooksModel";
import DataItem from "../dataList/dataItem";
import CharacterModel from "../../service/CharacterModel";

export default class Books extends Component{
    state = {
        id: null
    }
    onChangeId(id){
        this.setState({
            id:id
        })
    }

    render() {
        return(
            <>
                <div className={'content'}>
                    <div className={`characterBlock`}>
                        <div className='charactersItem'>
                            <ul>
                                <DataItem renderItem={(item)=>item.name} onChangeId={(id)=>this.onChangeId(id)} data={new BooksModel().getAllBooks()}/>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


