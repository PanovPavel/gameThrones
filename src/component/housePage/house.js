import React, {Component} from "react";
import DataItem from "../dataList/dataItem";
import HousesModel from "../../service/HousesModel";
import CharacterModel from "../../service/CharacterModel";
import DescriptionData from "../descriptionCharacter/descriptionData";
import {Field} from "../Field/field";
export default class House extends Component{
    state = {
        id: null,
        houses: {}
    }
    onChangeId(id){
        this.setState({
            id:id,
        })
    }
    componentDidMount() {
        this.housesModel = new HousesModel();
        this.getHousesData(this.state.id);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.id !== prevState.id){
            this.getHousesData(this.state.id);
        }
    }
    getHousesData(id){
        this.housesModel.getHouse(id)
            .then((houses)=>{
                this.setState({
                    houses: houses,
                })
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
                        <DescriptionData id={id} data={this.state.houses}>
                            <Field field={`name`} label={`Gender`}></Field>
                            <Field field={`region`} label={`Born`}></Field>
                            <Field field={`coatOfArms`} label={`CoatOfArms`}></Field>
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
                                <DataItem renderItem={(item)=>item.name} onChangeId={(id)=>this.onChangeId(id)} data={new HousesModel().getAllHouses()}/>
                            </ul>
                        </div>
                        {description()}
                    </div>
                </div>
            </>
        )
    }
}


