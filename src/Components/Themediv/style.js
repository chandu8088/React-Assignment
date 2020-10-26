import styled from 'styled-components'
export const ThemeContainer=styled.div`
background: #606060;
    width: 205px;
    position: fixed;
    top: 53px;
    z-index: 9999;
    left: 0px;
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
    margin: 0 0px 10px 0;
    overflow: hidden;
`;
export const SingleColor=styled.li`
float: left;
    margin: 4px 2px 0 2px;
    line-height: 18px;
    background: ${props =>(props.color)}; 
    display:flex;
`;
export const ColorReference=styled.div`
display: block;
    width: 17px;
    height: 17px;
    cursor: pointer;
`;