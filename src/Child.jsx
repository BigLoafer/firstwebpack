import React from 'react';
import {observer,inject} from 'mobx-react';

@inject('myStore')
@observer
export default class Child extends React.Component{

    constructor(props){
        super(props);
    }
    render() {
      return (
        <div>
            hello  world;
            <div>{this.props.myStore.name}</div>
        </div>
      )
    };
}