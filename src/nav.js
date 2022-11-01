import React from "react";
import Navbar from "./Navbar/navbar";
import Search from "./search/search";

export default class Nav extends React.Component{
    render(){
        return (

        <div>
            <Navbar/>
            <Search/>
            </div>
        )
    }
}