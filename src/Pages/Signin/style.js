import styled from 'styled-components'
import Signin from '../../Assets/Images/Signin.jpeg'
export const PageWrapper=styled.div`
min-width: auto;
    max-width: 100%;
    display: flex;
`;
export const SideImage=styled.div`
width: 60%;
    height: 1050px;
    background-image:URL("${Signin}");
    @media (max-width: 425px)
 {
    display: none;
}
`;
export const FromElement=styled.div`
padding: 20px;
    width: 40%;
    font-size: 18px;
    @media (max-width: 425px)
{
    width: 100%;
}
`;
export const Pageheader=styled.p`
font-size: 39px;
    color: rgb(51, 51, 51);
    line-height: 1.2;
    font-weight: 500;
    padding: 20px 0px 10px;
`;
export const NameContainer=styled.div`
border-bottom: 1px solid rgb(153, 153, 153);
    margin-bottom: 20px;
    position: relative;
`;
export const NameLabel=styled.label`
color: rgb(153, 153, 153);
    line-height: 1.8;
    font-weight: 700;
    font-size: 18px;
`;
export const NameInput=styled.input.attrs({placeholder:'Name'})`
width: 100%;
    height: 45px;
    box-sizing: border-box;
    border: 0px;
    font-size: 16px;
    color: rgb(141, 198, 63);
    outline: none;
    padding: 1px 2px;

`;
export const EmailInput=styled.input.attrs({placeholder:'Email'})`
width: 100%;
    height: 45px;
    box-sizing: border-box;
    border: 0px;
    font-size: 16px;
    color: rgb(141, 198, 63);
    outline: none;
    padding: 1px 2px;

`;
export const UsernameInput=styled.input.attrs({placeholder:'Usernsme'})`
width: 100%;
    height: 45px;
    box-sizing: border-box;
    border: 0px;
    font-size: 16px;
    color: rgb(141, 198, 63);
    outline: none;
    padding: 1px 2px;

`;
export const PasswordInput=styled.input.attrs({placeholder:'*******'})`
width: 100%;
    height: 45px;
    box-sizing: border-box;
    border: 0px;
    font-size: 16px;
    color: rgb(141, 198, 63);
    outline: none;
    padding: 1px 2px;

`;
export const RepeatPasswordInput=styled.input.attrs({placeholder:'*******' })`
width: 100%;
    height: 45px;
    box-sizing: border-box;
    border: 0px;
    font-size: 16px;
    color: rgb(141, 198, 63);
    outline: none;
    padding: 1px 2px;

`;
export const SignUpButton=styled.button`
width: 150px;
    height: 45px;
    background-color: rgb(141, 198, 63);
    color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: 600;
    margin-top: 20px;
    border: none;
    outline: none;
    border-radius: 20px;

`;
export const SignInButton=styled.button`
width: 150px;
    height: 45px;
    font-size: 15px;
    font-weight: 600;
    margin-top: 20px;
    border: none;
    outline: none;
    border-radius: 20px;
    background-color: transparent;
    color: rgb(153, 153, 153);
    float: right;
    &:hover{
        background-color: rgb(141, 198, 63);;
        color:rgb(255, 255, 255);
    }
`;
export const Showbutton=styled.div`
color: rgb(141, 198, 63);
position: absolute;
right: 0px;
top: 50px;
cursor: pointer;
`;
