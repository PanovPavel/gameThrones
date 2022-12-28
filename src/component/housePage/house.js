import React, {Component} from "react";
import DataItem from "../dataList/dataItem";
import HousesModel from "../../service/HousesModel";
export default class House extends Component{
    state = {
        id: null
    }
    onChangeId(id){
        this.setState({
            id:id
        })
    }

    render() {
        return(
            <>
                <div className={'content'}>
                    <div className={`characterBlock`}>
                        <div className='charactersItem'>
                            <ul>
                                <DataItem renderItem={(item)=>item.name} onChangeId={(id)=>this.onChangeId(id)} data={new HousesModel().getAllHouses()}/>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


