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
            charact: null,
        }
    }
    onChangeId = (dataSelected)=>{
        this.setState({
                charact: dataSelected,
        })
    }
    render() {
        let {charact} = this.state
        const description = ()=>{
            if (charact == null) return
            else {
                return (
                    <div className={'charactersDescription'}>
                        <DescriptionData data={this.state.charact}>
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
                                <DataItem
                                    renderItem={(item)=>`${item.name} (${item.gender[0]})`}
                                    onChangeId={(dataSelected)=>{this.onChangeId(dataSelected)}}
                                    data={new CharacterModel().getAllCharacters()}
                                    dataId={(id)=>{return new CharacterModel().getCharacter(id)}}
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

