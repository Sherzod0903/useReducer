import React,{Component} from "react";
import Class from './Class'
import Hooks from './Hooks'


export default class Root extends Component{
    constructor(props){
        super(props);
        this.state={
           students: [
            {id:1,name:'Eshmat',surname:'Eshmatov'},
            {id:2,name:'Teshmat',surname:'Eshmatov'},
            {id:3,name:'Beshmat',surname:'Eshmatov'},
            {id:4,name:'Feshmat',surname:'Eshmatov'},
            {id:5,name:'Reshmat',surname:'Eshmatov'},
            {id:6,name:'Boshmat',surname:'Eshmatov'},
    
        ],
    }
    }
    render()
    {
        const onDelete=(id)=>{
        let res = this.state.students.filter(students=> students.id !==id)
        this.setState({students:res})}


            return(
                <div>
                   <Class student={this.state.students}/> 
                   <Hooks students={this.state.students} onDelete={onDelete}/>
                </div>
            )
    }
    
    
}