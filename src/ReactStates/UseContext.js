import React , {createContext, useState , useContext} from "react"
// export default function Component1(){
//     const[text, setText] = useState('Rahul')
//     return(
//             <div>
//             <h2>hello 1 {text}</h2>
//             <Component2 text={text}/>
//         </div>
//     )
// }
// function Component2({text}){

//     return(
//             <div>
//             <h2>hello 2 </h2>
//             <Component3 text={text}/>
//         </div>
//     )
// }
// function Component3({text}){

//     return(
//             <div>
//             <h2>hello 3 {text}</h2>
//             {/* <Component3 text={text}/> */}
//         </div>
//     )
// }

const UserContext = createContext();
export default function Component1(){

    const[text , useText] = useState('Rahul')

    return(
        <div>
            <UserContext.Provider value={text}>
            <h3>Hello {text}</h3>
            <Component2/>

            </UserContext.Provider>
        </div>
    )
}
function Component2(){
    const text = useContext(UserContext)

        return(
                <div>
                <h2>hello 2 {text}</h2>
                <Component3 />
            </div>
        )
    }
    function Component3(){
        const text = useContext(UserContext)
    
        return(
                <div>
                <h2>hello 3 {text}</h2>
                {/* <Component3 text={text}/> */}
            </div>
        )
    }
