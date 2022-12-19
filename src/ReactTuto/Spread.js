//import { containerClasses } from "@mui/system";
import React from "react";
// const Spread = ['Rahul' , ' str ' , 'vijay' , 'mbappe', 'messi' , 'ronaldo']
// const copyArray =[...Spread]
// console.log(typeof(Spread))
// console.log(Spread)
// console.log(typeof(copyArray))
// console.log(copyArray)

import { useState } from "react";


const UseStatesEx = ()=>{
    const iniState = 0;
    const[count , setCount] = useState(iniState)
    const increfunc = ()=>{
        setCount(count+1)
    }
    const decrefunc = ()=>{
        setCount(count-1)
    }
const [studentNames , studFunc] = useState(['Rahul' , 'str'])


const addNames =()=>{
    //studFunc([...studentNames , 'vijay' , 'belwin'])
    //studFunc(nameSpread => [...nameSpread , 'vijay' , 'belwin'])
    studFunc((nameSpread) => [...nameSpread , 'vijay' , 'belwin'])

}


//Arrays of object in useState
const [empName , setEmpName] = useState(
    [
        {id: 1 , name:'Rahul'},
        {id: 2 , name:'Simbu'},
        {id: 3 , name:'Thalapathy'},
    ]
    )
    const empDetailsFunc=()=>{

        //syntax
        //funcName([...variableName , {values to be inserted should mentioned in curly braces }])
        setEmpName([...empName , {id: ++empName.length , name:'Ronaldo'} , {id:++empName.length, name:'Messi'}])
    }
    
    return(
        <div>
            <h3>Count : {count}</h3>
            <h3>{studentNames}</h3>
            <ul>
                {
                    studentNames.map(value =>{
                         return <li key = {value}>{value}</li>
                    }
                        
                    )
                }
 
            </ul>
            <button onClick={increfunc}>Increment</button>
            <button onClick={decrefunc}>Decrement</button>
            <button onClick={()=>setCount(iniState)}>Reset</button>
            <button onClick={()=>{setCount(count+1)}}>increment Arrow</button>
            <button onClick={()=>setCount(count-1)}>decrement Arrow</button>
            <button onClick={addNames}>Add Names </button>
            <ul>
                {
                   empName.map((value) => {
                    return <li id={value.id}><b>{value.id}</b> {value.name}</li>
                   })
                        
                    
                }
 
            </ul>
            <button onClick={empDetailsFunc}>ADD Employee</button>
        </div>
    )
}


export default UseStatesEx;