
import React from "react"
import { useState } from "react"
import { Button } from 'react-bootstrap';
export default function Exercise(){
const[dueDate , setdueDate] = useState(Date())



const setDue =()=>{
    var date1 = new Date();
var date2 = new Date("01/5/2023");
var Difference_In_Time = date2.getTime() - date1.getTime();

// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    console.log((setdueDate(Math.floor(Difference_In_Days))))
   
}


    
    return (
        <div>
            <h2>hai {dueDate}</h2>
        <h1><Button onClick={setDue} > hello </Button></h1>
            
        </div>
    )




// A function which returns the last item of a given array



}