import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Signin from './Pages/Signin/Signin'
import ViewRecipePage from './Pages/ViewRecipePage'
import SubmitRecipe from './Components/SubmitRecipe/SubmitRecipe'
import Home from './Pages/Home'
import ThemeBuilder from './Components/Themediv/themebuild'
import Middle from './Components/MiddleSection/Middle'
import {UserProvider} from './Context/context'
class App extends Component {
  state={orEmail:'dsds',orPass:''}
signIndetails(email,pass){
  this.setState({orEmail:email,orPass:pass})
}
  
  render() {
    const islogin=this.props.Lgn
   let content;
   if(islogin===false)
    content=
    <Signin data={{change:this.signIndetails.bind(this)}}></Signin>
  
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
          <UserProvider value={this.props.tm}>{content}</UserProvider>
        
        </div>
      </BrowserRouter>
      
    );
    
  }
    

}
const mapStateToProps=state=>{
  return{
      Lgn:state.isLogin,
      tm:state.theme
  };
  };
export default connect(mapStateToProps)(App);
