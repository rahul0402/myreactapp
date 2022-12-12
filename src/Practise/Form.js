import React from 'react';
const RahulForm = ()=>{
  
  const activate =()=>{
    alert('Are you sure ?')
  }
    return(
     
      <form>
         <h1>Application form</h1>
  
     
        <h4><label>User Name : </label></h4>
          <input type = "text"/>
   
          <h4><label>Age : </label></h4>
          <input type = "number"/><br/>
  
          <h4><label>Gender : </label></h4>
              <input type = "radio" name = 'Gender'/>
              <label>Male </label>
              <input type = "radio" name = 'Gender'/>
              <label>Female </label>
          
  
  
          <h4> <label>Email : </label></h4>
              <input type = "email"/><br/>
  
          <h4>  <label> Courses :
                <select>
                    <option value = "----" selected>-------------</option>
                    <option value = "PHP">PHP</option>
                    <option value = "HTML">HTML</option>
                    <option value = "CSS">CSS</option>
                 </select></label>
            </h4>
     <button onClick={activate}>Submit</button>
       </form>
    )
    
  }
  
export default RahulForm;