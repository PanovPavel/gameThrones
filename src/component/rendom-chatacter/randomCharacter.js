import React,{Component} from "react";
import './randomCharacter.css'
import DescriptionData from '../descriptionCharacter/descriptionData'
import CharacterModel from "../../service/CharacterModel";
import {Field} from "../Field/field";
import Spinner from "../laod-spinner/spinner";

/**
 * Блок с описание рандомного пресонажа
 */
export default class RandomCharacter extends Component{
    state = {
        hidden: false,
    }
    onHiddenBlock(){
        this.setState((state)=>{
            return{
                hidden: !this.state.hidden,
            }
        })
    }
    renderItemHidden(){
        const {hidden, load} = this.state;

        if(!hidden) {
            return (
                <>
                    <BlockRandom getData={(id) => new CharacterModel().getCharacter(id)}/>}
                </>
            )
        }
    }
    render() {
        return(
            <>
                <div className={'content'}>
                    {this.renderItemHidden()}
                    <button onClick={()=>this.onHiddenBlock()} className={'buttonChangeCharacter'}>Random hidden</button>
                </div>
            </>
        )
    }
}
class BlockRandom extends Component{
    state = {
        id: Math.floor(Math.random()*100+25),
        data: {},
        load: false
    }
    componentDidMount() {
        this.props.getData(this.state.id)
            .then(data=>{
                this.setState({
                    data: data,
                    load: true
                })
            })
    }
    loadRender(){
            return (
                <>
                    <div className={'randomCharacter'}>
                        <div className={'title'}>Random person</div>
                        <Spinner></Spinner>
                    </div>
                </>
            )
    }
    render() {
        const {load} = this.state
        return(
            <>
                {
                    (!load) ? this.loadRender() :
                    <div className={'randomCharacter'}>
                        <div className={'title'}>Random person</div>
                        <DescriptionData data={this.state.data}>
                            <Field field={`name`} label={`Name`}></Field>
                            <Field field={`born`} label={`Born`}></Field>
                            <Field field={`died`} label={`Died`}></Field>
                            <Field field={`culture`} label={`Culture`}></Field>
                        </DescriptionData>
                    </div>
                }
            </>
        )
    }
}