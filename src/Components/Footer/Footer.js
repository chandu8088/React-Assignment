import React, { Component } from 'react';
import {Main_Footer,
        Footer_container,
        FIrst_column,Headertag,
        F_line,
        F_para,
        Header_holder,
        Second_column,
        UnorderList_Archive,
        ListInside,
        InputElement,
        ButtonElement
    } from './style'
class Footer extends Component {
    
    
    render() {
        return (
            <div>
                <Main_Footer>
                    <Footer_container>
                        <FIrst_column>
                            <Header_holder>
                            <Headertag>About</Headertag>
                            <F_line></F_line>
                            </Header_holder>
                            <F_para>
                                Cras at ultrices erat, sed vulputate eros. Nunc at augue gravida est fermentum vulputate. Pellentesque et ipsum in dui malesuada tempus.
                            </F_para>
                        </FIrst_column>
                        <Second_column>
                            <Header_holder>
                                <Headertag>Archives</Headertag>
                                <F_line></F_line>
                            </Header_holder>
                            <UnorderList_Archive>
                                <ListInside>June 2014</ListInside>
                                <ListInside>July 2014</ListInside>
                                <ListInside>August 2014</ListInside>
                                <ListInside>September 2014</ListInside>
                                <ListInside>November 2014</ListInside>
                            </UnorderList_Archive>
                        </Second_column>
                        <Second_column>
                            <Header_holder>
                                <Headertag>Recipes</Headertag>
                                <F_line></F_line>
                            </Header_holder>
                            <UnorderList_Archive>
                                <ListInside>Browse Recipes</ListInside>
                                <ListInside>Recipes</ListInside>
                                <ListInside>Submit Recipe</ListInside>
                            </UnorderList_Archive>
                        </Second_column>
                        <FIrst_column>
                            <Header_holder>
                            <Headertag>Newsletter</Headertag>
                            <F_line></F_line>
                            </Header_holder>
                            <F_para>
                                Sign up to receive email updates on new product announcements,gift ideas, sales and more.
                            </F_para>
                            <form action='#'>
                                <InputElement type="text" placeholder="mail@example.com"></InputElement>
                                <ButtonElement type="submit">SUBSCRIBE</ButtonElement>
                            </form>
                        </FIrst_column>
                    </Footer_container>
                </Main_Footer>
                
            </div>
        )
    }
}
export default Footer