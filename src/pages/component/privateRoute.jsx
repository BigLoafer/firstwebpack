import React from 'react';
import {Route, withRouter} from 'react-router-dom';

class PrivateRoute extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            //isAuthenticated: window.sessionStorage.getItem("userId") ? true: false
            isAuthenticated: true
        }
    }

    componentWillMount() {
        if(!this.state.isAuthenticated){
            const {history} = this.props;
            setTimeout(() => {
                history.replace("/login");
            }, 1000)
        }
    }

    render() {
        let { component: Component, ...rest} = this.props;
        return  this.state.isAuthenticated ? 
        (<Route {...rest} render={(props) => ( <Component {...props} /> 
            )}/> ) : (<p style = {{"width": "100%", "text-align": "center", "fontSize": "20px", "lineHeight": "50px"}}>请登录...</p>)
    }

}

export default withRouter(PrivateRoute);