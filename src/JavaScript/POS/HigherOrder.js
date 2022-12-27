import React from "react";
import { posts } from "./RawData";
export default function Higher(){

    //FOrEach loops i sused to iterate throw all the elements
    //posts.forEach((post)=>{console.log(post  )})

    //FIlter is used select tthe particullar items which the user wants
const filteredPosts = posts.filter((post)=>{
    return post.userId==1
})
//console.log(filteredPosts)

//map is also used to iterate through all the elemts and perform operations

const mappedFilter = filteredPosts.map((post)=>{return post.id*10 })
//console.log(mappedFilter)
//Reduce Method is used to reduce the large values into small/less values
    return(
        <div>
       
            
        </div>
    )
}