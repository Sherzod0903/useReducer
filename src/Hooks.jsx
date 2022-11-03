import React , {useState,useReducer} from "react";

 const Body=({students,onDelete=Function.prototype})=>{
    
        
   

   
    return(
        <div style={{flex:1}}>
            <h1>Student List</h1>
            {
                students.map(student=>
                    {
                        return < >
                         <h1 key={student.id}>Name :{student.name}  <button onClick={()=>onDelete(student.id)} >delete</button></h1>
                            
                               </>
                    })
            }
          

          
        </div>
    )
}










//return va return Hook farqi
// rowdan keyingi qavsda
// funkisiyani yozish uchun this dan foydalanish kerak
export default Body;