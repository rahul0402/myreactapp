
import React, { useEffect, useState } from "react"
export default function Exercise(){
    const[width , setWidth] = useState(window.innerWidth)

    const setResizeWidth=()=>{
        setWidth(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener('resize' , setResizeWidth)
    } , [])

    
    return (
        <div>
            <h2>{width}</h2>
            
        </div>
    )
}
