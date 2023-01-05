import React,{Component} from "react";
import './characters.css'
import '../dataList/dataItem'
import DataItem from "../dataList/dataItem";
import DescriptionCharacter from "../descriptionCharacter/descriptionCharacter";
import CharacterModel from "../../service/CharacterModel";
/**
 * Блок с описание конкретного персонажа
 * @return {JSX.Element}
 */
export default class Characters extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: +localStorage.getItem(`charSelect`) || null
        }

    }
    onChangeId(id){
        this.setState({
                id:id
        })
        localStorage.setItem(`charSelect`, id);
    }
    render() {
        let {id} = this.state
        const description = ()=>{
            if (id === null) return
            else {
                return (
                    <div className={'charactersDescription'}>
                        <DescriptionCharacter id={id}>

                        </DescriptionCharacter>
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