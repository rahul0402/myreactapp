import React from "react";
// const MyArray = ['i' , 'am' , 'working']
// const ansArray=MyArray.join(' , ')
// console.log(ansArray)
// console.log(Math.random()*10)
// console.log(Math.floor(Math.random()*10));
// const newString = 'I am  String'
// console.log(typeof(newString))
// const ansString = newString.replace('String' , 'Rahul')
// console.log(ansString)
// const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];


//map method 


//with using props 
function NavMenu(props) {
    // const list = props.Menu;


    // const updatedList = list.map((item)=>{return  <li>{item}</li>})

    // return <ul>{updatedList}</ul>
// }
const Menu = [1,2,3,4,5]
function Sum(Menu){
    let ans = 0;
    for(let i = 0 ; i<Menu.length ; i++){
        ans = ans + Menu[i]
    }
    console.log(ans)

  
}
Sum(Menu)




return (
    <div>
        
    </div>
)

}
export default NavMenu

