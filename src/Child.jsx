import React from 'react';
import {observer} from 'mobx-react';

@observer
export default class Child extends React.Component{

    render() {
        console.log('wo zou le ma ');
      return (
        <div>
            hello  world;
        </div>
      )
    };
}