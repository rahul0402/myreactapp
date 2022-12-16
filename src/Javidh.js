import React , {useState}from 'react';

export default function CountFunc(){
    const arr=[1,2,3,4];
    //console.log(arr)
    const[count , setCount] = useState(0);
    return(
        <div>
            you clicked me {count} times.
            
        <button onClick={()=>{
            setCount(count+1)
        }}> Click me</button>

        </div>
        
    )
}