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
            id: `52`
        }
    }
    render() {
        return(
            <>
                <div className={'content'}>
                    <div className={`characterBlock`}>
                        <div className='charactersItem'>
                            <ul>
                                <CharactersItem></CharactersItem>
                            </ul>
                        </div>
                        <div className={'charactersDescription'}>
                            <DescriptionCharacter id={this.state.id}></DescriptionCharacter>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}