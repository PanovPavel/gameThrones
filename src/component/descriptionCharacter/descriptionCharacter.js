import React from "react";
import "./descriptionCharacter.css"
import CharacterModel from "../../service/CharacterModel";
import Spinner from '../laod-spinner/spinner'
export default class DescriptionCharacter extends React.Component{
    constructor(props) {
        super(props);
        this.charaterModel = new CharacterModel();
        this.state = {
            charact: {},
            load: false
        }
        this.onChangeRandom();
    }
    onChangeRandom(){
        this.charaterModel.getCharacter(this.props.id)
            .then((char)=>{
                this.setState(state=>{
                    return{
                        load: true,
                        charact: char,
                    }
                })
            })
    }
    render() {
        return(
            <>
                {
                    (this.state.load)?<DescriptionCharacterData characterData={this.state.charact}></DescriptionCharacterData>:<Spinner/>
                }
            </>
        )
    }
}

const DescriptionCharacterData = (props)=>{
    const {name, gender, born, died, culture} = props.characterData;
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
