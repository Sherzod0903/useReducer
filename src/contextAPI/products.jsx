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
            <div style={{flex:1}}>
                <h1>Class Components</h1>
                <button onClick={()=> this.setState({count:this.state.count+1})}>Count : {this.state.count}</button>
            </div>
        )
}

}