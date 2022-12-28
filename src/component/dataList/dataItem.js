import React,{Component} from "react";
import './dataItem.css'
import style from './descriptionItem.module.css'
import CharacterModel from "../../service/CharacterModel";
/**
 * Список персонажаей
 * @return {JSX.Element}
 */
export default  class DataItem extends Component{
    constructor(props) {
        super(props);
        this.data = this.props.data;
    }
    state = {
        character: [],
        selectID: 0
    }
    getData(){
        this.data
            .then(res => {
                this.setState({
                        character: res
                })
            });
    }
    componentDidMount() {
        this.getData();
    }
    onDataSelected(id){
        console.log('click' + id);
        this.setState({
                selectID: id
        })
        this.props.onChangeId(id);
    }

    render() {
        const {character} = this.state
        const AllChar = character.map((item)=>{
            const name = this.props.renderItem(item)
            return(
                <li className={style} key={item.id} onClick={()=>this.onDataSelected(item.id)}>
                    {name}
                </li>
            )
        })
        return(
            <>
                {AllChar}
            </>
        )
    }
}