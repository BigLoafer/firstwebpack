import React, { Component } from 'react';
import {observable } from 'mobx';
import {observer} from 'mobx-react';
import Child from './Child';
import './app2.scss';

@observer
export default class APP2 extends Component{

  @observable dataArr =
  [{name:'不可思议的CSSHHH',showLine:false} , {name: '导航栏',showLine:false} , {name:'光标小划线跟随',showLine:false}, {name:'PURE CSS',showLine:false} , {name:'NAV underline',showLine:false}]

constructor(props){
  super(props);
  this.state={
      data:[{name:'不可思议的CSS',showLine:false} , {name: '导航栏',showLine:false} , {name:'光标小划线跟随',showLine:false}, {name:'PURE CSS',showLine:false} , {name:'NAV underline',showLine:false}]
  };
}


test=(Index)=>{
  for (let index = 0; index < this.dataArr.length; index++) {
    if(index === Index){
       this.dataArr.splice(index,1,{...this.dataArr[index],...{showLine:true}})
    }else {
        this.dataArr.splice(index,1,{...this.dataArr[index],...{showLine:false}})
    }
  }
}

render() {
  return (
    <div className="container">
      {this.dataArr.map( (item, index)=> 
        <span key={index} className= {item.showLine ? "tabItemCon2" : "tabItemCon"} onClick={()=>this.test(index)}>{item.name}</span>
      )
      }
    </div>
  )
};

}