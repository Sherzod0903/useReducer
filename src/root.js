import React ,{useState,useMemo,useCallback}from "react";
import Body from "./body";


const Root=()=>{
const [counter,setCounter]=useState(0);
console.log('parent render');

const data=useMemo(()=>{
    return {title:'Today is good'}
})
const dataCall=useCallback((pro)=>{
    return {title:pro}
})

return(
    <div>

        <Body dataCall={dataCall} data={data} />
        <h3>Counter : {counter}</h3>
      <button onClick={()=>setCounter(counter+1)}>+</button>
      {/* <button onClick={()=>setCounter(counter-1)}>-</button> */}

        
</div>
)

}

export default Root;