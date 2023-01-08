import React, {Component} from "react";
import './books.css'
import BooksModel from "../../../service/BooksModel";
import DataItem from "../../dataList/dataItem";
import DescriptionData from "../../descriptionCharacter/descriptionData";
import {Field} from "../../Field/field";
import { useLocation } from "react-router-dom";
export default class Books extends Component{
    constructor(props) {
        super(props);
        this.state = {
            books: null,
        }
    }
    onChangeId = (dataSelected)=>{
        this.setState({
            books: dataSelected,
        })
    }
    componentDidMount() {

    }
    getIdUrl(){

    }
    render() {

        let {books} = this.state
        const description = ()=>{
            if (books === null) return
            else {
                return (
                    <div className={'charactersDescription'}>
                        <DescriptionData data={books}>
                            <Field field={`name`} label={`Name`}></Field>
                            <Field field={`authors`} label={`Authors`}></Field>
                            <Field field={`numberOfPages`} label={`NumberOfPages`}></Field>
                            <Field field={`released`} label={`Released`}></Field>
                        </DescriptionData>
                    </div>
                )
            }
        }
        return(
            <>
                <div className={'content'}>
                    <div className={`characterBlock`}>
                        <div className='charactersItem'>
                            <ul>
                                <DataItem
                                    renderItem={(item)=>item.name}
                                    onChangeId={(dataSelected)=>{this.onChangeId(dataSelected)}}
                                    data={new BooksModel().getAllBooks()}
                                    dataId={(id)=>{return new BooksModel().getBook(id)}}

                                />
                            </ul>
                        </div>
                        {description()}
                    </div>
                </div>
            </>
        )
    }
}


