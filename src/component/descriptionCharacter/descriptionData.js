import React from "react";
import "./descriptionCharacter.css"
import CharacterModel from "../../service/CharacterModel";
import Spinner from '../laod-spinner/spinner'

/**
 * Блок возвращает структуру описания персонажа
 * @return {JSX.Element}
 */
export default class DescriptionData extends React.Component{
    constructor(props) {
        super(props);
    }
    state = {
        data: this.props.data,
        load: false,
        id: this.props.id
    }
    componentDidMount() {
        console.log(this.props.data + this.state.data.id)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.data.id !== this.props.data.id){
            this.setState({
                data: this.props.data
            })
            this.componentDidMount();
        }
    }

    render() {
        return(
            <>
                <DescriptionCharacterData characterData={this.state.data}>
                    {this.props.children}
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
class DescriptionCharacterData extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props.characterData + `2`)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.characterData.id !== this.props.characterData.id){
            this.componentDidMount();
        }
    }
    render() {
    const {name} = this.props.characterData;
    const {characterData} = this.props;
    return(
            <>
                <div className={'title'}>{name}</div>
                    <div className={'randomCharacterDescription'}>
                        {
                            //Перебор props children
                            React.Children.map(this.props.children, (child)=>{
                                return React.cloneElement(child, {characterData});
                            })
                        }
                    </div>
            </>
        )
    }
}
