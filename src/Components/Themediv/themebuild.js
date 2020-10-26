import React, { Component } from 'react';
import {ThemeContainer,
        ThemeHeader,
        ColorsContainer,
        ColorsHeader,
        ColorsBar,
        SingleColor,
        ColorReference
} from './style'
import theme from '../../theme'
class ThemeBuilder extends Component{
    render(){
        
        return(<>
        <ThemeContainer>
            <ThemeHeader>Style Switcher</ThemeHeader>
            <ColorsContainer>
            <ColorsHeader>Predefined Colors</ColorsHeader>
            <ColorsBar>{ theme.map((color,index)=>(

           
                <SingleColor color={color[index]}><ColorReference>
                </ColorReference></SingleColor>
            ))
            }
            
            </ColorsBar>
            </ColorsContainer>
        </ThemeContainer>
        </>)
    }
}
export default ThemeBuilder