import {ic_search} from 'react-icons-kit/md/ic_search'
import {facebook} from 'react-icons-kit/fa/facebook'
import {twitter} from 'react-icons-kit/fa/twitter'
import {googlePlus} from 'react-icons-kit/fa/googlePlus'
import { Icon } from 'react-icons-kit'
import React, { Component } from 'react';
import {InsideRight,LeftsideContainer,
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
    InvisibleFan} from './style'
    import {connect} from 'react-redux'
class Rightside extends Component{
    render(){
        const imagedetails=[{image:"http://www.vasterad.com/themes/chow/images/featuredRecipe-01.jpg",name:"Chocolate Cake With Green Tea Cream"},
                            {image:"http://www.vasterad.com/themes/chow/images/featuredRecipe-02.jpg",name:"Mexican Grilled Corn Recipe"},
                            {image:"http://www.vasterad.com/themes/chow/images/featuredRecipe-03.jpg",name:"Pollo Borracho With Homemade Tortillas"}]
        return(
            <div>
                <InsideRight>
                        <LeftsideContainer>
                            <SearchbarContainer>
                                <SearchButton style={{backgroundColor:this.props.tm}}><Icon icon={ic_search}/></SearchButton>
                                <InputTextform></InputTextform>
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
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        tm:state.theme
    };
    };
export default connect(mapStateToProps)(Rightside); 
