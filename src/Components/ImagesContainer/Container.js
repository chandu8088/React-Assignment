import React, { Component } from 'react';
import imag1 from '../../Assets/Images/recipeThumb-01.jpg'
import axios from 'axios'
import { Icon } from 'react-icons-kit'
import {clockO} from 'react-icons-kit/fa/clockO'
import Rightside from './Rightside'
import {Route,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {ic_search} from 'react-icons-kit/md/ic_search'
import {facebook} from 'react-icons-kit/fa/facebook'
import {twitter} from 'react-icons-kit/fa/twitter'
import {googlePlus} from 'react-icons-kit/fa/googlePlus'
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
    InsideRight,LeftsideContainer,
    SearchbarContainer,
    SearchButton,
    InputTextform,
    SideArticle,
    SideArticleContainer,
    Author,
    AuthorName,
    AuthorImage,
    AboutAuthor,
    PopularHeader,
    RecipeImage,
    RecipeContentName,
    RecipeRating,
    ImageRecipeContainer,
    PopularRecipeContainer,
    ShareContainer,
    FacebookIcon,
    TwitterIcon,
    GoogleIcon,
    Fans,
    InvisibleFallowerT,
    InvisibleFallowerG,
    Fallowers,
    GoogleFallowers,
    InvisibleFan
    
} from './style'
class Container extends Component
{    state={posts:[],onhovermouse:false,activeIndex:false,search:''}
     
     
    
            componentDidMount(){
                axios.get('https://foodrecipejson.firebaseio.com/.json')
                
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
    updateSearch=(e)=>{
        this.setState({search:e.target.value})
        
    }
    render(){
        const post=this.state.posts

        const imagedetails=[{image:"http://www.vasterad.com/themes/chow/images/featuredRecipe-01.jpg",name:"Chocolate Cake With Green Tea Cream"},
                            {image:"http://www.vasterad.com/themes/chow/images/featuredRecipe-02.jpg",name:"Mexican Grilled Corn Recipe"},
                            {image:"http://www.vasterad.com/themes/chow/images/featuredRecipe-03.jpg",name:"Pollo Borracho With Homemade Tortillas"}]
        
        return(
            
            <div> 
                <ImageContainer>
                    <InsideLeft>
                        <RecipeHeader>Latest Recipes</RecipeHeader>
                        <Headerbar/>
                        <DisplayImages>
                        { this.state.search !==''?Object.keys(this.state.posts).filter(
            (key)=>  //console.log(this.state.posts[key].name.includes(this.state.search))

                 this.state.posts[key].name.toLowerCase().includes(this.state.search.toLowerCase())
            
        ).map((filterkey,index)=> { 
            console.log(post[filterkey].name)
            return (
            <div key={filterkey}>
            <FirstImageContainer>
            <ImageWrapper  onMouseOver={() => this.MouseOver(index)} onMouseOut={this.MouseOut}  >
                <Link to='/viewrecipe'><FiestImage  src={require(`../../Assets/Images/${post[filterkey].image}.jpg`)}></FiestImage></Link>
                { 
                this.state.onhovermouse===true && this.state.activeIndex===index?
                    <div>
                        <OnhoverIcon onMouseOver={() => this.MouseOver(index)} onMouseOut={this.MouseOut} >View Recipe</OnhoverIcon>
                    </div>:null
                }
            </ImageWrapper>
            <RecipeBox>
            <RecipeName >{post[filterkey].name}</RecipeName>
            {
                post[filterkey].rating==5 ?
                <Ratingbox></Ratingbox>: <RatingboxLess></RatingboxLess>
            }
            <Timer><Icon icon={clockO}/>{post[filterkey].min}</Timer>
            </RecipeBox>    
            </FirstImageContainer>
            </div>)
        }):

                    
                              
                                Object.keys(post).map((key,index)=> { 
                                    return (
                                    <div key={key}>
                                    <FirstImageContainer>
                                    <ImageWrapper  onMouseOver={() => this.MouseOver(index)} onMouseOut={this.MouseOut}  >
                                        <Link to='/viewrecipe'><FiestImage  src={require(`../../Assets/Images/${post[key].image}.jpg`)}></FiestImage></Link>
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
                    <InsideRight>
                        <LeftsideContainer>
                            <SearchbarContainer>
                                <SearchButton style={{backgroundColor:this.props.tm}}><Icon icon={ic_search}/></SearchButton>
                                <InputTextform onChange={this.updateSearch}></InputTextform>
                            </SearchbarContainer>
                            <SideArticleContainer>
                                <SideArticle>
                                    <Author>Author</Author>
                                    <AuthorName>Sandra<br/>Fortin</AuthorName>
                                    <span><a href="mailto:sandra@chow.com">sandra@chow.com</a></span>
                                    <AuthorImage src="http://www.vasterad.com/themes/chow/images/author-photo.png"></AuthorImage>
                                    <AboutAuthor>I'm Sandra and this is where I share my stuff. I am madly in love with food. You will find a balance of healthy recipes, comfort food and indulgent desserts.</AboutAuthor>
                                </SideArticle>
                            </SideArticleContainer>
                            <PopularRecipeContainer>
                                <PopularHeader>Popular Recipe</PopularHeader>
                                { imagedetails.map(details=>(
                                    <div>
                                        <ImageRecipeContainer>
                                        <RecipeImage src={details.image}></RecipeImage>
                                        <RecipeContentName><h4>{details.name}</h4></RecipeContentName>
                                        <RecipeRating></RecipeRating>
                                        </ImageRecipeContainer>
                                    </div>
                                ))
                                }
                            </PopularRecipeContainer>
                            <ShareContainer>
                                <PopularHeader>Share</PopularHeader>
                                
                                    <FacebookIcon><Icon  size={32} icon={facebook}/>
                                    <Fans><br/>1,234<br/>Fans</Fans>
                                    <InvisibleFan>Like</InvisibleFan>
                                    </FacebookIcon>
                                    <TwitterIcon><Icon size={32} icon={twitter}/>
                                    <Fallowers><br/>863<br/>Fallowers</Fallowers>
                                    <InvisibleFallowerT>Fallow</InvisibleFallowerT>
                                    </TwitterIcon>
                                    <GoogleIcon><Icon size={32} icon={googlePlus}/>
                                    <GoogleFallowers><br/>902<br/>Follower</GoogleFallowers>
                                    <InvisibleFallowerG>Fallow</InvisibleFallowerG>
                                    </GoogleIcon>
                                
                            </ShareContainer>
                        </LeftsideContainer>
                    </InsideRight>
                </ImageContainer>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        tm:state.theme
    };
    };
export default connect(mapStateToProps)(Container)