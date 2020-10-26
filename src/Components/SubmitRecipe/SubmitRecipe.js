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
class SubmitRecipe extends Component{
    render(){
        const values=[{text:'Recipe Name'},{text:'Preparation Time'},{text:'Cooking Time'},{text:'Recipe Catagory'},{text:'Servings'},{text:'Calories'},{text:'Chef'},{text:'Ratings'}]
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
                    { values.map(value=>(
                        <TextWrapper>
                        <InputName>{value.text}</InputName>
                        <InputBox></InputBox>
                        </TextWrapper>
                    ))
                        
                    }
                    <TextWrapper>
                        <InputName>Description</InputName>
                        <TextArea></TextArea>
                    </TextWrapper>
                    <SubmitButton>Submit Recipe</SubmitButton>
                </FormElement>
            </FormWrapper>
        </div>)
    }
}
export default SubmitRecipe