import React,{Component} from "react";
import Class from './Class'
// import Hooks from './Hooks'


export default class Root extends Component{
    constructor(props){
        super(props);
        this.state={
            count:12,
        }
    }
render()
{
        return(
            <div style={{display:'flex'}}>
               <Class/>
            
            </div>
        )
}

}