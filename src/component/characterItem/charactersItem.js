import React,{Component} from "react";
import './charactersItem.css'
import CharacterModel from "../../service/CharacterModel";
import style from './descriptionItem.module.css'
/**
 * Список персонажаей
 * @return {JSX.Element}
 */
export default  class CharactersItem extends Component{
    constructor(props) {
        super(props);
    }
    state = {
        character: []
    }
    /**
     * получить перснажей из бд
     */
    getCharacters(){
        const charModel = new CharacterModel();
        charModel.getAllCharacters()
            .then(res => {
                this.setState(state=>{
                    return{
                        character: res
                    }
                })
            });
    }
    componentDidMount() {
        this.getCharacters();
    }
    onCharSelected(){
        console.log('click')
    }


    render() {
        const {character} = this.state
        let i = 1;
        const AllChar = character.map((item)=>{
            return(
                <li className={style} key={i++} onClick={()=>this.onCharSelected()}>{item.name}</li>
            )
        })
        return(
            <>
                {AllChar}
            </>
        )
    }
}