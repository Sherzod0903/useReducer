import React,{Component} from "react";

import {info} from './utilis/mock';

export class Reducer extends Component{
constructor(props){
    super(props);
    this.state={
        data:info,
        count:1,
        search:'id',
        name:'',
        status:''
    }
}
render(){
const plus=()=>{
    if(this.state.count<10){

        console.log(this.state.count);
    this.setState({count:this.state.count+1})
    }

}

const minus=()=>{
        if(this.state.count>1){

            console.log(this.state.count);
        this.setState({count:this.state.count-1})
        }


}


const onDelete=(id)=>{
    console.log(id);
let res=this.state.data.filter(value=> value.id!==id)
this.setState({data:res,})

}

const onSearch=(e)=>{
console.log(e.target.value);
const {value}=e.target;
let sea=info.filter((item)=>item.name.toLowerCase().includes(value.toLowerCase()))
this.setState({data:sea})
}
const onSear=()=>{
    
}

const onChange=(e)=>{
this.setState({[e.target.name]:e.target.value})
}

const onAdd=()=>{
  
    let newUser={
        id:Date.now(),
        name:this.state.name,
        status:this.state.status
    };
   
    this.setState({
        data:[...this.state.data,newUser],
        name:'',
        status:''
    })
}
    
    return(

        <div>
            <p>Count:{this.state.count} </p>
            <p>Count:{this.state.status} </p>
            <p>Count:{this.state.name} </p>


            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
<hr/>
<input onChange={onSearch} type='text' placeholder="search..."/>
<button onClick={onSear}>search</button>
<br/>
<hr/>

<input value={this.state.name} type='text' name='name' onChange={onChange}  placeholder="name" />
<input value={this.state.status} type='text' name='status'  onChange={onChange} placeholder="status" />
<button onClick={onAdd}>add</button>

            <table>
                    <tbody>

                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Status</th>

                        </tr>
               
                        {
                            this.state.data.map((value)=>{
                                return(
                               <tr key={value.id} >
                                        <td>{value.id}</td>
                                        <td>{value.name}</td>
                                        <td>{value.status}</td>
<td><button  >edit</button></td>
<td><button  onClick={()=>onDelete(value.id)}>delete</button></td>

                                    </tr>
                            
)
})
}
                   
</tbody>



            </table>
        </div>

        ) 
        
}


}
  


export default Reducer;