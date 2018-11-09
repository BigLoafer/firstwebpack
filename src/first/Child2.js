import React, {Component} from 'react';
import {observer} from 'mobx-react';
import FirstStore from '../store/FirstStore';
import Child3 from './Child3';

@observer
export default class Child2 extends React.Component{
    constructor(props){
        super(props);
        this.store = FirstStore;
        
    }

    change=()=>{
        this.store.data ='22222';
    }

    render(){
        return(
            <div>
                <div>第二个子组件</div>
                <div onClick={this.change}>点击改变父组件数据</div>
                <div>{this.store.data}</div>
                <Child3></Child3>
            </div>
            
        );
    }
}