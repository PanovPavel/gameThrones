import React from "react";
import "./descriptionCharacter.css"
import CharacterModel from "../../service/CharacterModel";
export default class DescriptionCharacter extends React.Component{
    constructor(props) {
        super(props);
        this.charaterModel = new CharacterModel();
        this.state = {
            charact: {}
        }
        this.onChangeRandom();
    }

    onChangeRandom(){
        this.charaterModel.getCharacter(this.props.id)
            .then((char)=>{
                this.setState(state=>{
                    return{
                        charact: char,
                    }
                })
            })
    }
    render() {
        const {name, gender, born, died, culture} = this.state.charact;

        return(
            <>
                <div className={'title'}>{name}</div>
                <div className={'randomCharacterDescription'}>
                    <div className={`gender`}>
                        <mark>Gender</mark>
                        <span>{gender}</span>
                    </div>
                    <div className={`born`}>
                        <mark>Born</mark>
                        <span>{born}</span>
                    </div>
                    <div className={`died`}>
                        <mark>died</mark>
                        <span>{died}</span>
                    </div>
                    <div className={`culture`}>
                        <mark>culture</mark>
                        <span>{culture}</span>
                    </div>
                </div>
            </>
        )
    }
}
const TitleRandom= ()=>{
    return(
        <>
            asddsa
        </>
    )
}