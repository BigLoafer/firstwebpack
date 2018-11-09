import React from 'react';
import eventBus from '../component/eventBus';

export default class Detail extends React.Component{
    constructor(props){
        super(props);
        this.sId = this.props.location.state.id;
    }

    test=()=>{
        eventBus.emit('test','111');
        global.name='11111';
    }

    render(){
        return(
            <div onClick={this.test}>
                这是详情页
                <span>{this.sId}</span>
            </div>
          
        );
    }
}