import React,{Component} from "react";
import './characters.css'
import '../characterItem/charactersItem'
import CharactersItem from "../characterItem/charactersItem";
import DescriptionCharacter from "../descriptionCharacter/descriptionCharacter";

export default class Characters extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: `50`
        }
    }
    render() {
        return(
            <>
                <div className={'content'}>
                    <div className={`characterBlock`}>
                        <div className='charactersItem'>
                            <ul>
                                <li>John Snow</li>
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