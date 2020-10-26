import React, { Component } from 'react';
import {SideImagecontainer,MainHeader,
    HeaderContainer,
    HeaderText,
    Rating,
    Designbox,
    ImageBox,
    ImageDetails,
    ImageText,
    Border,
    Paragraph,
    Ingrediants,
    List,
    Listitems,
    Checkbox,
    Direction,
    NumberValue,
    DirectionText
} from './style'
class ViewRecipe extends Component{
    render(){
        const values=[{name:'2 Pounds Cubeb beef stew meat'},{name:'4 cubes beef bouillon, crumbled'},{name:'1 large onion, chopped'},{name:'2 teaspoon dried rosemary'},
        {name:'2 teaspoon ground black pepper'},{name:'1 large potatoes, peeled and cubed'},{name:'2 carrots, cut into 1 inch pieces'},{name:'2 pounds cubed beef stew meat'},
        {name:'2 stalks celery, cut into 1 inch pieces'}];
        const DirectionValues=[{value:1,text:'In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.'},
        {value:2,text:'In the fat remaining in the pot, cook the onions until softened, about 5 minutes.'},
        {value:3,text:'Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.'},
        {value:4,text:'Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.'}]
        return(
        <div>
            <SideImagecontainer>
            <MainHeader>
                <HeaderContainer>
                    <HeaderText>Chunky Beef Stew</HeaderText>
                    <Rating>(5 Reviews)</Rating>
                    <Designbox></Designbox>
                </HeaderContainer>
                <div>
                    <ImageBox></ImageBox>
                </div>
                <ImageDetails>
                    <Border>
                    <ImageText>Service:<br/>4</ImageText>
                    </Border>
                
                    <Border>
                    <ImageText>Prep Time:<br/>2 hr 30 min  </ImageText>
                    </Border>
                
                    <Border>
                    <ImageText>Cooking:<br/>2 hours</ImageText>
                    </Border>
                    <Border>
                    <ImageText>Calories:<br/>632 kcal</ImageText>
                    </Border>
                </ImageDetails>
                </MainHeader>
                <Paragraph>
                        Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.
                </Paragraph>
                <Ingrediants>Ingrediants</Ingrediants>
                <List>
                    { values.map(value=>(
                        <Listitems>
                        <Checkbox></Checkbox>
                        <span>{value.name}</span>
                        </Listitems>))
                    }
                </List>
                <Ingrediants>Directions</Ingrediants>
                { DirectionValues.map(direction=>(
                <Direction>
                    <NumberValue>{direction.value}</NumberValue>
                    <DirectionText>{direction.text}</DirectionText>
                </Direction>))
                }
            
            </SideImagecontainer>
            
        </div>)
    }
}
export default ViewRecipe