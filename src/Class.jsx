import React from "react";
import { useReducer } from "react";
import {info} from './utilis/mock';

export const Reducer=()=>{
const reducer=(state,action)=>{
    switch(action.type){
        //delete
        case 'delete': 
        let del=state.data.filter((value)=>value.id!==action.payload.userId)
        return{...state,data:del}

        //search
        case 'search':
            let res=info.filter((value)=>value[state.selected].toString().toLocaleLowerCase().includes(action.payload.valueEvent.toLocaleLowerCase()))
            return{...state,data:res}

        //select
        case 'select':
            return{...state,selected:action.payload.selectEvent}

            case 'edit':
                return{...state,id:action.payload.userId,name:action.payload.userName,status:action.payload.userStatus}


        //nameChange
        case 'name':
            return{...state,name:action.payload.nameEvent}


            case 'status':
                return{...state,status:action.payload.statusEvent}


            //save
            case 'save':
                let save=state.data.map((value)=>state.id===value.id?{...value,name:state.name,status:state.status}:value)
                return{data:save}
            //default
        default :return state;
    }                           
}
    const [state,dispatch]=useReducer(reducer
       
        ,{
        data:info,
        selected:'name',
        id:null,
        name:'',
        status:''
    })

    return(
        <div style={{flex:'1'}}>
            <input type='text' placeholder='Search...' onChange={(e)=>dispatch({type:'search',payload:{valueEvent:e.target.value}})}/>
            <select onChange={(e)=>dispatch({type:'select',payload:{selectEvent:e.target.value}})}>
                <option value='name' >Name</option>
                <option value='id' >Id</option>
                <option value='status' >Status</option>

            </select>
           <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Status</th>

                </tr>
            </thead>
            <tbody>
                {
                    state.data.map((value)=>{
                        return(
                            <tr key={value.id}>
                                <td>{value.id}</td>
                                <td>{
                                    state.id===value.id?
                                    <input type='text' value={state.name} onChange={(e)=>dispatch({type:'name',payload:{nameEvent:e.target.value}})}/>:
                                    value.name
                                    }</td>
                                <td>{
                                    state.id===value.id?
                                    <input  type='text' value={state.status} onChange={(e)=>dispatch({type:'status',payload:{statusEvent:e.target.value}})}/>:
                                    value.status 
                                    }</td>
                                <td>
                                    {
                                        state.id===value.id?
                                        <button onClick={()=>dispatch({type:'save'})}>save</button>:

                            <button onClick={(e)=>dispatch({type:'edit',payload:{userId:value.id,userName:value.name,userStatus:value.status}})}>edit</button>
                                    }
                                </td>

                            <button onClick={(e)=>dispatch({type:'delete',payload:{userId:value.id}})}>delete</button>
                            </tr>
                        )
                    })
                }
                </tbody>
           </table>
        </div>
    )


}

export default Reducer;