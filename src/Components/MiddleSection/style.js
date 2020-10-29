import styled from 'styled-components'
import img1 from '../../Assets/Images/sliderA_01.jpg'
import img2 from '../../Assets/Images/sliderA_02.jpg'
import img3 from '../../Assets/Images/sliderA_03.jpg'
import img4 from '../../Assets/Images/sliderA_04.jpg'
export const ImageWrapper=styled.div`
height: 490px;
width:100%;
margin-bottom: 40px;
position: relative;
    direction: ltr;
    font: inherit;
    @media only screen and (max-width: 1389px) and (min-width: 960px)
 {
    height: 490px;
    width:100%;
}
@media only screen and (max-width: 990px) and (min-width: 768px)
 {
    height: 490px;
    
}
@media only screen and (max-width: 767px) and (min-width: 480px)
 {
    height: 400px;

}
@media only screen and (max-width: 479px)
 {
    height: 390px;
    
}
`;
export const MainImage=styled.div`
width: 100%;
    height: 415px;
    z-index:1;    
    margin-top:0;
    position: relative;
    visibility:${props =>(props.value ===1 ?'visible':'hidden') };
    float: left;
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
    background:linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),URL(${img1});
    @media only screen and (max-width: 1389px) and (min-width: 960px)
 {
    height: 415px;
    width:100%;
}
@media only screen and (max-width: 990px) and (min-width: 768px)
 {  height:415px;
    width:100%;
}
@media only screen and (max-width: 767px) and (min-width: 480px)
 {  height:330px;
    width:100%;

}
@media only screen and (max-width: 479px)
 {  height:305px;
    width:100%;
}
    `;
    export const MainImage1=styled.div`
width: 100%;
    height: 415px;
    z-index:1;    
    margin:top:0;
    position: absolute;
    float: left;
    visibility:${props =>(props.value ===2 ?'visible':'hidden') };
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
    background:linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),URL(${img2});
    @media only screen and (max-width: 1389px) and (min-width: 960px)
    {
       height: 415px;
       width:100%;
   }
   @media only screen and (max-width: 990px) and (min-width: 768px)
    {  height:415px;
       width:100%;
   }
   @media only screen and (max-width: 767px) and (min-width: 480px)
    {  height:330px;
       width:100%;
   
   }
   @media only screen and (max-width: 479px)
    {  height:305px;
       width:100%;
   }
    `;
    export const MainImage2=styled.div`
width: 100%;
    height: 415px;
    z-index:1;    
    margin-top:0;
    position: absolute;
    float: left;
    visibility:${props =>(props.value ===3 ?'visible':'hidden') };
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
    background:linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),URL(${img3});
    @media only screen and (max-width: 1389px) and (min-width: 960px)
    {
       height: 415px;
       width:100%;
   }
   @media only screen and (max-width: 990px) and (min-width: 768px)
    {  height:415px;
       width:100%;
   }
   @media only screen and (max-width: 767px) and (min-width: 480px)
    {  height:330px;
       width:100%;
   
   }
   @media only screen and (max-width: 479px)
    {  height:305px;
       width:100%;
   }
    `;
export const MainImage3=styled.div`
    width: 100%;
    height: 415px;
    z-index:1;    
    margin-top:0;
    position: absolute;
    float: left;
    visibility:${props =>(props.value ===4 ?'visible':'hidden') };
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
    background:linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),URL(${img4});
    @media only screen and (max-width: 1389px) and (min-width: 960px)
    {
       height: 415px;
       width:100%;
   }
   @media only screen and (max-width: 990px) and (min-width: 768px)
    {  height:415px;
       width:100%;
   }
   @media only screen and (max-width: 767px) and (min-width: 480px)
    {  height:330px;
       width:100%;
   
   }
   @media only screen and (max-width: 479px)
    {  height:305px;
       width:100%;
   }
    `;
