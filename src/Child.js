
import GrantChild from "./GrantChild";
function Child(props){
    return(
        <div>
            <h1>your hobby is {props.hobby}</h1>
            <GrantChild city={'trichy'}/>
        </div>
    )
}
export default Child;