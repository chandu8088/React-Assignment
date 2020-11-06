import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ic_brightness_7 } from 'react-icons-kit/md/ic_brightness_7'
import { Icon } from 'react-icons-kit'

import {
    ThemeContainer,
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
class ThemeBuilder extends Component {
    state = {themeslide: false }
    resetColor = () => {
        const colorval = '#8dc63f'
        this.props.colorChange(colorval)
    }
    colorClick = (index) => {

        const activeIndex = index
        theme.map((color, key) => {
            if (key === activeIndex) {
                const colorval = theme[key].value
                this.props.colorChange(colorval)
            }
        })

    }
    themeSlider = () => {
        const themeslide = this.state.themeslide
        this.setState({ themeslide: !themeslide })
    }

    render() {





        return (
            <>
                <ThemeContainer value={this.state.themeslide}>
                    <ThemeHeader>Style Switcher</ThemeHeader>
                    <ColorsContainer>
                        <ColorsHeader>Predefined Colors</ColorsHeader>
                        <ColorsBar>{theme.map((color, index) => (


                            <SingleColor key={index} ><ColorReference onClick={() => this.colorClick(index)} value={color.value}>
                            </ColorReference></SingleColor>
                        ))
                        }

                        </ColorsBar>
                    </ColorsContainer>
                    <ResetButton>
                        <ResetText onClick={this.resetColor}>Reset</ResetText>
                    </ResetButton>
                </ThemeContainer>
                <ThemeDragger value={this.state.themeslide} onClick={this.themeSlider}><Icon size={32} icon={ic_brightness_7}></Icon></ThemeDragger>
            </>)
    }
}
const mapStateToProps = state => {
    return {
        tm: state.theme
    };
};
const mapDispatchToProps = dispatch => {
    return {
        colorChange: (colorval) => dispatch({ type: 'CHANGE', value: colorval }),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ThemeBuilder);
