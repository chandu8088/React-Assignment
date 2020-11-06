import styled from 'styled-components';
import logo from '../../Assets/Images/logo.png'
import {Link} from "react-router-dom"
const MainHeader = styled.div`

position: relative;
width: 100%;
min-height: 74px;
@media only screen and (max-width:960px){
    display:none;
}
`;
const Container = styled.div`

    width: 960px;
    display:flex;
    margin:0 auto;
    color:white;
    
`;
const Imagcontainer = styled.div`
float: left;
    display: inline;
    height:74px;
    margin-left: 10px;
    margin-right: 10px;
    width:160px;
    display:flex;
    @media only screen and (max-width: 768px) {
        
        {
         width:100%;
       }
     }
    
`;
const Chow_image = styled.img.attrs({ src: logo })`
width:auto;
height:34px;
margin-top:20px;

`;
const Navtab = styled.div`
margin-left: 10px;
    margin-right: 10px;
    width:760px;
    display:flex;
    @media only screen and (max-width: 768px) {
        
        {
         display:hide;
       }
     }
    
`;
const Navbar = styled.div`
width:598px;
height:74px;
margin-left:161px;
margin-right:10px;
display:flex;
color:black;
font-weight:600;
@media only screen and (max-width: 768px) {
        
    {
     display:hide;
   }
 }

`;

const Home_container = styled.div`
display:flex;
justify-content:center;
justify-content: space-around;
margin-left:15px;
padding:28px 16px 25px 16px;
opacity:75%;
cursor:Pointer;
text-decoration: none;
@media only screen and (max-width: 768px) {
        
    {
     width: 100%;
   }
 }
`;
const Arrow = styled.p`
  margin-right:10px;
  @media only screen and (max-width: 768px) {
        
    {
     width: 100%;
   }
 }
`;
const UnorderList = styled.ul`
border-color: #8dc63f !important;
background-color: #333;
    
    border-top: 3px solid #808080;
    margin: -3px 0 0 0;
    position: absolute;
    top: 100%;
    left:660px;
    width: 175px;
    padding: 0;
    z-index:5;

`;
const UnorderListRecipe=styled.ul`
border-color: #8dc63f !important;
background-color: #333;
    
    border-top: 3px solid #808080;
    margin: -3px 0 0 0;
    position: absolute;
    top: 100%;
    left:650px;
    width: 175px;
    padding: 0;
    z-index:5;

`;
const UnorderSublist = styled.li`
    border: 1px solid #484848;
    margin: 0;
    padding-top:6px;
    width: 100%;
    position: relative;
    font-size: 100%;
    font: inherit;
    display: list-item;
    list-style-type: none;
    color: #9c9c9c;
    font-weight: 500;
    height:28px;
    font-size: 14px;
    
`;


export const UnorderListHome=styled.ul`
border-color: #8dc63f !important;
background-color: #333;
    border-top: 3px solid #808080;
    margin: -3px 0 0 0;
    position: absolute;
    top: 100%;
    left:672px;
    width: 75px;
    padding: 0;
`;
export const BorderSubmit=styled.ul`
border-color: #8dc63f !important;
background-color: #333;
    border-top: 3px solid #808080;
    margin: -3px 0 0 0;
    position: absolute;
    top: 100%;
    left:760px;
    width: 145px;
    padding: 0;
    overflow:visible;
    
`;
export const MobileHeader=styled.div`
max-width:960px;
margin: 20px auto;
min-height:74px;
display: none;
@media only screen and (max-width:960px){
    display:block;
    max-width:768px;
}
@media only screen and (max-width: 767px){
    display:block;
    max-width:480px;
}
@media only screen and (max-width: 480px){
    max-width:320px;
    display:block;
}
`

export const MobileDiv=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:6px 30px;
width:100%;
height:45px;
display:flex;
align-items:flex-start;
background-color: #f2f2f2;
`

export const MenuSpan=styled.span`
font-family:OpenSans;
margin-top:6px;
color:  rgb(128, 128, 128);
font-size:14px;
font-weight:700;
`
export const Button= styled.button`
cursor:pointer;
padding:0;
outline:none;
border:none;`

export const SelectedMobileDiv=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:6px 30px;
width:100%;
height:45px;
display:flex;
align-items:flex-start;
background-color: #8DC63F;
`

export const DropDownContainer=styled.div`
width:100%;
`
export const Heading=styled(Link)`
width:100%;
font-family:OpenSans;
text-decoration:none;
font-weight:600;
padding:12px 25px;
display:block;
background-color:#f0f0f0;
color:#808080;
&:hover{
    color: white;
    background-color: #c0c0c0;
}

`

export const SubHeading=styled.div`
width:100%;
font-family:OpenSans;
text-decoration:none;
padding:12px 20px 12px 30px;
font-weight:600;
display:block;
background-color:#f8f8f8;
color:#808080;
&:hover{
    color: white;
    background-color: #c0c0c0;
}
`
export const StyledLogout= styled.a`
width:100%;
font-family:OpenSans;
text-decoration:none;
font-weight:600;
padding:12px 20px;
display:block;
cursor: pointer;
background-color:#f0f0f0;
color:#808080;
&:hover{
    color: white;
    background-color: #c0c0c0;
}`
export { MainHeader, Container, Chow_image, Imagcontainer, Navtab, Navbar, Home_container, Arrow,UnorderListRecipe, UnorderList, UnorderSublist,
    
 }
