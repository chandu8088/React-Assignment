import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Redirect, Route,Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Signin from './Pages/Signin/Signin'
import ViewRecipePage from './Pages/ViewRecipePage'
import SubmitRecipe from './Components/SubmitRecipe/SubmitRecipe'
import Middle from './Components/MiddleSection/Middle'
import Home from './Pages/Home'
import ThemeBuilder from './Components/Themediv/themebuild'
import Container from './Components/ImagesContainer/Container'
import ViewRecipe from './Components/ViewRecipe/ViewRecipe'
class App extends Component {

  
  render() {
    const islogin=this.props.Lgn
   let content;
   if(islogin===false)
    content=
    <Signin></Signin>
  
    else
    content=<>
    <Header/>
    <ThemeBuilder></ThemeBuilder>
    <Route path='/home' exact component={Home}/>
    <Route path='/viewrecipe' exact component={ViewRecipePage}/>
    <Route path='/submitrecipe' exact component={SubmitRecipe}/>
    <Footer/>
    </>
    return(
      <BrowserRouter>
        <div> 
          {content}
        </div>
      </BrowserRouter>
      
    );
    
  }
    

}
const mapStateToProps=state=>{
  return{
      Lgn:state.isLogin
  };
  };
export default connect(mapStateToProps)(App);
