import React, {useState} from 'react';
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
import { useEffect } from 'react';

function SubmitRecipe(props){
    const [recipeName,setrecipeName]=useState(null);
    const [preparationTime,setpreparationTime]=useState(null);
    const [cookingTime,setcookingTime]=useState(null);
    const [catagory,setcatagory]=useState(null);
    const [servings,setservings]=useState(null);
    const [calories,setcalories]=useState(null);
    const [chef,setchef]=useState(null);
    const [ratings,setratings]=useState(null);
    const [description,setdescription]=useState(null);
    const [message,setmessage]=useState(false)
    const [submited,setsubmited]=useState(false)
    let match=false;
    
    const recipeNameChange=(e)=>{
        setrecipeName(e.target.value)
    }
    const PraparationTime=(e)=>{
        setpreparationTime(e.target.value)
    }
    const recipeCookingTime=(e)=>{
        setcookingTime(e.target.value)
    }
    const recipeCatagory=(e)=>{
        setcatagory(e.target.value)
    }
    const recipeServings=(e)=>{
        setservings(e.target.value)
    }
    const recipeCalories=(e)=>{
        setcalories(e.target.value)
    }
    const recipeChef=(e)=>{
        setchef(e.target.value)
    };
    const recipeRating=(e)=>{
        setratings(e.target.value)
    };
    const recipeDescription=e=>{
        setdescription(e.target.value)
    };
    const submit=()=>{
        const postdata={ bannerimage: "sliderA_01",
        calories : calories,
        chef:chef ,
        cooking: preparationTime,
        description:description,
        image: "recipeThumb-06",
        min: cookingTime,
        name: recipeName,
        rating: ratings,
        servings: servings,
        tag: "cake"
        
    }
    if(recipeName!==null||preparationTime!==null||cookingTime!==null||catagory!==null||servings!==null||calories!==null||chef!==null||ratings!==null||description!==null){

        axios.post('https://foodrecipejson.firebaseio.com/.json',postdata)
    .then(response=>{
        const status=response.status;
         if(status===200){
             setsubmited(true);
         }
        }
     
  );
    }
    else
    {
        setmessage(true)

    }
    
   
    }
useEffect(()=>{
    if(match===true){
        if(recipeName===null||preparationTime===null||cookingTime===null||catagory===null||servings===null||calories===null||chef===null||ratings===null||description===null){
            
        }
    }
})
    
        return(
        <div>
            <SubmitRecipeContainer>
                <SubmitInnerContainer>
                    <InnerContainer>
                        
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
                        <InputBox onChange={recipeNameChange}></InputBox>
                        <InputName>Preparation Time</InputName>
                        <InputBox onChange={PraparationTime}></InputBox>
                        <InputName>Cooking Time</InputName>
                        <InputBox onChange={recipeCookingTime}></InputBox>
                        <InputName>Recipe Catagory</InputName>
                        <InputBox onChange={recipeCatagory}></InputBox>
                        <InputName>Servings</InputName>
                        <InputBox onChange={recipeServings}></InputBox>
                        <InputName>Calories</InputName>
                        <InputBox onChange={recipeCalories}></InputBox>
                        <InputName>Chef</InputName>
                        <InputBox onChange={recipeChef}></InputBox>
                        <InputName>Ratings</InputName>
                        <InputBox onChange={recipeRating}></InputBox>
                        
                        
                        </TextWrapper>
                    
                    <TextWrapper>
                        <InputName>Description</InputName>
                        <TextArea onChange={recipeDescription}></TextArea>
                    </TextWrapper>
                    <SubmitButton type='button' onClick={submit} style={{backgroundColor:props.tm}}>Submit Recipe</SubmitButton>
                    { message ?<p style={{color:'red'}}>all fields must be filled</p>:''

                    }
                    {
                        submited? <p style={{color:'green'}}>Seccessfully Submitted </p>:''
                    }
                </FormElement>
            </FormWrapper>
        </div>)
    }

const mapStateToProps=state=>{
    return{
        tm:state.theme
    };
    };
export default connect(mapStateToProps)(SubmitRecipe); 

