import React, { useState } from "react";
//overall fucntion starts
const EventHand = ()=> {



 const[name , setName] = useState('Rahul')
    const nameChange = ()=>{

        const emp = ['rahul' , ' str' , 'vijay' , 'arun' , 'muthu' , 'selvan' , 'balaji' , 'javidh']
        const empid = Math.floor(Math.random()*(emp.length))
        console.log(emp[empid])
        setName(emp[empid])
    }
    




    //inner function to get random names
    const nameShown = ()=>{
        const emp = ['rahul' , ' str' , 'vijay']
        const empid = Math.floor(Math.random()*3) //random num btn 1,2,3
        //console.log(emp[empid])
        return emp[empid]
       
    //it returns an random name so it can be showed in an paragraphn tag
    }


    //first event just log the print words
    const handleClick = ()=> {
        console.log("buttton is clicked")
    }
    //second event to take the name 
    const handleClick2 = (name)=>{
        console.log(`the ${name} was clicked  `)
    }

    //third event to take which type of event
    const handleClick3 = (e)=>{
        console.log(e.target.innerText)
    }
    

 

     
    return(
        <div>
           <p>hello {name}</p> 
            <button onClick={handleClick}>Name</button>
            <button onClick={()=>{handleClick2(nameShown())}}>Name2</button>
            <button onClick={(e)=>{handleClick3(e)}}>Name3</button>
            <button onClick={nameChange}>Name4</button>

        </div>
    )
}
export default EventHand;