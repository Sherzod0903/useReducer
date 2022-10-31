import React , {useState,useReducer} from "react";

 const Hooks=(props)=>{
    const [count,setCount]=useState(0);
    const [name,setName]=useState('sherzod');


const [counter,dispatch]=useReducer((state,action)=>{
return 10;

},0)

    const [data,setData]=useState({
        count:1,
        name:'sherzod'
    })
    console.log(data);


   
    return(
        <div style={{flex:1}}>
            <h1>Hooks Components</h1>
            <h1>Count : {data.count}</h1>
            <h1>Counter: {counter}</h1>
            <button onClick={()=>dispatch()}>+</button>
            <input type="text" value={data.name} onChange={({target})=>setData({...data,name:target.value})}/>
            <button onClick={()=>setData({count:data.count+1})}>+</button>

        </div>
    )
}










//return va return Hook farqi
// rowdan keyingi qavsda
// funkisiyani yozish uchun this dan foydalanish kerak
export default Hooks;