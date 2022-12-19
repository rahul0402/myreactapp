import { Delete } from "@mui/icons-material";
import React , { useState } from "react";
// const NameContent = ()=>{
//   const[name  , setName] = useState('Rahul')
//   const Naming = ()=> {
//     const emp = ['rahul' , ' str' , 'vijay' , 'arun' , 'muthu' , 'selvan' , 'balaji' , 'javidh']
//         const empid = Math.floor(Math.random()*(emp.length))
//         console.log(emp[empid])
//         setName(emp[empid])
//   }


  const ItemsList = ()=>{

    
    const [itemsRow , setItems] = useState([{
        id: 1, name : 'rahul' , checked: true},
        {
            id: 1, name : 'Str' , checked: false},
            {
                id: 1, name : 'Vijay' , checked: false}]);

        const handleCheck = (id)=>{
                    const listItems = itemsRow.map((item)=>item.id === id?   {...item , checked: !item.checked} : item)
                    setItems(listItems)
                }
               



  return(<div>
    {/* /* <p> welcome <h3>{name}</h3></p> */}
 


    
     <ol>
         {itemsRow.map(
            (item)=>(
            <li className="item" key={item.id}>
                <input type="checkbox" onChange={()=>handleCheck(item.id)}
                checked={item.checked}></input>
                
                <label>{item.name}</label>
                <Delete 
                role="button" />
            </li>
         )
         )}
    </ol>
   

  </div>)
}

export default ItemsList;