//import { Button } from 'bootstrap';
import React from 'react';
import Child from "./Child";
function Parent(props){
    const activate = ()=>{
      alert(`The user name ${props.name}` )
    }
    return(
        <div>
        <h1>your name is {props.name}</h1>
        <h1>your age is  {props.age}</h1>
        <Child hobby={'IT'}/>
        <button onClick={activate}> Activate</button>
        {/* <Button variant="primary"> primary</Button> */}
        
        
    </div>
    )
}
export default Parent; 