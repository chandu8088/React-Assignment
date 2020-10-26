import styled from 'styled-components';
export const Main_Footer=styled.div`
    background: #333333;
    color: #b8b8b8;
    width:100%;
    height:265px;
    display:flex;
    
`;
export const Footer_container=styled.div`
margin: 35px auto 40px auto;
width:960px;

`;
export const FIrst_column=styled.div`
width: 280px;
float: left;
    display: inline;
    margin-left: 10px;
    margin-right: 10px;
    display:inline;
    `;
export const Headertag=styled.h3`
font-size: 16px;
    font-weight: 700;
    color: #fff;
    padding-right: 10px;
    line-height: 34px;
    height:34px;
    margin-top:0px;
`;
export const F_line=styled.span`
border-color: #484848;
border-bottom: 1px solid #484848;
display:flex;
width:100%;
height: 1px;
    display: inline-block;
    margin-top:18px;
    
`;
export const F_para=styled.p`
line-height: 24px;
margin-top:0;
text-align:left;
color: #b8b8b8;
padding-right:0px;

`;
export const Header_holder=styled.div`
display:flex;
`;
export const Second_column=styled.div`
width: 160px;
float: left;
    margin-left: 10px;
    margin-right: 10px;
`;
export const UnorderList_Archive=styled.ul`
list-style: none outside;
padding: 0;
margin-top:0px;
color: #b8b8b8;
`;
export const ListInside=styled.li`
line-height: 18px;
padding-right: 0;
text-align:left;
margin-bottom:10px;
&::before {
    content: '▸';
    font-size: 18px;
    position: relative;
    left: 0px;
    top: -1px;
    color: rgb(255, 255, 255);
    padding: 0px 7px 0px 0px;
    
  }
  &:hover{
    color:white;
}
`;
export const InputElement=styled.input`
float: left;
    color: #808080;
    font-weight: 600;
    z-index: 1;
    font-size: 13px;
    width: 88%;
    padding: 11px 16px;
    line-height: 18px;
    height: 20px;
    background-color: #3a3a3a;
    border: 0.5px solid #474747;
`;
export const ButtonElement=styled.button`
background-color: #8dc63f;
font-size: 13px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    float: right;
    z-index: 5;
    position: relative;
    padding: 12px;
    line-height: 18px;
    margin: 0;
    height: 44px;
    color: #fff;
    margin-top: -44px;
    border: 0.5px solid #474747;
    &:hover{
        background-color:#b8b8b8;
    }
`;