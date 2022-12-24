import React,{Component} from "react";
import './characters.css'
import '../characterItem/charactersItem'
import CharactersItem from "../characterItem/charactersItem";
import DescriptionCharacter from "../descriptionCharacter/descriptionCharacter";

/**
 * Блок с описание конкретного персонажа
 * @return {JSX.Element}
 */
export default class Characters extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: 52
        }
        this.onChangeId = this.onChangeId.bind(this);
    }
    onChangeId(id){
        console.log("*****************************" + id)
        this.setState(state=>{
            return{
                id:id
            }
        })
    }
    render() {
        let {id} = this.state
        return(
            <>
                <div className={'content'}>
                    <div className={`characterBlock`}>
                        <div className='charactersItem'>
                            <ul>
                                <CharactersItem onChangeId={(id)=>this.onChangeId(id)}></CharactersItem>
                            </ul>
                        </div>
                        <div className={'charactersDescription'}>
                            <DescriptionCharacter id={id}></DescriptionCharacter>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}