import React, { Component } from 'react';
import {connect} from 'react-redux'
import {ic_brightness_7} from 'react-icons-kit/md/ic_brightness_7'
import { Icon } from 'react-icons-kit'

import {ThemeContainer,
        ThemeHeader,
        ColorsContainer,
        ColorsHeader,
        ColorsBar,
        SingleColor,
        ColorReference,
        ResetButton,
        ResetText,
        ThemeDragger
} from './style'
import theme from '../../theme'
class ThemeBuilder extends Component{
    state={activetheme:null,themeslide:false}
    resetColor=()=>{
        this.props.colorGreen()
    }
    colorClick=(index)=>{
        
        const activeIndex=index
        theme.map((color,index)=>{
            if(index==activeIndex){
                this.setState({activetheme:theme[index].color})
            }
        })
        if(this.state.activetheme==='Green'){
            this.props.colorGreen()
        }
        if(this.state.activetheme==='Blue'){
            this.props.colorBlue()
        }
        if(this.state.activetheme==='Orange'){
            this.props.colorOrange()
        }
        if(this.state.activetheme==='Navy'){
            this.props.colorNavy()
        }
        if(this.state.activetheme==='Yellow'){
            this.props.colorYellow()
        }
        if(this.state.activetheme==='Peach'){
            this.props.colorPeach()
        }
        if(this.state.activetheme==='Beige'){
            this.props.colorBeige()
        }
        if(this.state.activetheme==='Purple'){
            this.props.colorPurple()
        }
        if(this.state.activetheme==='Celadon'){
            this.props.colorCeladon()
        }
        if(this.state.activetheme==='Pink'){
            this.props.colorPink()
        }
        if(this.state.activetheme==='Red'){
            this.props.colorRed()
        }
        if(this.state.activetheme==='Brown'){
            this.props.colorBrown()
        }
        if(this.state.activetheme==='Cherry'){
            this.props.colorCherry()
        }
        if(this.state.activetheme==='Cyan'){
            this.props.colorCyan()
        }
        if(this.state.activetheme==='Grey'){
            this.props.colorGrey()
        }
        if(this.state.activetheme==='Dark'){
            this.props.colorDark()
        }
    }
    themeSlider=()=>{
        const themeslide=this.state.themeslide
        this.setState({themeslide:!themeslide})
    }
    
    render(){
        
            
            
        
        
        return(<>
        <ThemeContainer value={this.state.themeslide}>
            <ThemeHeader>Style Switcher</ThemeHeader>
            <ColorsContainer>
            <ColorsHeader>Predefined Colors</ColorsHeader>
            <ColorsBar>{ theme.map((color,index)=>(
                    
           
                <SingleColor ><ColorReference onClick={()=>this.colorClick(index)} value={color.value}>
                </ColorReference></SingleColor>
            ))
            }
            
            </ColorsBar>
            </ColorsContainer>
            <ResetButton>
                <ResetText onClick={this.resetColor}>Reset</ResetText>
            </ResetButton>
        </ThemeContainer>
        <ThemeDragger value={this.state.themeslide} onClick={this.themeSlider}><Icon size={40} icon={ic_brightness_7}></Icon></ThemeDragger>
        </>)
    }
}
const mapStateToProps=state=>{
    return{
        tm:state.theme
    };
    };
const mapDispatchToProps=dispatch=>{
    return{
        colorGreen:()=>dispatch({type:'GREEN'}),
        colorBlue:()=>dispatch({type:'BLUE'}),
        colorOrange:()=>dispatch({type:'ORANGE'}),
        colorNavy:()=>dispatch({type:'NAVY'}),
        colorYellow:()=>dispatch({type:'YELLOW'}),
        colorPeach:()=>dispatch({type:'PEACH'}),
        colorBeige:()=>dispatch({type:'BEIGE'}),
        colorPurple:()=>dispatch({type:'PURPLE'}),
        colorCeladon:()=>dispatch({type:'CELADON'}),
        colorPink:()=>dispatch({type:'PINK'}),
        colorRed:()=>dispatch({type:'RED'}),
        colorBrown:()=>dispatch({type:'BROWN'}),
        colorCherry:()=>dispatch({type:'CHERRY'}),
        colorCyan:()=>dispatch({type:'CYAN'}),
        colorGrey:()=>dispatch({type:'GREY'}),
        colorDark:()=>dispatch({type:'DARK'})
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(ThemeBuilder);
