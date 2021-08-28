import React,{useContext} from 'react';


import {UserContext} from "./user-context.js";

function DropdownButton() {
    const {show, setShow} = useContext(UserContext);
    return (
        <div className="DropdownButton">
             <button onClick={()=>{setShow(!show)}}> DropdownButton</button>
        </div>
    )
}

export default DropdownButton
