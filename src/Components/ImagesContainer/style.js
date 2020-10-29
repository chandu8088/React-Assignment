import styled from 'styled-components'
export const ImageContainer=styled.div`
position: relative;
    width: 960px;
    margin: 0 auto;
    padding: 0;
    @media only screen and (max-width: 990px) and (min-width: 768px)
{
    width: 768px;
}
@media only screen and (max-width: 767px) and (min-width: 480px)
{
    width: 420px;
}
@media only screen and (max-width: 479px)
{
    width: 300px;
}
@media only screen and (max-width: 1389px) and (min-width: 960px)
{
    position: relative;
    width: 960px;
    margin: 0 auto;
    padding: 0;
}
`;
export const InsideLeft=styled.div`
width: 700px;
float: left;
    margin-left: 10px;
    margin-right: 10px;
    @media only screen and (max-width: 1389px) and (min-width: 960px)
.container .twelve.columns {
    width: 700px;
}
@media only screen and (max-width: 990px) and (min-width: 768px)
{
    width: 556px;
}
@media only screen and (max-width: 767px) and (min-width: 480px)
{
    width: 420px;
}
@media only screen and (max-width: 479px) {
    width:300px;
}
`;
export const InsideRight=styled.div`
width: 220px;
float: left;
    display: inline;
    margin-left: 10px;
    margin-right: 10px;
    @media only screen and (max-width: 1389px) and (min-width: 960px)
{
    width: 220px;
}
@media only screen and (max-width: 990px) and (min-width: 768px)
{
    width: 172px;
}
@media only screen and (max-width: 767px) and (min-width: 480px){
    width: 420px;
}
@media only screen and (max-width: 479px){
    width: 300px;
}
`;
export const RecipeHeader=styled.h3`
font-size: 22px;
    background-color: #fff;
    padding-right: 10px;
    z-index: 5;
    position: relative;
    float: left;
    line-height: 34px;
    color: #606060;
    font-weight: 500;
    font-family: "Open Sans";
    margin-top:0;
    display:inline;
`;
export const Headerbar=styled.span`
width: 80%;
border-bottom: 1px solid #ebebeb;
    float: left;
    height: 1px;
    display: inline-block;
    margin: -16px 0 25px 0;
    display:inline;
    margin-top:18px;
`;
export const DisplayImages=styled.div`
position: relative;
    
    color: #808080;
    margin-top:60px;
`;
export const FirstImageContainer=styled.div`
    float:left;
    width: 213px;
    margin: 0 20px 0 0;
    margin-bottom: 20px !important;
    @media only screen and (max-width: 1389px) and (min-width: 960px)
{
    width: 213px;
    margin: 0 20px 0 0;
}
@media only screen and (max-width: 990px) and (min-width: 768px)
{
    width: 258px;
    margin: 0 20px 0 0;
}
@media only screen and (max-width: 767px) and (min-width: 480px)
{
    width: 420px;
    margin: 0;
}
@media only screen and (max-width: 479px) 
{
    width: 300px;
    margin: 0;
}
`;
export const ImageWrapper=styled.div`
position:relative;
width:100%;
`;
export const FiestImage=styled.img`

width:100%;
position: relative;
z-index:1;
height:187px;
`;

