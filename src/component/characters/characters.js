import React,{Component} from "react";
import './characters.css'
import '../characterItem/charactersItem'
import CharactersItem from "../characterItem/charactersItem";
import DescriptionCharacter from "../descriptionCharacter/descriptionCharacter";

export default class Characters extends Component{
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
                            <div className={'title'}>John Snow</div>
                            <DescriptionCharacter></DescriptionCharacter>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}