export const CarousalHolder=styled.div`
width: 940px;
margin: 0 auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    font-weight: 700;
    height: 75px;
    padding: 0;
    display:flex;
    @media only screen and (max-width: 990px) and (min-width: 768px)
{
    width: 748px;
}
@media only screen and (max-width: 767px) and (min-width: 480px)
{
    width: 420px;
}
@media only screen and (max-width: 479px)
{   height:85px;
    width: 300px;
}
`;
export const CarosalButtons=styled.div`
cursor: pointer;
    height: 75px;
    display: inline-block;
    display:flex;
justify-content:center;
justify-content: space-around;
width:235px;
font-weight: 700;
border:1px solid rgb(227, 227, 227);
color:${props =>(props.value ===1 ?'rgb(256,256,256)':'rgb(153, 153, 153)') };
@media only screen and (max-width: 990px) and (min-width: 768px)
{
    width: 187px;
}
@media only screen and (max-width: 767px) and (min-width: 480px)
{
    width: 105px;
    font-size:15px
    height:78px;
}
@media only screen and (max-width: 479px)
{
    width: 75px;
    font-size:13px;
    height:85px;
}
`;
export const CarosalButtons1=styled.div`
cursor: pointer;
    height: 75px;
    display: inline-block;
    display:flex;
justify-content:center;
justify-content: space-around;
width:235px;
font-weight: 700;
border:1px solid rgb(227, 227, 227);
color:${props =>(props.value ===2 ?'rgb(256,256,256)':'rgb(153, 153, 153)') };
@media only screen and (max-width: 990px) and (min-width: 768px)
{
    width: 187px;

}
@media only screen and (max-width: 767px) and (min-width: 480px)
{
    width: 105px;
    font-size:15px;
    height:78px;
}
@media only screen and (max-width: 479px)
{
    width: 75px;
    font-size:13px;
    height:85px;
}
`;
export const CarosalButtons2=styled.div`
cursor: pointer;
    height: 75px;
    display: inline-block;
    display:flex;
justify-content:center;
justify-content: space-around;
width:235px;
font-weight: 700;
border:1px solid rgb(227, 227, 227);
color:${props =>(props.value ===3 ?'rgb(256,256,256)':'rgb(153, 153, 153)') };
@media only screen and (max-width: 990px) and (min-width: 768px)
{
    width: 187px;
}
@media only screen and (max-width: 767px) and (min-width: 480px)
{
    width: 105px;
    font-size:15px;
    height:78px;
}
@media only screen and (max-width: 479px)
{
    width: 75px;
    font-size:13px;
    height:85px;
}
`;
export const CarosalButtons3=styled.div`
cursor: pointer;
    height: 75px;
    display: inline-block;
    display:flex;
justify-content:center;
justify-content: space-around;
width:235px;
font-weight: 700;
border:1px solid rgb(227, 227, 227);
color:${props =>(props.value ===4 ?'rgb(256,256,256)':'rgb(153, 153, 153)') };
@media only screen and (max-width: 990px) and (min-width: 768px)
{
    width: 187px;
}
@media only screen and (max-width: 767px) and (min-width: 480px)
{
    width: 105px;
    font-size:15px;
    height:78px;
}
@media only screen and (max-width: 479px)
{
    width: 75px;
    font-size:13px;
    height:85px;
    
}
`;
export const InsideButton=styled.div`
margin:auto;
text-align:center;
@media only screen and (max-width: 479px)
{
    
    font-size:13px;
}
`;

export const TextBox=styled.div`
width: 960px;
    margin: 0px auto;
    padding: 0px;
    font-family: "Open Sans", sans-serif;
    @media only screen and (max-width: 990px) and (min-width: 768px)
{
    width: 748px;
}
@media only screen and (max-width: 767px) and (min-width: 480px)
 {
    width: 420px;
}
@media only screen and (max-width: 479px)
{
    width: 300px;
}
`;
export const MainHeaderContainer=styled.div`
position: relative;
    top: 95px;
    margin: 0px 25px;
    color: rgb(255, 255, 255);
    @media only screen and (max-width: 479px)
    {
       top:50px;
   }
`;
export const HeaderTag=styled.li`
background-color: ${props=>props.value};
    font-weight: 300;
    text-transform: uppercase;
    font-size: 13px;
    padding: 5px 9px;
    list-style: none;
    width: 46px;
    text-align: center;
    z-index:9
`;
export const HeaderText=styled.div`
width: 400px;
    cursor: pointer;
    color: rgb(255, 255, 255);
    @media only screen and (max-width: 479px)
 {
    font-size: 30px;
    line-height: 25px;
    width:280px;
}
`;

export const InsideHeader=styled.h2`
margin: 14px 0px 0px;
text-decoration: none;
    font-size: 48px;
    line-height: 50px;
    font-family: Arvo, serif;
    color: rgb(255, 255, 255);
    font-weight: 500;
    z-index:50;
    @media only screen and (max-width: 479px)
    {
        font-size: 30px;
        line-height: 25px;
    }
`;
export const BelowHeader=styled.ul`
list-style: none;
    display: flex;
    margin: 8px 0px 0px;
    padding: 0px;
    color: rgb(255, 255, 255);
`;
export const FoodDetails=styled.li`
font-weight: 700;
    text-transform: uppercase;
    font-size: 13px;
    margin: 0px 15px 0px 0px;
    padding-left: 5px;
    padding-top:4px;
    display: list-item;
    @media only screen and (max-width: 479px)
    {
        font-size: 10px;
    }
    
`;
export const ImageButton=styled.div`
border: 3px solid rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 10px 0px;
    width: 130px;
    cursor: pointer;
    margin-top: 18px;
    outline: none;
    color: rgb(255, 255, 255);
    background-color: rgba(255, 255, 255, 0.2);
    text-align:center;
    @media only screen and (max-width: 479px)
    {
        font-size: 10px;
        margin-top: 12px;
    }
`;