import React,{useRef}from "react";




const UnControlled=()=>{
    const title=useRef('');

return(

    <div>
       <h1>Name: </h1> 
       <input ref={title} type='text'/><button onClick={()=>{alert(title.current.value)}}>click</button>
    </div>
)


}

export default UnControlled;