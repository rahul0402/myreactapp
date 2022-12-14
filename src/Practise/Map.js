import React from "react";
const array=['ram' , 'raj' ,  'vanakam'];
const Map = array.map((value)=>{
    return value[0] + value.slice(1);
})
console.log(Map);

