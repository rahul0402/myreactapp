import {useState , useEffect } from "react";
import React from "react";

const CounterEffect = ()=>{
    const[count , setCount]=useState(0)
    const[msg , setMsg]=useState('hello')




    //Second arguement should be of array dependencies 
    useEffect(
        
        ()=>{ 
          console.log(count+1)
        }
    )
    const increFunc=()=>{
        setCount(count+1)
    }
    const increMsg =()=>{
        setMsg('vanakam')
       

    }

    //UseEffect Window width auto updates 
    const[windowWidth , setWindowWidth ] = useState(window.innerWidth)
    const handleSize = ()=>{
        setWindowWidth(window.innerWidth)
    }
    useEffect(()=> {
        window.addEventListener('resize' , handleSize)
    },[])
    return(
        <div>
        <h1>hello</h1>
        <p>Count is {count}</p>
        <button onClick={increFunc}>Click mee</button>
        <h3>The Message is {msg}</h3>
        <button onClick={increMsg}>Click msg</button>
       

        <h3>The width of the window is {windowWidth}</h3>

    </div>
        
    )
  
}
export default CounterEffect;