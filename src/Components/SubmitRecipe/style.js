import styled from 'styled-components'
export const SubmitRecipeContainer=styled.div`
background-color: rgb(246, 246, 246);
    min-height: 88px;
    margin: 0px 0px 40px;

`;
export const SubmitInnerContainer=styled.div`
width: 960px;
    margin: 0px auto;
    padding: 0px;
    font-family: "Open Sans", sans-serif;
    display: flex;
    @media only screen and (max-width: 1389px) and (min-width: 960px)
{
    position: relative;
    width: 960px;
    margin: 0 auto;
    padding: 0;
}
@media only screen and (max-width: 990px) and (min-width: 768px)
 {
    width: 768px;
}
@media only screen and (max-width: 767px) and (min-width: 480px)
{
    width: 420px;
}
@media only screen and (max-width: 767px)
{
    width: 300px;
}
`;
export const InnerContainer=styled.div`
width: 100%;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    @media only screen and (max-width: 1389px) and (min-width: 960px)
    {
        width: 460px;
    }
    @media only screen and (max-width: 990px) and (min-width: 768px)
{
    width: 364px;
}
@media only screen and (max-width: 767px) and (min-width: 480px){
    width: 420px;
}
@media only screen and (max-width: 767px){
    width: 300px;
}
`;
export const RecipeHeader=styled.h2`
font-size: 24px;
    font-weight: 500;
    margin: 29px 0px 0px;
    color: rgb(96, 96, 96);
`;
export const SideText=styled.div`
color: rgb(144, 144, 144);
    margin-top: 35px;
    font-size: 15px;
    @media only screen and (max-width: 1389px) and (min-width: 960px)
{
    width: 460px;
}
@media only screen and (max-width: 990px) and (min-width: 768px)
 {
    width: 364px;
}
@media only screen and (max-width: 767px) and (min-width: 480px){
    width: 420px;
}
@media only screen and (max-width: 767px){
    width:300px;
}
`;
export const HomeText=styled.span`
font-weight: 600;
color: rgb(144, 144, 144);
    margin-top: 35px;
    font-size: 13px;
    margin-left:4px;
    &::after {
        content: '❯';
        font-size: 15px;
        position: relative;
        left: 0px;
        margin-left:4px;
        margin-right:4px;
    }
`;
export const FormWrapper=styled.div`
width: 960px;
    margin: 0px auto;
    padding: 0px;
    font-family: "Open Sans", sans-serif;
    display: flex;
    @media only screen and (max-width: 1389px) and (min-width: 960px)
    {
        position: relative;
        width: 960px;
        margin: 0 auto;
        padding: 0;
    }
    @media only screen and (max-width: 990px) and (min-width: 768px)
{
    width: 768px;
}
@media only screen and (max-width: 767px) and (min-width: 480px)
{
    width: 420px;
}
@media only screen and (max-width: 767px)
{
    width: 300px;
}
`;
export const FormElement=styled.form`
width: 100%;
display: block;
    margin-top: 0em;
    @media only screen and (max-width: 1389px) and (min-width: 960px)
 {
    width: 940px;
}
@media only screen and (max-width: 990px) and (min-width: 768px)
 {
    width: 748px;
}
@media only screen and (max-width: 767px) and (min-width: 480px){
    width: 420px;
    padding-right:10px;
}
@media only screen and (max-width: 767px){
    width:300px;
    padding-right:10px;
}
`;
export const TextWrapper=styled.div`
width: 100%;
`;
export const InputName=styled.h4`
margin-bottom: 10px;
    font-size: 18px;
    line-height: 30px;
    color: rgb(96, 96, 96);
    font-weight: 500;

`;
export const InputBox=styled.input`
font-weight: 600;
    width: 100%;
    border: 1px solid rgb(221, 221, 221);
    font-size: 14px;
    color: rgb(119, 119, 119);
    padding: 14px 15px 12px;
    line-height: 24px;
    outline: none;
    background-color: rgb(255, 255, 255);
`;
export const TextArea=styled.textarea.attrs({rows:5,cols:50})`
width: 100%;
    border: 1px solid rgb(221, 221, 221);
    font-size: 14px;
    padding: 15px;
    line-height: 24px;
    resize: none;
    outline: none;
    background-color: rgb(255, 255, 255);
    font-weight: 600;

`;
export const SubmitButton=styled.button.attrs({type:'submit'})`
    padding: 10px 18px;
    font-size: 14px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 700;
    outline: none;
    color: rgb(255, 255, 255);
    margin: 30px 0px;
    border: none;
    &:hover{
        background-color:#808080;
    }
`;