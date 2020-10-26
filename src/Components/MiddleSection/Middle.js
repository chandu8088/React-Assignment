import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import {clockO} from 'react-icons-kit/fa/clockO'
import {spoon} from 'react-icons-kit/ionicons/spoon'
import {person} from 'react-icons-kit/ionicons/person'
import {ImageWrapper,
    MainImage,
    CarousalHolder,
    CarosalButtons,
    InsideButton,
    MainImage1,
    MainImage2,
    MainImage3,
    CarosalButtons1,
    CarosalButtons2,
    CarosalButtons3,
    TextBox,
    MainHeaderContainer,
    HeaderTag,
    HeaderText,
    InsideHeader,
    BelowHeader,
    FoodDetails,
    ImageButton
}

from './style'
class Middle extends Component
{   state={value:1}
FirstImage=()=>{
    this.setState({value:1})
}
SecondImage=()=>{
    this.setState({value:2})
}
ThirdImage=()=>{
    this.setState({value:3})
}
FourthImage=()=>{
    this.setState({value:4})
}
    render(){
    
        return(
            <div>

                <ImageWrapper>
                    <MainImage value={this.state.value}>
                        <TextBox>
                            <MainHeaderContainer>
                                <HeaderTag>Baking</HeaderTag>
                                <HeaderText>
                                    <InsideHeader>Mexican Grilled Corn Recipe</InsideHeader>
                                </HeaderText>
                                <BelowHeader>
                                    <Icon size={20} icon={spoon}></Icon>
                                    <FoodDetails>4 SERVINGS</FoodDetails>
                                    <Icon size={20} icon={clockO}></Icon>
                                    <FoodDetails>30 MIN</FoodDetails>
                                    <Icon size={20} icon={person}></Icon>
                                    <FoodDetails>BY SANDRA FORTIN</FoodDetails>
                                </BelowHeader>
                                <Link to='/viewrecipe'><ImageButton>View Recipe</ImageButton></Link>
                            </MainHeaderContainer>
                        </TextBox>
                    </MainImage>
                    <MainImage1 value={this.state.value}>
                    <TextBox>
                            <MainHeaderContainer>
                                <HeaderTag>Curry</HeaderTag>
                                <HeaderText>
                                    <InsideHeader>Roast Chicken With Lemon Gravy</InsideHeader>
                                </HeaderText>
                                <BelowHeader>
                                    <Icon size={20} icon={spoon}></Icon>
                                    <FoodDetails>4 SERVINGS</FoodDetails>
                                    <Icon size={20} icon={clockO}></Icon>
                                    <FoodDetails>1 HR 20 MIN</FoodDetails>
                                    <Icon size={20} icon={person}></Icon>
                                    <FoodDetails>BY SANDRA FORTIN</FoodDetails>
                                </BelowHeader>
                                <Link to='/viewrecipe'><ImageButton>View Recipe</ImageButton></Link>
                            </MainHeaderContainer>
                        </TextBox>
                    </MainImage1>
                    <MainImage2 value={this.state.value}>
                    <TextBox>
                            <MainHeaderContainer>
                                <HeaderTag>Baking</HeaderTag>
                                <HeaderText>
                                    <InsideHeader>Avocado Melon Salad With Lime Vinaigrette</InsideHeader>
                                </HeaderText>
                                <BelowHeader>
                                    <Icon size={20} icon={spoon}></Icon>
                                    <FoodDetails>4 SERVINGS</FoodDetails>
                                    <Icon size={20} icon={clockO}></Icon>
                                    <FoodDetails>15 MIN</FoodDetails>
                                    <Icon size={20} icon={person}></Icon>
                                    <FoodDetails>BY SANDRA FORTIN</FoodDetails>
                                </BelowHeader>
                                <Link to='/viewrecipe'><ImageButton>View Recipe</ImageButton></Link>
                            </MainHeaderContainer>
                        </TextBox>
                    </MainImage2>
                    <MainImage3 value={this.state.value}>
                    <TextBox>
                            <MainHeaderContainer>
                                <HeaderTag>Baking</HeaderTag>
                                <HeaderText>
                                    <InsideHeader>Chunky Beef Stew</InsideHeader>
                                </HeaderText>
                                <BelowHeader>
                                    <Icon size={20} icon={spoon}></Icon>
                                    <FoodDetails>4 SERVINGS</FoodDetails>
                                    <Icon size={20} icon={clockO}></Icon>
                                    <FoodDetails>2 HR 30 MIN</FoodDetails>
                                    <Icon size={20} icon={person}></Icon>
                                    <FoodDetails>BY SANDRA FORTIN</FoodDetails>
                                </BelowHeader>
                                <Link to='/viewrecipe'><ImageButton>View Recipe</ImageButton></Link>
                            </MainHeaderContainer>
                        </TextBox>
                    </MainImage3>
                    <CarousalHolder>
                        <CarosalButtons onClick={this.FirstImage} value={this.state.value}><InsideButton>Mexican Grilled <br></br> Corn Recipe</InsideButton></CarosalButtons>
                        <CarosalButtons1 onClick={this.SecondImage} value={this.state.value}><InsideButton>Roast Chicken <br></br> With Lemon Gravy</InsideButton></CarosalButtons1>
                        <CarosalButtons2 onClick={this.ThirdImage} value={this.state.value}><InsideButton>Avocado Melon Salad <br></br>With Lime Vinaigrette</InsideButton></CarosalButtons2>
                        <CarosalButtons3 onClick={this.FourthImage} value={this.state.value}><InsideButton>Chunky Beef Stew</InsideButton></CarosalButtons3>

                    </CarousalHolder>
                </ImageWrapper>
                
                
            </div>
        );
    }
}
export default Middle