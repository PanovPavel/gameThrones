import React,{Component} from "react";
import './randomCharacter.css'
import DescriptionCharacter from '../descriptionCharacter/descriptionCharacter'
export default class RandomCharacter extends Component{
    render() {
        return(
            <>
                <div className={'content'}>
                    <div className={'randomCharacter'}>
                        <div className={'title'}>Random Character: Atwood Frey</div>
                            {/*<div className={'randomCharacterDescription'}>*/}
                            {/*        <div className={`gender`}>*/}
                            {/*            <mark>Gender</mark>*/}
                            {/*            <span>ment</span>*/}
                            {/*        </div>*/}
                            {/*        <div className={`born`}>*/}
                            {/*            <mark>Born</mark>*/}
                            {/*            <span>26AC</span>*/}
                            {/*        </div>*/}
                            {/*        <div className={`died`}>*/}
                            {/*            <mark>died</mark>*/}
                            {/*            <span>null</span>*/}
                            {/*        </div>*/}
                            {/*        <div className={`culture`}>*/}
                            {/*            <mark>culture</mark>*/}
                            {/*            <span>null</span>*/}
                            {/*        </div>*/}
                            {/*</div>*/}
                        <DescriptionCharacter></DescriptionCharacter>
                    </div>
                    <button className={'buttonChangeCharacter'}>Random character</button>

                </div>
            </>
        )
    }
}
