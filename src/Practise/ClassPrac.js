import React from 'react';
class Practise extends React.Component{
    constructor(props){

        super(props)
        //alert('clicked the button');
        this.state={
            id:"rahul",
            course : "java"
        }

    }
     Activate = (e)=>{
        alert('Hello')
        console.log(e)

     }
    render(){
        return(
<div>
    <button onClick={this.Activate}>click me</button>
    <p>this is {this.state.id} from {this.state.course}</p>
</div>
        )
        
    }
}
export default Practise;