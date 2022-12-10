import Child from "./Child";
function Parent(props){
    return(
        <div>
        <h1>your name is {props.name}</h1>
        <h1>your age is  {props.age}</h1>
        <Child hobby={'IT'}/>
        
    </div>
    )
}
export default Parent;