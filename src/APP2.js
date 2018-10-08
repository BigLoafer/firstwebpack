import React, { Component } from 'react';
import {observable } from 'mobx';
import {observer} from 'mobx-react';
import Child from './Child';

// @observer
export default class APP2 extends Component{

// @observable name = " haha";
constructor(props){
  super(props);
  this.state={name: 'hahah'};
}


test=()=>{
    // this.name =' React';
   this.setState({ name: 'React'})
}
render() {
  return (
    <div>
      <span onClick={this.test} title={'zzzzz'}>{this.state.name}</span>
      <Child/>
    </div>
  )
};

}