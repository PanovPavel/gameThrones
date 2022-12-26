import React from "react";
import "./descriptionCharacter.css"
import CharacterModel from "../../service/CharacterModel";
import Spinner from '../laod-spinner/spinner'

/**
 * Блок возвращает структуру описания персонажа
 * @return {JSX.Element}
 */
export default class DescriptionCharacter extends React.Component{
    state = {
        charact: {},
        load: false,
        id: this.props.id
    }
    componentDidMount() {
        this.charaterModel = new CharacterModel();
        this.getDataCharacter(this.state.id);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.id !== prevState.id){
            this.componentDidMount();
        }
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
    changeStateId(){
        this.setState({
                id: this.props.id
        })
    }
    /**
     * Изменяет state
     * @method
     * @param char - объект персонажа
     */
    changeState(char){
        this.setState({
                load: true,
                charact: char,
                id: this.props.id
        })
        this.componentDidMount();
    }
    render() {
        return(
            <>
                {
                    (this.state.load)?<DescriptionCharacterData characterData={this.state.charact}/>:<Spinner/>
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
