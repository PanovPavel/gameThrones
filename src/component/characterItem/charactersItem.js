import React,{Component} from "react";
import './charactersItem.css'
import CharacterModel from "../../service/CharacterModel";
import style from './descriptionItem.module.css'
/**
 * Список персонажаей
 * @return {JSX.Element}
 */
export default  class CharactersItem extends Component{
    state = {
        character: [],
        selectID: 0
    }
    getCharacters(){
        const charModel = new CharacterModel();
        charModel.getAllCharacters()
            .then(res => {
                this.setState({
                        character: res
                })
            });
    }
    componentDidMount() {
        this.getCharacters();
    }
    onCharSelected(id){
        console.log('click' + id);
        this.setState({
                selectID: id
        })
        this.props.onChangeId(id);
    }


    render() {
        const {character} = this.state
        const AllChar = character.map((item)=>{
            return(
                <li className={style} key={item.id} onClick={()=>this.onCharSelected(item.id)}>{item.name}</li>
            )
        })
        return(
            <>
                {AllChar}
            </>
        )
    }
}