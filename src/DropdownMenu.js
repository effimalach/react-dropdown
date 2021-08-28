import React,{useContext}  from 'react';
import './DropdownMenu';

import {UserContext} from "./user-context.js";

function DropdownMenu(props) {
    const {show, setShow} = useContext(UserContext);
    return (
        <div className="DropdownMenu">
           {show && <div>{props.children}</div>}
        </div>
    )
}

export default DropdownMenu
