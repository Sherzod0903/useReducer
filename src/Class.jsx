import React,{Component} from "react";

export default class Class extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }
render()
{
        return(
            <div style={{
                display:'flex',
                background:'blue',
                color:'white',
                height:'80px',
                justifyContent:'space-around'
                }}>
             <h1>Home</h1>
             <h1>About</h1>
             <h1>Classes</h1>
             <h1>Contact</h1>
            </div>
        )
}

}