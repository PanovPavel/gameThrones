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
        console.log(`componentDidMount`)
        this.charaterModel = new CharacterModel();
        this.getDataCharacter(this.state.id);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`componentDidUpdate`)
        if(this.props.id !== prevProps.id){
            this.changeStateId();
        }
        if (this.state.id !== prevState.id){
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
    }
    render() {
            console.log(`render`)

        return(
            <>
                <DescriptionCharacterData characterData={this.state.charact}>
                        <Field field={`gender`} label={`Gender`}></Field>
                        <Field field={`born`} label={`Born`}></Field>
                        <Field field={`died`} label={`Died`}></Field>
                        <Field field={`culture`} label={`Culture`}></Field>
                </DescriptionCharacterData>
            </>
        )
    }
}
const Field =({field, label, characterData})=>{
    return(
        <>
            <div className={[field]}>
                <mark>{label}</mark>
                <span>{characterData[field]}</span>
            </div>
        </>
    )
}



/**
 * Гененрирует описание персонажа
 * @returns {JSX.Element}
 */
const DescriptionCharacterData = (props)=>{
    const {name} = props.characterData;
    const {characterData} = props;
    return(
        <>
            <div className={'title'}>{name}</div>
                <div className={'randomCharacterDescription'}>
                    {
                        //Перебор props children
                        React.Children.map(props.children, (child)=>{
                            return React.cloneElement(child, {characterData});
                        })
                    }
                </div>
        </>
    )
}
