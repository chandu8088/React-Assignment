import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import Home from '../Pages/Home'
import Signin from '../Pages/Signin/Signin';
import SubmitRecipePage from '../Pages/SubmitRecipepage'
import ViewRecipePage from '../Pages/ViewRecipePage'
class Router extends Component{
    render(){
        return(<div>
            <Switch>
                <Route exact path='/home' component={Home}></Route>
                <Route exact path='/viewrecipe' component={ViewRecipePage}></Route>
                <Route exact path='/submitrecipe' component={SubmitRecipePage}></Route>
            </Switch>
            
        </div>)
    }
}
export default Router