export const OnhoverIcon=styled.div`

display: inline-block;
background-color: rgba(51,51,51,0.8);
color: #fff;
padding: 8px 12px;
font-weight: 700;
text-transform: uppercase;
position: absolute;
top: 45%;
left: 50%;
-webkit-transform: translate(-50%,-50%);
-moz-transform: translate(-50%,-50%);
-o-transform: translate(-50%,-50%);
transform: translate(-50%,-50%);
font-size: 13px;
z-index:5
`;
export const RecipeBox=styled.div`
background-color: #f8f8f8;
    padding: 20px 25px ;
    margin-top:0px;
    
`;
export const RecipeName=styled.h3`
color: #606060;
    display: block;
    line-height: 26px;
    text-decoration: none;
    outline: 0;
    -webkit-transition: color 0.2s ease-in-out;
`;
export const Ratingbox=styled.div`
float: left;
box-sizing: content-box;
    overflow: hidden;
    position: relative;
    width: 100px;
    height: 30px;
    display: block;
    &::before {
        content: "★ ★ ★ ★ ★";
        font-family: FontAwesome;
        color: rgb(255, 199, 65);
        display: block;
        position: absolute;
        font-size: 20px;
        z-index: 10;
        letter-spacing: -0.5px;
    }
`;
export const RatingboxLess=styled.div`
float: left;
box-sizing: content-box;
    overflow: hidden;
    position: relative;
    width: 100px;
    height: 30px;
    display: block;
    
    &::after{
        content: "★ ★ ★ ★ ";
        font-family: FontAwesome;
        color: rgb(255, 199, 65);
        display: block;
        position: absolute;
        font-size: 20px;
        z-index: 10;
        letter-spacing: -0.5px;
    }
    
`;
export const Timer=styled.div`
color: #909090;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    float: right;
    margin-left: 15px;
    

`;
export const LeftsideContainer=styled.div`
width: 220px;
float: left;
    display: inline;
    margin-left: 10px;
    margin-right: 10px;
    text-align:left;

`;
export const SearchbarContainer=styled.div`
margin: 0 0 35px 0;

`;
export const SearchButton=styled.button`
border: none;
    cursor: pointer;
    color: #fff;
    float: right;
    width: 44px;
    height: 44px;
    display: inline;
    padding: 0;
    right: 0;
    border: none;
    position: absolute;
    &:hover{
        background-color:#808080;
    }
`;
export const InputTextform=styled.input.attrs({type:'text',placeholder:'Search for recipes'})`
font-size: 13px;
    width: 100%;
    padding: 12px 15px 12px 15px;
    float: left;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px 12px;
    outline: none;
    font-size: 13px;
    color: #777;
    height:44px;
    margin: 0;
    max-width: 100%;
    display: block;
    background-color: #fff;
    border: 1px solid #e8e8e8;
    font-weight: 600;

`;
export const SideArticleContainer=styled.div`
margin-top:80px;
margin-bottom:35px;
`;
export const SideArticle=styled.div`
border: 1px solid #e8e8e8;
    padding: 28px 25px;
    position: relative;

`;
export const Author=styled.span`
font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    color: #8dc63f;
    display: block;
`;
export const AuthorName=styled.span`
    font-size: 20px;
    font-weight: 700;
    color: #606060;
    display: block;
`;
export const AuthorImage=styled.img`
border-radius: 50%;
position: absolute;
top: 28px;
right: 25px;
height: 64px;
width: 64px;
`;
export const AboutAuthor=styled.p`
margin: 10px 0 0 0;
line-height: 24px;
font: inherit;
`;
export const PopularRecipeContainer=styled.div`
width:100%;
height:349px;
margin: 0 0 35px 0;
`;
export const ImageRecipeContainer=styled.div`
width:100%
display:flex;
height:100px;
margin-top:5px;
`;
export const PopularHeader=styled.h4`
font-size: 20px;
    background-color: #fff;
    padding-right: 10px;
    z-index: 5;
    line-height: 30px;
    color: #606060;
    font-weight: 500;
    height:30px;
    margin:0px;
`;
export const RecipeImage=styled.img`
    width: 100%;
    z-index:-5;
    height:98px;
`;
export const RecipeContentName=styled.div`
    
    margin-left:22px;
    position:relative;
    margin-top:-110px;
    z-index: 200;
    width: 80%;
    font-size: 18px;
    line-height: 18px;
    color: white;
    font-weight: 700;
`;
export const RecipeRating=styled.div`
box-sizing: content-box;
    position:relative;
    margin-top:-25px;
    width: 100%;
    height: 18px;
    display: block;
    margin-left:22px;
    &::before{
        content:"★ ★ ★ ★ ★";
        font-family: FontAwesome;
        color: rgb(255, 199, 65);
        display: block;
        font-size: 20px;
    }
`;
export const ShareContainer=styled.div`
margin: 0 0 35px 0;
display:flex;
width:100%;
height:268px;
`;
export const FacebookIcon=styled.div`
 width:107px;
 float:left;
 height:92px;
 margin-top:35px;
 background-color: #3b5998;
 padding-top:15px;
 color:white;
 text-align: center;
 cursor:pointer;
    position: absolute;
`;
export const TwitterIcon=styled.div`
 width:107px;
 float:left;
 height:92px;
 margin-top:35px;
 background-color: #33bcf3;
  color:white;
 text-align: center;
 padding-top:15px;
 margin-left:111px;
 cursor:pointer;

    position: absolute;
`;
export const GoogleIcon=styled.div`
 width:107px;
 float:left;
 height:92px;
 margin-top:145px;
 background-color: #dd4b39;
 color:white;
 text-align: center;
 padding-top:15px;
 cursor:pointer;
    position: absolute;
`;
export const Fans=styled.span`
visibility: visible;
    opacity: 1;
    font-weight: 700;
    font-size: 16px;
    ${FacebookIcon}:hover & {
        visibility: hidden;
      }
`;
export const Fallowers=styled.span`
visibility: visible;
    opacity: 1;
    font-weight: 700;
    font-size: 16px;
    ${TwitterIcon}:hover & {
        visibility: hidden;
      }
`;
export const GoogleFallowers=styled.span`
visibility: visible;
    opacity: 1;
    font-weight: 700;
    font-size: 16px;
    ${GoogleIcon}:hover & {
        visibility: hidden;
      }
`;
export const InvisibleFan=styled.span`
display: block;
visibility: hidden;
position: absolute;
bottom: 20px;
left: 50%;
transform: translateX(-50%);
    font-weight: 700;
    font-size: 13px;
    background-color: rgba(255,255,255,0.2);
    padding: 5px 10px;
${FacebookIcon}:hover & {
    visibility: visible;
  }
`;
export const InvisibleFallowerT=styled.span`
display: block;
visibility: hidden;
position: absolute;
bottom: 20px;
left: 50%;
transform: translateX(-50%);
    font-weight: 700;
    font-size: 13px;
    background-color: rgba(255,255,255,0.2);
    padding: 5px 10px;
${TwitterIcon}:hover & {
    visibility: visible;
  }
`;
export const InvisibleFallowerG=styled.span`
display: block;
visibility: hidden;
position: absolute;
bottom: 20px;
left: 50%;
transform: translateX(-50%);
    font-weight: 700;
    font-size: 13px;
    background-color: rgba(255,255,255,0.2);
    padding: 5px 10px;
${GoogleIcon}:hover & {
    visibility: visible;
  }
`;
