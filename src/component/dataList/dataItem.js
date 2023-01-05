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
        selectID: null,
        dataSelected: {}
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
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.selectID !== prevState.selectID){
            this.onDataSelected(this.state.selectID)
        }
    }
    onDataSelected = (id)=>{
        this.props.dataId(id)
            .then((data)=>{
                this.setState({
                    selectID: id,
                    dataSelected: data
                })
            })
        this.props.onChangeId(this.state.dataSelected);
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

