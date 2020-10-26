import React, { Component } from 'react';
import Header from '../Components/Header/Header'
import Middle from '../Components/MiddleSection/Middle'
import Container from '../Components/ImagesContainer/Container'
import Footer from '../Components/Footer/Footer'
import {Route,Link} from 'react-router-dom'
import ViewRecipePage from './ViewRecipePage'
import SubmitRecipe from '../Components/SubmitRecipe/SubmitRecipe'
class Home extends Component{
    render(){
        return(<div>
            <Middle></Middle>
            <Container/>
        </div>);
    }
}
export default Home;