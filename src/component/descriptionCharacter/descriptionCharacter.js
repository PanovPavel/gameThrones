import React from "react";
import "./descriptionCharacter.css"

export default class DescriptionCharacter extends React.Component{
    render() {
        return(
            <>
                <div className={'randomCharacterDescription'}>
                    <div className={`gender`}>
                        <mark>Gender</mark>
                        <span>ment</span>
                    </div>
                    <div className={`born`}>
                        <mark>Born</mark>
                        <span>26AC</span>
                    </div>
                    <div className={`died`}>
                        <mark>died</mark>
                        <span>null</span>
                    </div>
                    <div className={`culture`}>
                        <mark>culture</mark>
                        <span>null</span>
                    </div>
                </div>
            </>
        )
    }
}