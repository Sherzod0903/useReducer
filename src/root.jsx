import React,{Component} from "react";
import  { Reducer } from './Class'
// import Hooks from './Hooks'


export default class Root extends Component{
render()
{
        return(
            <div style={{display:'flex'}}>
               {/* <Hooks /> */}
              <Reducer style={{flex:'1'}} />
            </div>
        )
}

}