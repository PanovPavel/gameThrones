import React,{Component} from "react";
import './characters.css'
import '../dataList/dataItem'
import DataItem from "../dataList/dataItem";
import DescriptionData from "../descriptionCharacter/descriptionData";
import CharacterModel from "../../service/CharacterModel";
import {Field} from "../Field/field";
/**
 * Блок с описание конкретного персонажа
 * @return {JSX.Element}
 */
export default class Characters extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: 92,
            charact: {},
        }
    }
    componentDidMount() {
        this.charaterModel = new CharacterModel();
        this.getDataCharacter(this.state.id);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.id !== prevState.id){
            this.getDataCharacter(this.state.id);
        }
    }

    getDataCharacter(id){
        this.charaterModel.getCharacter(id)
            .then((char)=>{
                this.setState({
                    charact: char,
                })
            })
    }
    onChangeId(id){
        this.setState({
                id:id
        })
    }
    render() {
        // console.log(this.state.charact)
        let {id} = this.state
        const description = ()=>{
            if (id === null) return
            else {
                return (
                    <div className={'charactersDescription'}>
                        <DescriptionData id={id} data={this.state.charact}>
                            <Field field={`gender`} label={`Gender`}></Field>
                            <Field field={`born`} label={`Born`}></Field>
                            <Field field={`died`} label={`Died`}></Field>
                            <Field field={`culture`} label={`Culture`}></Field>
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
                                <DataItem renderItem={(item)=>`${item.name} (${item.gender[0]})`} onChangeId={(id)=>this.onChangeId(id)} data={new CharacterModel().getAllCharacters()}/>
                            </ul>
                        </div>
                        {description()}
                    </div>
                </div>
            </>
        )
    }
}

