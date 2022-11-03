import React , {useState,useReducer} from "react";

 const Hooks=(props)=>{
    const [count,setCount]=useState(0);
    const [name,setName]=useState('sherzod');
const [option,setOption]=useState(1)
const [multy,setMulty]=useState(2);

    const reducer=(state,action)=>{
        switch(action.type){
            case 'plus':
                return state+1;
                case 'minus':
                    return state-1;
                    case 'multy':
                        return state*action.payload;
                    case 'byamount':
                        return state+action.payload;
                    default :
                    return state;
        }
    }

const [counter,dispatch]=useReducer(reducer,1)

    const [data,setData]=useState({
        count:1,
        name:'sherzod'
    })
    console.log(data);

    const onSelect =(e)=>{
           
            setOption(Number(e.target.value))
    }

    const onMulty=(e)=>{

        setMulty(Number(e.target.value))
    }
   
    return(
        <div style={{flex:1}}>
            <h1>Hooks Components</h1>
            <h1>Count : {data.count}</h1>
            <h1>Counter: {counter}</h1>
            <button onClick={()=>dispatch({type:'plus', })}>+ 1</button>
            <button onClick={()=>dispatch({type:'minus',})}>- 1</button>
            <button onClick={()=>dispatch({type:'multy',})}>*</button>

            <select defaultValue={1} onChange={onSelect}>
                <option value={1} >1</option>
                <option value={5} >5</option>
                <option value={10} >10</option>
                <option value={15} >15</option>

            </select>
            <button onClick={()=>dispatch({type:'byamount', payload:option})}>{option}</button>
           <select onChange={onMulty} defaultValue={2}>
            <option value={1} >1</option>
            <option value={2} >2</option>
            <option value={3} >3</option>
            <option value={4} >4</option>


           </select>

            <button onClick={()=>dispatch({type:'multy',payload:multy})}>{multy}</button>



            <input type="text" value={data.name} onChange={({target})=>setData({...data,name:target.value})}/>
            <button onClick={()=>setData({count:data.count+1})}>+</button>

        </div>
    )
}










//return va return Hook farqi
// rowdan keyingi qavsda
// funkisiyani yozish uchun this dan foydalanish kerak
export default Hooks;