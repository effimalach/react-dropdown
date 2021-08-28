import React, {useRef,useEffect,useContext} from "react";
import {UserContext} from "./user-context.js";

function OutsideClickHandler (props){
    const {show, setShow} = useContext(UserContext);
    const wrapperRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      }
  }, []);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {setShow(false);}
  };


    return <div ref={wrapperRef}>{props.children}</div>;

}

export default OutsideClickHandler;
