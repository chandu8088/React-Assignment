import React, { Component } from 'react';
import imag1 from '../../Assets/Images/recipeThumb-01.jpg'
import axios from 'axios'
import { Icon } from 'react-icons-kit'
import {clockO} from 'react-icons-kit/fa/clockO'
import Rightside from './Rightside'
import {Route,Link} from 'react-router-dom'


import {ImageContainer,InsideLeft,
    RecipeHeader,
    Headerbar,
    DisplayImages,
    FirstImageContainer,
    ImageWrapper,
    FiestImage,
    OnhoverIcon,
    RecipeBox,
    RecipeName,
    Ratingbox,
    RatingboxLess,Timer,
    
} from './style'
class Container extends Component
{    state={posts:[],onhovermouse:false,activeIndex:false}
     
     
    
            componentDidMount(){
                axios.get('https://my-food-recipe.firebaseio.com/.json')
                
                .then(response=>{
                                        this.setState({
                        posts: response.data.RecipeList
                    })
                    
            })
                
            }
            MouseOver=(index)=>{
                
        this.setState({onhovermouse:true,activeIndex:index})
        
    }
    MouseOut=()=>{

        this.setState({onhovermouse:false,activeIndex:false})
        
    }
    render(){
        const post=this.state.posts
        
        return(
            <div>
                <ImageContainer>
                    <InsideLeft>
                        <RecipeHeader>Latest Recipes</RecipeHeader>
                        <Headerbar/>
                        <DisplayImages>
                        {
                                Object.keys(post).map((key,index)=> { 
                                    return (
                                    <div key={key}>
                                    <FirstImageContainer>
                                    <ImageWrapper  onMouseOver={() => this.MouseOver(index)} onMouseOut={this.MouseOut}  >
                                        <FiestImage  src={require(`../../Assets/Images/${post[key].image}.jpg`)}></FiestImage>
                                        { 
                                        this.state.onhovermouse===true && this.state.activeIndex===index?
                                            <div>
                                                <OnhoverIcon onMouseOver={() => this.MouseOver(index)} onMouseOut={this.MouseOut} >View Recipe</OnhoverIcon>
                                            </div>:null
                                        }
                                    </ImageWrapper>
                                    <RecipeBox>
                                    <RecipeName >{post[key].name}</RecipeName>
                                    {
                                        post[key].rating==5 ?
                                        <Ratingbox></Ratingbox>: <RatingboxLess></RatingboxLess>
                                    }
                                    <Timer><Icon icon={clockO}/>{post[key].min}</Timer>
                                    </RecipeBox>    
                                    </FirstImageContainer>
                                    </div>)
                                })
                                }
                        </DisplayImages>
                    </InsideLeft>
                    <Rightside></Rightside>
                </ImageContainer>
            </div>
        )
    }
}
export default Container