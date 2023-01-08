import React, {Component} from "react";
import DataItem from "../../dataList/dataItem";
import HousesModel from "../../../service/HousesModel";
import CharacterModel from "../../../service/CharacterModel";
import DescriptionData from "../../descriptionCharacter/descriptionData";
import {Field} from "../../Field/field";
export default class House extends Component{
    constructor(props) {
        super(props);
        this.state = {
            houses: null,
        }
    }
    onChangeId = (dataSelected)=>{
        this.setState({
            houses: dataSelected,
        })
    }

    render() {
        console.log(this.state.charact)
        let {houses} = this.state
        const description = ()=>{
            if (houses === null) return
            else {
                return (
                    <div className={'charactersDescription'}>
                        <DescriptionData data={houses}>
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
                                <DataItem
                                    renderItem={(item)=>item.name}
                                    onChangeId={(dataSelected)=>{this.onChangeId(dataSelected)}}
                                    data={new HousesModel().getAllHouses()}
                                    dataId={(id)=>{return new HousesModel().getHouse(id)}}

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


