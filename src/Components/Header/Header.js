import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'

import {MainHeader, 
    Container,
    Imagcontainer,
    Navtab,
    Navbar,
    Chow_image,
    Home_container,
    Arrow,
    UnorderList,
    UnorderSublist,
    UnorderListRecipe,
    UnorderListShop,
    UnorderListPage,
    BorderSubmit,MenuSpan,
    Button,
    MobileDiv,
    StyledLogout,
    Heading,
    SubHeading,
    SelectedMobileDiv,
    DropDownContainer,
    MobileHeader
} from'./styles'
import logo from '../../Assets/Images/logo.png'

class Header extends Component
{   state={showDemos:false,showRecipes:false,
    showPages:false,showShop:false,showSubmit:false,dropdown:false
    }
    OnDemosHandler=()=>{
        this.setState({showDemos:true});
    }
    OverDemoshandler=()=>{
        this.setState({showDemos:false});
    }
    OnRecipesHandler=()=>{
        this.setState({showRecipes:true});
    }
    OverRecipeshandler=()=>{
        this.setState({showRecipes:false});
    }
    OnPageHandler=()=>{
        this.setState({showPages:true});
    }
    OverPagehandler=()=>{
        this.setState({showPages:false});
    }
    OnShopHandler=()=>{
        this.setState({showShop:true});
    }
    OverShophandler=()=>{
        this.setState({showShop:false});
    }
    OnSubmitHandler=()=>{
        this.setState({showSubmit:true});
    }
    OverSubmithandler=()=>{
        this.setState({showSubmit:false});
    }
    logout=()=>{
        this.props.logoutChecker()
    }
    dropDownStateTrue=()=>{
        this.setState({dropdown:false})
    }
    dropDownStateFalse=()=>{
        this.setState({dropdown:true})
    }
    render(){
        let dropDown;
        let mobileDiv;
        if (this.state.dropdown === true){
            mobileDiv =
                <>
                    <SelectedMobileDiv>
                        <MenuSpan style={{ color: "white" }}>MENU</MenuSpan>
                        <Button onClick={this.dropDownStateTrue}><MenuSpan  style={{ backgroundColor: "#8DC63F" }}><i class="fa fa-times" aria-hidden="true" style={{ backgroundColor: "#8DC63F", color: "white", fontSize: "200%" }}></i></MenuSpan></Button>
                    </SelectedMobileDiv>
                </>;
                dropDown =
                <>
                    <DropDownContainer>
                        <Heading to="/home">Home</Heading>
                        <Heading >Demos</Heading>
                        <SubHeading>Grid Homepage</SubHeading>
                        <SubHeading>List Homepage</SubHeading>
                        <SubHeading>Boxed Version</SubHeading>
                        <Heading >Recipes</Heading>
                        <SubHeading>Browse Recipes</SubHeading>
                        <SubHeading>Recipe Page #1</SubHeading>
                        <SubHeading>Recipe Page #2</SubHeading>
                        <Heading >Pages</Heading>
                        <SubHeading>Shortcodes</SubHeading>
                        <SubHeading>Typography</SubHeading>
                        <Heading to="/submitrecipe" >Submit Recipe</Heading>
                        <StyledLogout onClick={this.logout}>Logout</StyledLogout>
    
                    </DropDownContainer>
                </>;
        }
        else
           {mobileDiv =
                <>
                    <MobileDiv>
                        <MenuSpan>MENU</MenuSpan>
                        <Button onClick={this.dropDownStateFalse}><MenuSpan><i class="fa fa-bars" aria-hidden="true" style={{ fontSize: "200%" }}></i></MenuSpan></Button>
                    </MobileDiv>
                </>}
        return(
            <div>
                <MobileHeader>
                    <div><img src={logo} height="" alt="logo" /></div>
                    {mobileDiv}
                    {dropDown}
                </MobileHeader>
                <MainHeader>
                    <Container>
                        <Imagcontainer>
                            <Chow_image></Chow_image>
                        </Imagcontainer>
                        <Navtab>
                            <Navbar>
                            <Link to='/home' style={{ textDecoration: 'none',color:'black'}}><Home_container>Home</Home_container></Link>
                                
                                <Home_container onMouseOver={this.OnDemosHandler} onMouseOut={this.OverDemoshandler}>Demos</Home_container>
                                {this.state.showDemos === true ?
                                    <div>
                                        <UnorderList>
                                            <UnorderSublist>Grid Homepage</UnorderSublist>
                                            <UnorderSublist>List Homepage</UnorderSublist>
                                            <UnorderSublist>Boxed Version</UnorderSublist>
                                        </UnorderList>
                                    </div>:null
                                }
                                <Link to='/viewrecipe' style={{ textDecoration: 'none',color:'black'}}><Home_container onMouseOver={this.OnRecipesHandler} onMouseOut={this.OverRecipeshandler}>Recipes</Home_container></Link>
                                {this.state.showRecipes === true ?
                                    <div>
                                        <UnorderListRecipe>
                                            <UnorderSublist>Browse Recipes</UnorderSublist>
                                            <UnorderSublist>Recipe page #1</UnorderSublist>
                                            <UnorderSublist>Recipe page #2</UnorderSublist>
                                        </UnorderListRecipe>
                                    </div>:null
                                }
                                <Home_container onMouseOver={this.OnPageHandler} onMouseOut={this.OverPagehandler}>Pages</Home_container>
                                {this.state.showPages === true ?
                                    <div>
                                        <UnorderListPage>
                                            <UnorderSublist>Shortcodes</UnorderSublist>
                                            <UnorderSublist>Typography</UnorderSublist>
                                            <UnorderSublist>Contact</UnorderSublist>
                                        </UnorderListPage>
                                    </div>:null
                                }
                                <Home_container onMouseOver={this.OnShopHandler} onMouseOut={this.OverShophandler}>Shop</Home_container>
                                {this.state.showShop === true ?
                                    <div>
                                        <UnorderListShop>
                                            <UnorderSublist>Shop</UnorderSublist>
                                            <UnorderSublist>Product Page</UnorderSublist>
                                        </UnorderListShop>
                                    </div>:null
                                }
                                <Arrow></Arrow>
                                <Link to='/submitrecipe' style={{ textDecoration: 'none',color:'black'}}><Home_container onMouseOver={this.OnSubmitHandler} onMouseOut={this.OverSubmithandler}>SubmitRecipe</Home_container></Link>
                                {this.state.showSubmit===true ?
                                    <BorderSubmit></BorderSubmit>:null
                                }
                                <Home_container onClick={this.logout}>LogOut</Home_container>
                            </Navbar>
                        </Navtab>
                    </Container>
                </MainHeader>
               
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        Lgn:state.isLogin
    };
    };
    const mapDispatchToProps=dispatch=>{
        return{
            logoutChecker:()=>dispatch({type:'LOGOUT'})
    
        };
    };
export default connect(mapStateToProps,mapDispatchToProps)(Header)