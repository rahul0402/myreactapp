import React from "react";
export default function Object(){
   
 
   

//     //objects methods
//     let ans = {
//         name:'rahul',
//         age:'24',
//         sibling:{
//             brother:'arun',
//             sister:'aruni'

//         }
//     }

//     //DAte Methods
//     let array = ['rahul' , 'aruy' , 'seens']
//     let hour = new Date().getHours();
    

//     // while Loops
//     let i = 15;
//     while(i>=1){
//         if(i%2==0){
//             console.log("number"+ i)
//         }
//         i--;
//     }

//     // for-In loopps for objects 
//     let answer = {
//         name:'rahul',
//         age:'24',
//         sibling:{
//             brother:'arun',
//             sister:'aruni'

//         }
//     }
//   for(let key in answer){
//     console.log(key)
//     console.log(answer[key])
//     console.log(key +   " : " + answer[key])
//   }

//   // for-in loops for arrays
// let arr = ['rahul' , 24 , 'belwin' , true]
// for(let key in arr){
//     console.log(key)
//     console.log(arr[key])
//     console.log(typeof(arr[key] + ':' + arr[key]))
// }

// //for of loops in array
// let arrs = ['rahul' , 24 , 'belwin' , true]
// for(let forof of arrs)
// {
//     console.log(forof)
// }

// //objects and oops 
// let answers = {
//     name:'rahul',
//     age:'24',
//     sibling:{
//         brother:'arun',
//         sister:'aruni'

//     }
// }
// function greeting(){
//     let msg = `Hello My name is ${answers.name} and I'm ${answers.age} and I have two siblings named ${answers.sibling.brother} and ${answers.sibling.sister}`;
// console.log(msg)

// }
// greeting(); 

// //functions neste dinside the object declaration
// let persons = {
//     name:'rahul',
//     age:'24',
//     sibling:{
//         brother:'arun',
//         sister:'aruni'

//     },
//     greeting: function(){
//         let msg = `Hello My name is ${this.name} and I'm ${this.age} and I have two siblings.`;
// console.log(msg)
// }
// };
// persons.greeting(); 



// /// factory functions 


// function greetPersons(names){
//     return{
//         name:names,
//     age:'24',
//     sibling:{
//         brother:'arun',
//         sister:'aruni'

//     },
//     greeting: function(){
//         let msg = `Hello My name is ${this.name} and I'm ${this.age} and I have two siblings.`;
//             console.log(msg)
         

//     }
// };
// }
// let Rahul = greetPersons('Rahul');
// Rahul.greeting()
// let Ilakiya = greetPersons('ilakiya')
// console.log(Rahul)
// Ilakiya.greeting()




// //simplified object calling in oop
// function createAll(name){
//   return{
//     name,
//     greets(){
//         let msg = `Hello My name is ${this.name}`
//         console.log(msg)

//     }
//   };
// }
// let out = createAll('rahul')
// out.greets()



// //constructor functions 
// //Dynamic objects 
// const dynamic = {
//     name: 'rahul'
// }
// dynamic.age = 24;
// dynamic.greetingBoy = function(){}
// delete dynamic.greetingBoy;
// dynamic.name= 'str'

// console.log(dynamic)


// //math Functions---------------------------

//  let length='rahul belwin'
//  console.log(length.split(''))
//  const orders=[
//     {
//         id:1,
//     item:'SmartPhones',
//     quantity:3

//     },
//     {
//         id:2,
//         item:'lap',
//         quantity:1

//     }

//  ]
//  //let result = orders.findIndex(function(order){
//     //return order.item==='lap'
//  //})
//  //console.log(result)
//  let arrow = orders.find( (order) => order.item==='lap')
//  console.log(arrow)
  
    
 

//Arrays-------------------------------
// //emptying an  array---------------------
// let srr=[1,2,3,4,5]
// console.log(srr)
// srr=[]
// console.log(srr)

// slicing , combining and extracting---------------------------------

// const some = ['arun' , 'raj', 'kumar']
// const other = ['aruns' , 'rajs', 'kumars']
// let someOther = some.concat(other)
// console.log(someOther)
// let soms = someOther.slice(0,3)
// console.log(soms);



//for-each loops--------------------------------------- 

// const fork =[1,2,3,4,5]
// fork.forEach(function(value){
//     //console.log(value)
// })

// //Arrow function------------------------------------------
// const forks =[1,2,3,4,5]
// forks.forEach(
//     (value)=>console.log(value)
// )



// // joining and splitting----------------------------------
// let joining = forks.join()
// let joiningWith = forks.join(', ')
// console.log(joining)
// console.log(joiningWith)
// console.log(joiningWith.length)
// console.log(joiningWith.split(''))


// let pos = 'this is rahul belwin'
// console.log(pos.split())
// console.log(pos.length)
// console.log(pos.replace('belwin', 'str'))

//Sorting of an array--------------------------------------

// //descending order----------------------------------
// const students = [2,5,9,4,1,10,6]
// students.sort(
//     (a,b)=> {return b-a} )

// //console.log(students)

//Ascending order-----------------------------------
students.sort(
    (a,b)=>{
        return a-b
    }
)
//console.log(students)


///sorting in array objects ---------------------------------
const stud = [
    { id:1, name:'rahul'},
    { id:6, name:'aumna'},
    { id:2, name:'str'}
]
// console.log(stud)
stud.sort(
    (a,b)=>{
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
         return 0;
        
    }
)
//console.log(stud)

// primitives in arrays -----------------------------
const age=[22,17,60]
let isAllowed = age.every(function(value){
    return value >=18
})
console.log(isAllowed)
let isSomeParents = age.some(function(value){
    return value >=18
})
console.log(isSomeParents)


// Filtering the arrays----------------------

const StudAges=[22,33,17,44]
let Adults = StudAges.filter(function(value){
    return value>=18
})
//console.log(Adults)

const numbers =[1,2,3,4,5,6,7,8,9,10]
let sepOddEven = numbers.filter(function(value){
  return !(value % 2 === 0)  
  
})
console.log(sepOddEven)


// List of Objects ---------------------------------------
const phones = [
    {id : 2 , phone: 'samsung' , rate: 17000},
    {id : 5 , phone: 'apple' , rate: 60000},
    {id : 9 , phone: 'redmi' , rate: 24000}
]
let qualityPhones = phones.filter(function(value){
    return value.rate >= 24000
})
console.log(qualityPhones)

//Find method in array------------------------

let findPhones = phones.lastIndexOf(function(value){
    return value.rate <= 24000
})
console.log(findPhones)


//Map functions------------------------------------
const people = [
    {id:1 , fname:'Rahul' , lname:'Belwin'},
    {id:3 , fname:'Arun' , lname:'kumar'},
    {id:2 , fname:'vishal' , lname:'kumaran'}]
    let finalName = people.map(function(value) {
        let objfinal = [value.fname, value.lname].join(' ');
        let obj = {id: value.id , fullname : objfinal}
        return obj
        //return value.fname + value.lname
    })
    //console.log(finalName)
    //console.log(objfinal)


// //chaining methods--------------------------------
const itemsArr =[
    {id : 2 , phone: 'samsung' , rate: 17000},
    {id : 5 , phone: 'apple' , rate: 60000},
     {id : 9 , phone: 'redmi' , rate: 24000}
    ]
    //sort it using lowest price 
    let lowestPrice = itemsArr.sort((a,b)=>{
            if(a.rate < b.rate)  return -1
            if(a.rate > b.rate)  return 1
            if(a.rate === b.rate)  return 0


    })
    //sort it using names 
    let ascTitle = itemsArr.sort((a,b)=>{
        if(a.phone < b.phone)  return -1
        if(a.phone > b.phone)  return 1
        if(a.phone === b.phone)  return 0


})

let prodPrices = itemsArr.filter((value)=>{
    return value.rate <=24000

})

//sort it using lowest price 
let mappingItems = itemsArr.map((value) => {
    let comName = [value.phone , value.rate].join('- $' )
    let objSucc = {phone : comName}
    return objSucc

})
    console.log(lowestPrice)
   console.log(ascTitle)
    console.log(prodPrices)
    console.log(mappingItems)
    //console.log(objSucc)



// //Reducing Methods in javaScript------------------------------
const numberred =[1,2,3,4,5,6,7,8,9,10]
let redANs = numberred.reduce(function(previousValue , currentValue){
    return previousValue + currentValue
})
console.log(redANs)

const itemsArrList =[
        {id : 2 , phone: 'samsung' , rate: 17000},
        {id : 5 , phone: 'apple' , rate: 60000},
         {id : 9 , phone: 'redmi' , rate: 24000}
        ]
        let arrListAns = itemsArrList.reduce((accumulator , currentval)=>{
        return accumulator + currentval.rate
        } , 0)
        //console.log(arrListAns)

const mapNum =[1,2,3,4,5]
let mapNums  = mapNum.map((acc , val)=>{
    return acc*val
})
// console.log (mapNums)



//fucntion hoisting---------------------------------------------
function add(){
    console.log('hello...!!!!')
}
add();
addd();
function addd(){
    console.log('hello...!!!!')
}

const summing = function (){
    console.log('str')
}
summing();
// summings();
const summings = function (){
    console.log('str')
}
summings();


//Slef Invoking functions-------------------------------------
((a,b)=>{
    let rest = a+b;
    console.log(rest)
})(5,6);


//function arguments--------------------------------------------
function sumExpense(){
    let totalSum=0;
    //arguemnts means that it can include no of items without limit 
    for(let i of arguments){
        totalSum += i;
    }
    return totalSum;
}
let totalExpense = sumExpense(232,66,25,22,10,10,10,10,1,0)
console.log(`the total expense of all products is ${totalExpense}`)



//Getters and setters -----------------------------------------
// let employee = {
//     fname : 'rahul',
//     lname :'str',
//     get fullnames(){
//         return `${employee.fname} ${employee.lname}`
//     },
//     set fullnames(value){
//         let values = value.split(' ');
//         this.fname = values[0];

//     }
// }
// employee.fullnames= 'Thalapathy'
// console.log(employee)

// try{
//     let stringName = 2
// }


// if(typeof(stringName) != 'string'){
//     const err =new Error('this is not an string ')
//     throw err
// }


// try{
//     let errorMsg = "arubn"
//     if(typeof(errorMsg)!= 'string'){
//         const err = new Error('Its not an String')
//         throw err
//     }
// }
// catch(exce){
//     console.log(exce)
//     alert(exce)
  

// }

    return(
        <div>
            <h3>Hello JavaScript</h3>
        </div>
    )


}