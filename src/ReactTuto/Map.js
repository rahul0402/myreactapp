//import { Garage } from '@mui/icons-material';
import React, { Component } from 'react';

// const Colors =['Rahul' , ' str ' , 'vijay' , 'mbappe', 'messi' , 'ronaldo']

// const ColorsFull =['Rahul' , ' str ' , 'vijay' , 'mbappe', 'messi' , 'ronaldo']
// const AnsColor = Colors.map((img)=>{return img})
// console.log(AnsColor)
// const zero = [...AnsColor,...ColorsFull]
// console.log(zero)
// console.log(zero.length)

// export default Colors;

    function CarsDisp(props){
        return (
            <div>
                <h3>Hello {props.carsBrand}</h3>
            </div>
        )
    
}
function Garage(){
    const cars = ['bmw' , 'audi' , 'meta']
    return (
        <div>
            {
                  cars.map((cars)=> 
                <CarsDisp carsBrand={cars}/>) 

            }
        
            
        </div>
    )
}
export default Garage;

