import React from "react";
import { Stu } from '../contextAPI/Students';

 export const Body=()=>{
    const [state,setState]=Stu();
   
    const deleted=(id)=>{
        let res =state.filter(value=>value.id !==id)
        setState(res);
    }

        return(
            <div>
                <h1>hi</h1>
                {
                    state.map(value=>(
                        <div key={value.id}>
                            <p>{value.name}  <button onClick={()=>deleted(value.id)}>delele</button></p>

                            </div>
                    ))
                }
            </div>
        )
    
}





//return va return Hook farqi
// rowdan keyingi qavsda
// funkisiyani yozish uchun this dan foydalanish kerak
export default Body;