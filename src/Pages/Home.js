import React, { Component } from 'react';
import Middle from '../Components/MiddleSection/Middle'
import Container from '../Components/ImagesContainer/Container'
class Home extends Component{
    render(){
        return(<div>
            <Middle></Middle>
            <Container/>
        </div>);
    }
}
export default Home;