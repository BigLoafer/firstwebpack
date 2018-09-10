import React from 'react';
import ReactDOM from 'react-dom';
import PrivateRoute from '../src/pages/component/privateRoute';
import App from './App';
import Login from '../src/pages/login/login';
import { BrowserRouter as Router, Route,Switch, Redirect  } from 'react-router-dom';

const Pages=()=>{
    return(
        <Router >
            <Switch>
                <PrivateRoute exact path='/' component={App}/>
                <Route exact path='/login' component={Login}/>
                {/* <Redirect to={{
                    pathname:'/login'
                }}/> */}
            </Switch>
        </Router>
    );
}

ReactDOM.render(<Pages/>, document.getElementById('root'));
