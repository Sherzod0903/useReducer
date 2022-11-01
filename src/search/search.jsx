import React,{Component} from "react";
import { Container,Input,Icon,Advanced,Searc} from "./style";

export default class Search extends Component{
    render(){
        return(
            <Container>
                   <Icon.Home/>
                <Input type='text'  placeholder="Enter an address, neighborhood, city, or ZIP code"/>
                <Advanced>
                <Icon.Group/>
                    <p>Advanced</p>
                </Advanced>
                <Searc>
                <Icon.Search/>
                    <p>Search</p>
                </Searc>
            
            </Container>
        )
    }
}