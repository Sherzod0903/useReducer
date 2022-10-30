import React , {useState ,useEffect} from "react";

 const Hooks=(props)=>{
    const [count,setCount]=useState(props.count);
    const [name,setName]=useState('sherzod');

useEffect(()=>{
    console.log('case 1');
},[])

useEffect(()=>{
    console.log('case 2');
})

useEffect(()=>{
    console.log('case 3');
    setCount(props.count)
},[props.count])




useEffect(()=>{
    console.log('case 4');
},[name,count])
   
    return(
        <div style={{flex:1}}>
            <h1>Hooks Components</h1>
            <h1>Count : {count}</h1>
            <h1>Name : {name}</h1>

            <input type="text" value={name} onChange={({target})=>setName(target.value)}/>
            <button onClick={()=>setCount(count+1)}>+</button>

        </div>
    )
}










//return va return Hook farqi
// rowdan keyingi qavsda
// funkisiyani yozish uchun this dan foydalanish kerak
export default Hooks;