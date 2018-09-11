import React from 'react';

export default class Detail extends React.Component{
    constructor(props){
        super(props);
        this.sId = this.props.location.state.id;
    }

    render(){
        return(
            <div>
                这是详情页
                <span>{this.sId}</span>
            </div>
          
        );
    }
}