import React, { Component } from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {PageWrapper,FromElement,Pageheader,
    SideImage,
    NameContainer,
    NameLabel,
    EmailInput,
    PasswordInput,
    SignUpButton,
    SignInButton,
    Showbutton,
    NameInput,
    UsernameInput,
    RepeatPasswordInput
} from './style'
class Signin extends Component{
    
state={
    Signinemail:null,
    pass:null,
    errormessage:'',
    ShowPass:false,
    name:null,
        email:null,
        username:null,
        password:null,
        repPassword:null,
        showPassSignup:false,
        showrepPass:false,
        isclicked:false,
        signInsignUp:false,
        emailerror:'',
        passerror:'',
        fielderror:'',
        lengtherror:'',
        valid:false
}

onChangeEmailSignin=(e)=>{
    this.setState({
        signinemail:e.target.value
    })
};
onChangePassSignin=(e)=>{
    this.setState({
        pass:e.target.value
    })
};
onChangeName=(e)=>{
    this.setState({
        name:e.target.value
    })
};
onChangeEmail=(e)=>{
    this.setState({
        email:e.target.value
    })
};
onChangeUsername=(e)=>{
    this.setState({
        username:e.target.value
    })
};
onChangePassword=(e)=>{
    this.setState({
        password:e.target.value
    })
};
onChangeRepeatPassword=(e)=>{
    this.setState({
        repPassword:e.target.value
    })
};
passwordShowSignup=()=>{
    const {showPassSignup}=this.state
    this.setState({showPassSignup:!showPassSignup})
    
}
passwordShow1=()=>{
    const {showrepPass}=this.state
    this.setState({showrepPass:!showrepPass})
    
}
validate=()=>{
    let emailError=''
    let passError=''
    let fieldError=''
    let lengthError=''
    if(!this.state.name||!this.state.username||!this.state.email||!this.state.password||!this.state.repPassword){
        fieldError='All fields must be filled'
    }
    if(fieldError){
        this.setState({fielderror:fieldError})
        return false
    }
    if(!this.state.email.includes('@')&&!this.state.email.includes('.')){
        emailError='Invalid Email'
    }
    if(emailError){
        this.setState({emailerror:emailError})
        return false;
    }
    if(this.state.password.length<=6){
        lengthError='Password length must be atleast 6'
    }
    if(lengthError){
        this.setState({lengtherror:lengthError})
        return false;
    }
    if(this.state.password!==this.state.repPassword){
        passError='Password Doesnt match'
    }
    if(passError){
        this.setState({passerror:passError})
        return false
    }
    
    return true

}
submit=()=>{
    const valid=this.validate()
    
    if(valid){
        const signUpData={name:this.state.name,email:this.state.email,username:this.state.username,password:this.state.password,repeatpassword:this.state.repPassword,returnSecureToken:true}
    axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBBTcBYXnaAmM1YEg6QLpggdBscZJXVJfk',signUpData)
    .then(response=>{
        const status=response.status;
        
        if(status===200){

            this.setState({signInsignUp:true})
         
        } 
        
  });
    }
    
}
equalCheck=()=>{
    this.setState({isMatch:true})
const url='https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBBTcBYXnaAmM1YEg6QLpggdBscZJXVJfk'
const postData={email:this.state.signinemail,password:this.state.pass,returnSecureToken:true};
this.props.loginChecker(postData,url);
}
passwordShowSignin=()=>{
    const {showPass}=this.state
    this.setState({showPass:!showPass})
    
}
shiftToSignin=()=>{
    this.setState({signInsignUp:true})
}
shiftToSignup=()=>{
    this.setState({signInsignUp:false})
}
    render(){
       
        let errormessageSignin;
        
        if(this.state.valid && this.state.isMatch)
        {
            errormessageSignin=<p style={{color:'red'}}>Username or Password wrong</p>
        }
        
        return(
            <div>
                
            <PageWrapper>
                <SideImage></SideImage>
                {
                    this.state.signInsignUp ? <><FromElement>
                    <Pageheader>Signin</Pageheader>
                    <div>
                        {errormessageSignin}
                        <NameContainer>
                            <NameLabel>Email</NameLabel>
                            <EmailInput onChange={(event)=>{this.onChangeEmailSignin(event)}}></EmailInput>
                        </NameContainer>
                        <NameContainer>
                            <NameLabel>Password </NameLabel>
                            <PasswordInput onChange={(event)=>{this.onChangePassSignin(event)}} type={(this.state.showPass)?'text':'password'}></PasswordInput>
                            <Showbutton onClick={this.passwordShowSignin}>{(this.state.showPass)?'hide':'show'}</Showbutton>
                        </NameContainer>
                    </div>
                    
                    <Link to='/home'><SignUpButton value={this.props.tm} onClick={this.equalCheck}>Sign In</SignUpButton></Link>
                    <SignInButton value={this.props.tm} onClick={this.shiftToSignup}>Sign Up</SignInButton>

                </FromElement></>:<><FromElement>
                    <Pageheader>Signup</Pageheader>
                    <p style={{color:'red'}}>{this.state.fielderror}
                    {this.state.emailerror}
                {this.state.passerror}{this.state.lengtherror}{this.state.errormessage}</p>
                    <div>
                        <NameContainer>
                            <NameLabel>Name</NameLabel>
                            <NameInput onChange={(event)=>{this.onChangeName(event)}}></NameInput>
                        </NameContainer>
                        <NameContainer>
                            <NameLabel>Email</NameLabel>
                            <EmailInput onChange={(event)=>{this.onChangeEmail(event)}}></EmailInput>
                        </NameContainer>
                        <NameContainer>
                            <NameLabel>Username</NameLabel>
                            <UsernameInput onChange={(event)=>{this.onChangeUsername(event)}}></UsernameInput>
                        </NameContainer>
                        <NameContainer>
                            <NameLabel>Password</NameLabel>
                            <PasswordInput onChange={(event)=>{this.onChangePassword(event)}} type={(this.state.showPassSignup)?'text':'password'}></PasswordInput>
                            <Showbutton onClick={this.passwordShowSignup}>{(this.state.showPassSignup)?'hide':'show'}</Showbutton>
                        </NameContainer>
                        <NameContainer>
                            <NameLabel>Repeat Password</NameLabel>
                            <RepeatPasswordInput onChange={(event)=>{this.onChangeRepeatPassword(event)}} type={(this.state.showrepPass)?'text':'password'}></RepeatPasswordInput>
                            <Showbutton onClick={this.passwordShow1}>{(this.state.showrepPass)?'hide':'show'}</Showbutton>
                        </NameContainer>
                    </div>
                    <SignUpButton onClick={this.submit}>Sign Up</SignUpButton>
                    <SignInButton onClick={this.shiftToSignin}>Sign In</SignInButton>
                </FromElement> </>
                }
                
            </PageWrapper>
            </div>
        );
    }
}
const mapStateToProps=state=>{
return{
    Lgn:state.isLogin
};
};
const mapDispatchToProps=dispatch=>{
    return{
        loginChecker:(postData,url)=>dispatch({type:'LOGIN',payload:postData,url:url})

    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Signin);

            
