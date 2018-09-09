import React from 'react';
import {observer} from 'mobx-react';
import Child2 from './Child2';

@observer
export default class Child1 extends React.Component{

    render(){
        return(
            <div>
                <div>第一个子组件</div>
                <Child2/>
            </div>
            
        );
    }
}