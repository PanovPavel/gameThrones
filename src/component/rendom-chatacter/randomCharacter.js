import React,{Component} from "react";
import './randomCharacter.css'
import DescriptionCharacter from '../descriptionCharacter/descriptionCharacter'
export default class RandomCharacter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: 50,
            hidden: false
        }
        this.onHiddenRandom = this.onHiddenRandom.bind(this);
    }
    componentDidMount(){
        setTimeout(()=>{this.changeId()}, 3000)
    }

    onHiddenRandom() {
        this.setState(state=>{
            console.log(this.state.hidden);
            return {
                hidden: !this.state.hidden
            }
        })
    }
    changeId(){
        this.setState(state=>{
            return{
                id: Math.floor(Math.random()*100+25)
            }
        })
    }
    render() {
        const {hidden} = this.state;
        return(
            <>
                <div className={'content'}>
                    {hidden? '' : <BlockRandom id={this.state.id}/>}
                    <button onClick={()=>this.onHiddenRandom()} className={'buttonChangeCharacter'}>Random hidden</button>
                </div>
            </>
        )
    }
}
const BlockRandom = (props)=>{
    return(
            <div className={'randomCharacter'}>
                <div className={'title'}>Random person</div>
                <DescriptionCharacter id={props.id}></DescriptionCharacter>
            </div>
    )
}