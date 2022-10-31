import React from "react";
import {Container,Icon,Option,Login} from './style'



export default class Navbar extends React.Component{




render(){
    return(
        <Container>
           
            <Icon.Logo/>
  <Option>
    <p>Home</p>
    <p>Properties</p>
    <p>Contacts</p>

  </Option>
<Login>
    <Login.P>Login</Login.P>
</Login>

           
                   </Container>
                   
    )
    
}


}