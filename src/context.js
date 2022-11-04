import React ,{Component, createContext}from "react";
import Body from "./Hooks";

export  const StudentContext=createContext()

const StudentList=({children})=>{
return(
    <StudentContext.Provider value={'hey'}>
     {children}
    </StudentContext.Provider>
)

}

export default StudentList;

