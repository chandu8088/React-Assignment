import React, { Component } from 'react';
import {ImageContainer} from '../Components/ImagesContainer/style'
import RecipeMiddleimage from '../Components/ViewRecipe/RecipeMiddleimage'
import Rightside from '../Components/ImagesContainer/Rightside'
import ViewRecipe from '../Components/ViewRecipe/ViewRecipe'

class ViewRecipePage extends Component{
    render(){
        return(<div>
            <RecipeMiddleimage></RecipeMiddleimage>
            <ImageContainer>
                <ViewRecipe></ViewRecipe>
                <Rightside></Rightside>
            </ImageContainer>
        </div>)
    }
}
export default ViewRecipePage