import { useState } from "react";
import React from "react";
export default function Colors(){
    const [color , setColor] = useState('Red')
    return(
       <div>
        <h3>The Favortite color is {color}</h3>
        <button type="button" onClick={()=>setColor('blue')}>BlueColor</button><br/>
        <button type="button" onClick={()=>setColor('red')}>RedColor</button><br/>
        <button type="button" onClick={()=>setColor('green')}>GreenColor</button><br/>
        <button type="button" onClick={()=>setColor('orange')}>OrangeColor</button><br/>
        <button type="button" onClick={()=>setColor('white  ')}>WhiteColor</button><br/>

       </div>
    )

}