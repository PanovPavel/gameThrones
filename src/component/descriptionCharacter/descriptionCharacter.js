import React from "react";
import "./descriptionCharacter.css"
import CharacterModel from "../../service/CharacterModel";
import Spinner from '../laod-spinner/spinner'

/**
 * Блок возвращает структуру описания персонажа
 * @return {JSX.Element}
 */
export default class DescriptionCharacter extends React.Component{
    constructor(props) {
        super(props);
    }
    state = {
        charact: {},
        load: false,
        id: this.props.id
    }

     componentDidMount() {
        this.charaterModel = new CharacterModel();
        this.getDataCharacter(this.state.id);
    }

    /**
     * Получение данных от сервера
     * @method
     * @param {number} id - id получаймого персонажа
     */
    getDataCharacter(id){
        this.charaterModel.getCharacter(id)
            .then((char)=>{
                this.changeState(char);
            })
    }

    /**
     * Изменяет state
     * @method
     * @param char - объект персонажа
     */
    changeState(char){
        this.setState(state=>{
            return{
                load: true,
                charact: char,
            }
        })
    }
    render() {
        return(
            <>
                {
                    (this.state.load)?<DescriptionCharacterData characterData={this.state.charact}></DescriptionCharacterData>:<Spinner/>
                }
                <div>{this.state.id}</div>
            </>
        )
    }
}
/**
 * Гененрирует описание персонажа
 * @returns {JSX.Element}
 */
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
