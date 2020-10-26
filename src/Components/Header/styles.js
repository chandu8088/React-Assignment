import styled from 'styled-components';
import logo from '../../Assets/Images/logo.png'
const MainHeader = styled.div`

position: relative;
width: 100%;
min-height: 74px;
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
`;
const Chow_image = styled.img.attrs({ src: logo })`
width:auto;
height:34px;
margin-top:20px;
`
;
const Navtab = styled.div`
margin-left: 10px;
    margin-right: 10px;
    width:760px;
    display:flex;
`;
const Navbar = styled.div`
width:598px;
height:74px;
margin-left:161px;
margin-right:10px;
display:flex;
color:black;
font-weight:600;
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
`;
const Arrow = styled.p`
  margin-right:10px;
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
    left:760px;
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
const UnorderListPage=styled.ul`
border-color: #8dc63f !important;
background-color: #333;
    
    border-top: 3px solid #808080;
    margin: -3px 0 0 0;
    position: absolute;
    top: 100%;
    left:860px;
    width: 175px;
    padding: 0;
    z-index:5;
`;
const UnorderListShop=styled.ul`
border-color: #8dc63f !important;
background-color: #333;
    
    border-top: 3px solid #808080;
    margin: -3px 0 0 0;
    position: absolute;
    top: 100%;
    left:950px;
    width: 175px;
    padding: 0;
    overflow:visible;
    z-index:5;

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
export const BorderHome=styled.ul`
border-color: #8dc63f !important;
background-color: #333;
    border-top: 3px solid #808080;
    margin: -3px 0 0 0;
    position: absolute;
    top: 100%;
    left:575px;
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
    left:1040px;
    width: 145px;
    padding: 0;
    overflow:visible;
    
`;
export { MainHeader, Container, Chow_image, Imagcontainer, Navtab, Navbar, Home_container, Arrow,UnorderListRecipe, UnorderList, UnorderSublist,
    UnorderListShop,UnorderListPage
 }
