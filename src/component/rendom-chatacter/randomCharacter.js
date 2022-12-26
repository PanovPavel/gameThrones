import React,{Component} from "react";
import './randomCharacter.css'
import DescriptionCharacter from '../descriptionCharacter/descriptionCharacter'

/**
 * Блок с описание рандомного пресонажа
 */
export default class RandomCharacter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: Math.floor(Math.random()*100+50),
            hidden: false
        }
    }
    changeRandomId(){
        this.setState({
                id: Math.floor(Math.random()*100+50)
        })
    }
    onHiddenBlock() {
        this.setState({
                hidden: !this.state.hidden
        })
    }
    render() {
        const {hidden, id} = this.state;
        return(
            <>
                <div className={'content'}>
                    {hidden? '' : <BlockRandom id={id} changeRandomId={() => this.changeRandomId()}/>}
                    <button onClick={()=>this.onHiddenBlock()} className={'buttonChangeCharacter'}>Random hidden</button>
                </div>
            </>
        )
    }
}
class BlockRandom extends Component{
    state = {
        id: this.props.id
    }
    componentDidMount() {
        this.props.changeRandomId();
    }
    componentWillUnmount() {
        console.log(`componentWillUnmount`)
    }
    render() {
        return(
                <div className={'randomCharacter'}>
                    <div className={'title'}>Random person</div>
                    <DescriptionCharacter id={this.state.id}/>
                </div>
        )
    }
}