import React,{useState,useEffect} from 'react';

import {UserContext} from "./user-context.js";

import './App.scss';
import Dropdown from './Dropdown';
import DropdownButton from './DropdownButton.js';
import DropdownMenu from './DropdownMenu.js';
import DropdownItem from './DropdownItem.js';
import OutsideClickHandler from './OutsideClickHandler'


function App() {
const [show, setShow] = useState(false);

  return (
    <div className="App">    
     <UserContext.Provider value={{show, setShow}}>

      <Dropdown>
     <OutsideClickHandler>
  <DropdownButton>Dropdown button</DropdownButton>
    <DropdownMenu>
      <DropdownItem title="Action"></DropdownItem>
      <DropdownItem title="Another action"></DropdownItem>
      <DropdownItem title="Something else"></DropdownItem>
   </DropdownMenu>
      </OutsideClickHandler>
        </Dropdown>
       



     </UserContext.Provider>
    </div>
  );
}

export default App;



