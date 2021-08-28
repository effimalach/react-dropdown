import { Field,ErrorMessage } from 'formik';
import React from 'react';
import './Dropdown.scss';



function Dropdown(props) {

    return (

        <div className="Dropdown" >
              {props.children}
        </div>

    )
}

export default Dropdown
