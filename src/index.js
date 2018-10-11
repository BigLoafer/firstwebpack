import React from 'react';
import ReactDOM from 'react-dom';
import PrivateRoute from '../src/pages/component/privateRoute';
// import App from './App';
// import App from './app3';
import App from './APP2';
import Login from '../src/pages/login/login';
import Detail from '../src/pages/login/detail';
import { HashRouter  as Router, Route,Switch, Redirect  } from 'react-router-dom';

const Pages=()=>{
    return(
        <Router >
            <Switch>
                <PrivateRoute exact path='/' component={App}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/detail' component={Detail}/>
                <Redirect to={{
                    pathname:'/login'
                }}/> 
            </Switch>
        </Router>
    );
}

ReactDOM.render(<Pages/>, document.getElementById('root'));
