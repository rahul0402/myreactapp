import React,{useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
export default function UseStateTuto(){
    const[count , setCount] = useState(0)
    const[calculate , setCalculate]=useState(0)

    const countFunc =()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        setCalculate(count*2)
    } , [count])
    return (
        <div>
            <h3>Hello World!</h3>
            count = {count}
            <Button onClick={countFunc}>Click Me </Button>
            <br></br>
            <h3>The calculation is {calculate}</h3>
        
        </div>
    )

}