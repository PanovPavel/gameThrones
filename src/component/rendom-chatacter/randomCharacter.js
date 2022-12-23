import React,{Component} from "react";
import './randomCharacter.css'
import DescriptionCharacter from '../descriptionCharacter/descriptionCharacter'
export default class RandomCharacter extends Component{
    constructor() {
        super();
        this.state = {
            id: 50,
        }
    }
    generateRandomId(){
        this.setState(state=>{
            return{
                id: Math.floor(Math.random()*100)
            }
        })
    }
    render() {
        return(
            <>
                <div className={'content'}>
                    <div className={'randomCharacter'}>
                        <div className={'title'}>Random person</div>
                        <DescriptionCharacter id={this.state.id}></DescriptionCharacter>
                    </div>
                    <button className={'buttonChangeCharacter'}>Random character</button>

                </div>
            </>
        )
    }
}
