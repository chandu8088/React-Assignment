import React, { Component } from 'react';
import {SubmitRecipeContainer,
    SubmitInnerContainer,
    InnerContainer,
    RecipeHeader,
    SideText,
    HomeText,
    FormWrapper,
    FormElement,
    TextWrapper,
    InputName,
    InputBox,
    TextArea,
    SubmitButton
} from './style'
import axios from 'axios'
import {connect} from 'react-redux'

class SubmitRecipe extends Component{
    state=({recipeName:null,preparationTime:null,cookingTime:null,catagory:null,servings:null,calories:null,chef:null,ratings:null,description:null})
    recipeName=(e)=>{
        this.setState({recipeName:e.target.value})
    }
    PraparationTime=(e)=>{
        this.setState({preparationTime:e.target.value})
    }
    recipeCookingTime=(e)=>{
        this.setState({cookingTime:e.target.value})
    }
    recipeCatagory=(e)=>{
        this.setState({catagory:e.target.value})
    }
    recipeServings=(e)=>{
        this.setState({servings:e.target.value})
    }
    recipeCalories=(e)=>{
        this.setState({calories:e.target.value})
    }
    recipeChef=(e)=>{
        this.setState({chef:e.target.value})
    }
    recipeRating=(e)=>{
        this.setState({ratings:e.target.value})
    }
    recipeDescription=(e)=>{
        this.setState({description:e.target.value})
    }
    submit=()=>{
        const postdata={ bannerimage: "sliderA_01",
        calories : this.state.calories,
        chef:this.state.calories ,
        cooking: this.state.cooking,
        description:this.state.description,
        image: "recipeThumb-06",
        min: this.state.cooking,
        name: this.state.recipeName,
        rating: this.state.ratings,
        servings: this.state.servings,
        tag: "cake"
    }
    axios.post('https://foodrecipejson.firebaseio.com/.json',postdata)
    .then(response=>{
        const status=response.status;
         
        }
     
  );
   
    }
    render(){
    let errormessage;
    if(this.status===200){
        errormessage=<p>seccessfully submitted recipe</p>
    }
        return(
        <div>
            <SubmitRecipeContainer>
                <SubmitInnerContainer>
                    <InnerContainer>
                        {errormessage}
                        <RecipeHeader>
                            Submit Recipe
                        </RecipeHeader>
                        <SideText>You are here:<HomeText>Home</HomeText>Submit Recipe</SideText>
                    </InnerContainer>
                </SubmitInnerContainer>
            </SubmitRecipeContainer>
            <FormWrapper>
                <FormElement>
                    
                        <TextWrapper>
                        <InputName>Recipe Name</InputName>
                        <InputBox onChange={this.recipeName}></InputBox>
                        <InputName>Preparation Time</InputName>
                        <InputBox onChange={this.PraparationTime}></InputBox>
                        <InputName>Cooking Time</InputName>
                        <InputBox onChange={this.recipeCookingTime}></InputBox>
                        <InputName>Recipe Catagory</InputName>
                        <InputBox onChange={this.recipeCatagory}></InputBox>
                        <InputName>Servings</InputName>
                        <InputBox onChange={this.recipeServings}></InputBox>
                        <InputName>Calories</InputName>
                        <InputBox onChange={this.recipeCalories}></InputBox>
                        <InputName>Chef</InputName>
                        <InputBox onChange={this.recipeChef}></InputBox>
                        <InputName>Ratings</InputName>
                        <InputBox onChange={this.recipeRating}></InputBox>
                        
                        
                        </TextWrapper>
                    
                    <TextWrapper>
                        <InputName>Description</InputName>
                        <TextArea onChange={this.recipeDescription}></TextArea>
                    </TextWrapper>
                    <SubmitButton onClick={this.submit} style={{backgroundColor:this.props.tm}}>Submit Recipe</SubmitButton>
                </FormElement>
            </FormWrapper>
        </div>)
    }
}
const mapStateToProps=state=>{
    return{
        tm:state.theme
    };
    };
export default connect(mapStateToProps)(SubmitRecipe); 

