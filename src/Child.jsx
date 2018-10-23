import React from 'react';
import {observer,inject} from 'mobx-react';

@inject('myStore')
@observer
export default class Child extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props.myStore.name)
    }
    render() {
        console.log('wo zou le ma ');
      return (
        <div>
            hello  world;
            <div>{this.props.myStore.name}</div>
        </div>
      )
    };
}