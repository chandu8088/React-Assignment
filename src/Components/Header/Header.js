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
    BorderHome,
    BorderSubmit
} from'./styles'
class Header extends Component
{   state={showDemos:false,showRecipes:false,
    showPages:false,showShop:false,showSubmit:false
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
    render(){
        return(
            <div>
                
                <MainHeader>
                    <Container>
                        <Imagcontainer>
                            <Chow_image></Chow_image>
                        </Imagcontainer>
                        <Navtab>
                            <Navbar>
                            <Link to='/home' style={{ textDecoration: 'none',color:'black'}}><Home_container>Home</Home_container></Link>
                                <BorderHome></BorderHome>
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