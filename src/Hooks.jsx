import React , {useContext} from "react";
import { StudentContext } from "./context";
 const Body=({students,onDelete=Function.prototype})=>{
    
    const data=useContext(StudentContext);
    console.log(data);
        
   

   
    return(
        <div style={{flex:1}}>
            <h1>Student List  {students.length}</h1>
            {
                students.map(student=>
                    {
                        return <div key={student.id}>
                         <h1 >Name :{student.name}  <button onClick={()=>onDelete(student.id)} >delete</button></h1>
                            
                               </div>
                    })
            }
          

          
        </div>
    )
}










//return va return Hook farqi
// rowdan keyingi qavsda
// funkisiyani yozish uchun this dan foydalanish kerak
export default Body;