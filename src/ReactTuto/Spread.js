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
//splice and slice methods used here
    const spliceMethod = ['Rahul' , ' str ' , 'vijay' , 'mbappe', 'messi' , 'ronaldo']
    spliceMethod.splice(1,1,'ssss')
    console.log(spliceMethod)
    const sliceMethod = ['Rahul' , ' str ' , 'vijay' , 'mbappe', 'messi' , 'ronaldo']
    console.log(sliceMethod.slice(1 , 2))

   
   //Sorting , sorting(Ascending), sorting(descending)

    const sortNum = [1, 200, 40, 5]
    console.log(sortNum.sort())
    const AnsSortAsc= sortNum.sort((a,b)=>{return a-b})
   console.log(AnsSortAsc)
    const AnsSortDec= sortNum.sort((a,b)=>{return b-a})
    console.log(AnsSortDec)

    
 
  console.log('arrow function for answer')
 

    console.log(Array.of(1,2,3,4))

    const redANs= [1,2,3,4]
    const suMReduce = redANs.reduce((accumulator, current)=>{
        return accumulator + current
    })
    console.log(suMReduce)




    //Arrow functions ]
    const number = num=> num*num
    console.log(number(5))
    
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