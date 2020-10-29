import styled from 'styled-components'
import img1 from '../../Assets/Images/recipePhoto-01.jpg'
export const BackgroundImage=styled.div`
max-height: 250px;
    overflow: hidden;
    position: relative;
    margin: 0 0 40px 0;
    @media only screen and (max-width: 767px)
{
    max-height: 125px;
}
`;
export const ImageElement=styled.img.attrs({src:"http://www.vasterad.com/themes/chow/images/recipeBackground.jpg"})`
width: 100%;
    height: auto;
    @media only screen and (max-width: 767px)
{
    height: 125px;
    width: auto;
    position: relative;
    display: block;
}
`;
export const SideImagecontainer=styled.div`
width: 700px;
float: left;
    display: inline;
    margin-left: 10px;
    margin-right: 10px;
    @media only screen and (max-width: 1389px) and (min-width: 960px)
 {
    width: 700px;
}
@media only screen and (max-width: 990px) and (min-width: 768px)
.container .twelve.columns {
    width: 556px;
}
@media only screen and (max-width: 767px) and (min-width: 480px){
    width: 420px;
}
@media only screen and (max-width: 767px){
    width: 300px;
}
`;
export const MainHeader=styled.div`
margin-right: 40px;
    position: relative;
    top: -90px;
    color: rgb(128, 128, 128);
`;
export const HeaderContainer=styled.div`
line-height: 30px;
    padding: 35px;
    width:90%;
    background-color: rgb(248, 248, 248);
    position:relative;
`;
export const HeaderText=styled.h2`
    font-size: 30px;
    font-family: Arvo;
    color: rgb(96, 96, 96);
    margin: 0px;
    font-weight: 600;
`;
export const Rating=styled.div`
color: rgb(144, 144, 144);
    font-size: 16px;
    &::before {
        content: "★ ★ ★ ★ ★";
        font-family: FontAwesome;
        color: rgb(255, 199, 65);
        font-size: 30px;
        z-index: 10;
        letter-spacing: -2.5px;
    }
`;
export const Designbox=styled.div`
border-style: solid;
    border-color: rgb(224, 224, 224) transparent;
    border-width: 0px 48px 48px 0px;
    width: 1px;
    position: absolute;
    right: 0px;
    top: 0px;
`;
export const ImageBox=styled.img.attrs({ src: img1 })`
width: 100%;
    height: 320px;
    @media only screen and (max-width: 1389px) and (min-width: 960px)
 {
    height: 320px;
}
@media only screen and (max-width: 990px) and (min-width: 768px)
 {
    height: 260px;
}
@media only screen and (max-width: 767px)
{
    height: 220px;
}
@media only screen and (max-width: 479px)
{
    height: 180px;
}
`;
export const ImageDetails=styled.div`
padding: 20px 23px 20px 35px;
    background-color: rgb(248, 248, 248);
    margin-top: -5px;
    color: rgb(128, 128, 128);
`;
export const ImageText=styled.div`
margin-right: 40px;
    padding-right: 30px;
    border-right: 1px solid rgb(216, 216, 216);
    font-size: 14px;
    float:left;
`;
export const Border=styled.div`
display:inline;
`;
export const Paragraph=styled.p`
padding: 15px 0px;
    margin-top:20px;
    line-height: 24px;
    font-size: 15px;
    text-align:left;
    width:680px;
`;
export const Ingrediants=styled.h3`
font-size: 22px;
    color: rgb(96, 96, 96);
    font-weight: 500;
`;
export const List=styled.ul`
background-color: rgb(255, 255, 255);
    border: 1px solid rgb(233, 233, 233);
    padding: 39px 0px;
    position: relative;
    margin: 12px 0px 35px;
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    @media only screen and (max-width: 990px) and (min-width: 768px)
{
    left: 60px;
}
@media only screen and (max-width: 767px)
{
    padding: 30px 0;
}

`;
export const Listitems=styled.div`
border-bottom: 1px solid rgb(233, 233, 233);
    border-top: 1px solid rgb(233, 233, 233);
    padding: 10px 0px 4px 120px;
    cursor: pointer;

`;
export const Checkbox=styled.input.attrs({type:'checkbox'})`
background-color: initial;
    cursor: default;
    appearance: checkbox;
    box-sizing: border-box;
    margin: 3px 3px 3px 4px;
    padding: initial;
    border: initial;
    margin-right:15px;
`;
export const Direction=styled.div`
display: flex;
    -webkit-box-align: center;
    align-items: center;
`;
export const NumberValue=styled.div`
text-align: center;
    line-height: 32px;
    color: rgb(153, 153, 153);
    font-weight: 700;
    font-size: 16px;
    background-color: rgb(244, 244, 244);
    padding: 0px 10px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;
export const DirectionText=styled.div`
padding: 15px 10px;
    line-height: 24px;
    font-size: 16px;
`;