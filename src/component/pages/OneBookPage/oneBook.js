import React, {Component, useEffect, useState} from "react";
import BooksModel from "../../../service/BooksModel";
import DescriptionData from "../../descriptionCharacter/descriptionData";
import {Field} from "../../Field/field";
import { useParams } from "react-router-dom";

export default function OneBook() {
    const [dataBook, setDataBook] = useState({});
    const {id} = useParams();

    useEffect(() => {
        new BooksModel().getBook(id)
            .then(response=>{
                setDataBook(response);
            })
    });
        return(
            <>
                <div className={'content'}  style={{backgroundColor: `white`}}>
                    <DescriptionData data={dataBook} >
                        <Field field={`name`} label={`Name`}></Field>
                        <Field field={`authors`} label={`Authors`}></Field>
                        <Field field={`numberOfPages`} label={`NumberOfPages`}></Field>
                        <Field field={`released`} label={`Released`}></Field>
                    </DescriptionData>
                </div>
            </>
        )
}