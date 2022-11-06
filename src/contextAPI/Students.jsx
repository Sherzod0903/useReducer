import { useContext } from "react";
import { createContext,useState} from "react";
// import Students from '../students'

export const StudentContext=createContext();
export const Stu =()=> useContext(StudentContext)
const Context=({children})=>{
const [state, setState]=useState([
]);
return(

<StudentContext.Provider value={[state, setState]}>
    {children}
  

    </StudentContext.Provider>
)
}

export default Context;