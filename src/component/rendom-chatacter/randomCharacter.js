import React,{Component} from "react";
import './randomCharacter.css'
import DescriptionCharacter from '../descriptionCharacter/descriptionCharacter'

/**
 * Блок с описание рандомного пресонажа
 */
export default class RandomCharacter extends Component{
    constructor(props) {
        super(props);
        this.onHiddenBlock = this.onHiddenBlock.bind(this);
        this.state = {
            id: Math.floor(Math.random()*100+50),
            hidden: false
        }
    }


    onRandomId(){
        this.setState(state=>{
            return{
                id: Math.floor(Math.random()*100+50)
            }
        })
    }
    onHiddenBlock() {
        if(this.state.hidden) this.onRandomId();
        this.setState({
                hidden: !this.state.hidden
        })
    }
    render() {
        const {hidden, id} = this.state;
        return(
            <>
                <div className={'content'}>
                    {hidden? '' : <BlockRandom id={id} changeId={()=>this.onRandomId()}/>}
                    <button onClick={()=>this.onHiddenBlock()} className={'buttonChangeCharacter'}>Random hidden</button>
                </div>
            </>
        )
    }
}
class BlockRandom extends Component{
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log(`componentDidMount`)
    }
    componentWillUnmount() {
        console.log(`componentWillUnmount`)
    }
    render() {
        return(
                <div className={'randomCharacter'}>
                    <div className={'title'}>Random person</div>
                    <DescriptionCharacter id={this.props.id} changeId={this.props.changeId}></DescriptionCharacter>
                </div>
        )
    }
}