import React from "react";
export default function Object(){

    //objects methods
    let ans = {
        name:'rahul',
        age:'24',
        sibling:{
            brother:'arun',
            sister:'aruni'

        }
    }

    //DAte Methods
    let array = ['rahul' , 'aruy' , 'seens']
    let hour = new Date().getHours();
    

    // while Loops
    let i = 15;
    while(i>=1){
        if(i%2==0){
            console.log("number"+ i)
        }
        i--;
    }

    // for-In loopps for objects 
    let answer = {
        name:'rahul',
        age:'24',
        sibling:{
            brother:'arun',
            sister:'aruni'

        }
    }
  for(let key in answer){
    console.log(key)
    console.log(answer[key])
    console.log(key +   " : " + answer[key])
  }

  // for-in loops for arrays
let arr = ['rahul' , 24 , 'belwin' , true]
for(let key in arr){
    console.log(key)
    console.log(arr[key])
    console.log(typeof(arr[key] + ':' + arr[key]))
}

//for of loops in array
let arrs = ['rahul' , 24 , 'belwin' , true]
for(let forof of arrs)
{
    console.log(forof)
}

//objects and oops 
let answers = {
    name:'rahul',
    age:'24',
    sibling:{
        brother:'arun',
        sister:'aruni'

    }
}
function greeting(){
    let msg = `Hello My name is ${answers.name} and I'm ${answers.age} and I have two siblings named ${answers.sibling.brother} and ${answers.sibling.sister}`;
console.log(msg)

}
greeting(); 

//functions neste dinside the object declaration
let persons = {
    name:'rahul',
    age:'24',
    sibling:{
        brother:'arun',
        sister:'aruni'

    },
    greeting: function(){
        let msg = `Hello My name is ${this.name} and I'm ${this.age} and I have two siblings.`;
console.log(msg)
}
};
persons.greeting(); 



/// factory functions 


function greetPersons(names){
    return{
        name:names,
    age:'24',
    sibling:{
        brother:'arun',
        sister:'aruni'

    },
    greeting: function(){
        let msg = `Hello My name is ${this.name} and I'm ${this.age} and I have two siblings.`;
            console.log(msg)
         

    }
};
}
let Rahul = greetPersons('Rahul');
Rahul.greeting()
let Ilakiya = greetPersons('ilakiya')
console.log(Rahul)
Ilakiya.greeting()




//simplified object calling in oop
function createAll(name){
  return{
    name,
    greets(){
        let msg = `Hello My name is ${this.name}`
        console.log(msg)

    }
  };
}
let out = createAll('rahul')
out.greets()



//constructor functions 
//Dynamic objects 
const dynamic = {
    name: 'rahul'
}
dynamic.age = 24;
dynamic.greetingBoy = function(){}
delete dynamic.greetingBoy;
dynamic.name= 'str'

console.log(dynamic)


//math Functions

 let length='rahul belwin'
 console.log(length.split(''))
 const orders=[
    {
        id:1,
    item:'SmartPhones',
    quantity:3

    },
    {
        id:2,
        item:'lap',
        quantity:1

    }

 ]
 //let result = orders.findIndex(function(order){
    //return order.item==='lap'
 //})
 //console.log(result)
 let arrow = orders.find( (order) => order.item==='lap')
 console.log(arrow)
  
    
 



    return(
        <div>

        </div>
    )
}