import styled from 'styled-components'
export const ThemeContainer=styled.div`
background: #606060;
    width: 205px;
    position: fixed;
    top: 53px;
    z-index: 9999;
    left: ${props =>(props.value ?'0px':'-205px') };
`;
export const ThemeHeader=styled.h2`
background-color: #505050;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    padding: 7px 0 6px 20px;
`;
export const ColorsContainer=styled.div`
padding: 2px 18px 10px 18px;

`;
export const ColorsHeader=styled.h3`
color: #fff;
    font-size: 13px;
    margin: 5px 0 -5px 1px;
    font-weight: 600;
    line-height: 34px;
`;
export const ColorsBar=styled.ul`
list-style: none;
    padding-left:0px;
    margin-left:0;
    overflow: hidden;
`;
export const SingleColor=styled.li`
float: left;
    margin: 4px 2px 0 2px;
    line-height: 18px;
    
    
`;
export const ColorReference=styled.div`
display: block;
    width: 17px;
    height: 17px;
    cursor: pointer;
    background-color: ${props =>(props.value)}; 
`;
export const ResetButton=styled.div`
padding: 2px 18px 10px 18px;
margin: 0 0 10px 2px;

`;
export const ResetText=styled.a`
padding: 7px 14px;
    font-weight: 700;
background-color:#8dc63f;

    font-size: 13px;
    color: #fff;
`;
export const ThemeDragger=styled.div`
top:53px;
position:fixed;
width:50px;
height:50px;
left:${props =>(props.value ? '205px':'0px') };
background: #606060;
text-align:center;
padding-top:10px;
z-index:999;
`;