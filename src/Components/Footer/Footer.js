import React, { Component } from 'react';
import {MainFooter,
        Footercontainer,
        FIrstcolumn,Headertag,
        Fline,
        Fpara,
        Headerholder,
        Secondcolumn,
        UnorderListArchive,
        ListInside,
        InputElement,
        ButtonElement
    } from './style'
import {UserConsumer} from '../../Context/context'

class Footer extends Component {
    
    
    render() {
        return (
            <div>
                <MainFooter>
                    <Footercontainer>
                        <FIrstcolumn>
                            <Headerholder>
                            <Headertag>About</Headertag>
                            <Fline></Fline>
                            </Headerholder>
                            <Fpara>
                                Cras at ultrices erat, sed vulputate eros. Nunc at augue gravida est fermentum vulputate. Pellentesque et ipsum in dui malesuada tempus.
                            </Fpara>
                        </FIrstcolumn>
                        <Secondcolumn>
                            <Headerholder>
                                <Headertag>Archives</Headertag>
                                <Fline></Fline>
                            </Headerholder>
                            <UnorderListArchive>
                                <ListInside>June 2014</ListInside>
                                <ListInside>July 2014</ListInside>
                                <ListInside>August 2014</ListInside>
                                <ListInside>September 2014</ListInside>
                                <ListInside>November 2014</ListInside>
                            </UnorderListArchive>
                        </Secondcolumn>
                        <Secondcolumn>
                            <Headerholder>
                                <Headertag>Recipes</Headertag>
                                <Fline></Fline>
                            </Headerholder>
                            <UnorderListArchive>
                                <ListInside>Browse Recipes</ListInside>
                                <ListInside>Recipes</ListInside>
                                <ListInside>Submit Recipe</ListInside>
                            </UnorderListArchive>
                        </Secondcolumn>
                        <FIrstcolumn>
                            <Headerholder>
                            <Headertag>Newsletter</Headertag>
                            <Fline></Fline>
                            </Headerholder>
                            <Fpara>
                                Sign up to receive email updates on new product announcements,gift ideas, sales and more.
                            </Fpara>
                            <form action='#'>
                                <InputElement type="text" placeholder="mail@example.com"></InputElement>
                                <UserConsumer>
                                    {
                                        (value)=>{
                                            return <ButtonElement type="button" value={value}>SUBSCRIBE</ButtonElement>
                                        }
                                    }
                                </UserConsumer>
                            </form>
                        </FIrstcolumn>
                    </Footercontainer>
                </MainFooter>
                
            </div>
        )
    }
}

export default Footer; 