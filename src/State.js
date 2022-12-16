import React, {useState} from "react";
const AddDeleteFunc = ()=>{
    const[button , setState] = useState("");
    const addFunc= ()=>{
        setState("add")
        
    };
    const deleteFunc=()=>{
        setState("delete");
        console.log()
    };
    
    return(
        <div>
            <button onClick={addFunc()}>Add</button>
            <button onClick={deleteFunc()}>Delete</button>

        </div>
    );


};
export default AddDeleteFunc;
    