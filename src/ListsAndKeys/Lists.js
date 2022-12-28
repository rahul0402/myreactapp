import React, { useState } from 'react'
export const Datas = ({title})=>{
   const[items , setItems] =useState([
    {
        id: 1,
        checked : true , 
        item : 'item1'
    },
    {
        id: 2,
        checked : false , 
        item : 'item2'
    },
    {
        id: 3,
        checked : false, 
        item : 'item3'
    }

   ]


   );
//to check the items in checkboxes


    const handleCheck = (id)=>{
    const listItems = items.map((item) => item.id===id ? {...item , checked: !item.checked} : item)
    console.log(`Checking id  : ${id}`)
    setItems(listItems)
    
   }

   //dleteing the items in  the list which are created 


    const handleDelete = (id)=>{
    const listItems = items.filter((item) =>item.id !== id)
    setItems(listItems)
    console.log(`Deleting Id : ${id}`)
   }
      
    
    return(
        <div>
            <h2>hello <span>{title}</span></h2>
           <ul>
            {items.map((item)=>(
                <li>
                    <input type="checkbox"
                    checked={item.checked}
                    onChange={()=>{handleCheck(item.id)}}/>
                    <label>{item.item}</label>
                    <button onClick={()=>{handleDelete(item.id)}}>Delete</button>
                </li>

            )
                
            )}
            </ul>


        </div>

    )

}


