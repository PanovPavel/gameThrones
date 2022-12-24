import React,{Component} from "react";
import './charactersItem.css'

/**
 * Список персонажаей
 * @return {JSX.Element}
 */
export default  class CharactersItem extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <>
                <li>John Snow</li>
                <li>Snow Jhons</li>
            </>
        )
    }
}