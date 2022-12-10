function RahulForm(){
    return(
     
      <form>
         <h1>Application form</h1>
  
     
        <h2><label>User Name : </label></h2>
          <input type = "text"/>
   
          <h2><label>Age : </label></h2>
          <input type = "number"/><br/>
  
          <h2><label>Gender : </label></h2>
              <input type = "radio" name = 'Gender'/>
              <label>Male </label>
              <input type = "radio" name = 'Gender'/>
              <label>Female </label>
          
  
  
          <h2> <label>Email : </label></h2>
              <input type = "email"/><br/>
  
          <h2>  <label> Courses :
                <select>
                    <option value = "----" selected>-------------</option>
                    <option value = "PHP">PHP</option>
                    <option value = "HTML">HTML</option>
                    <option value = "CSS">CSS</option>
                 </select></label>
            </h2>
     
          <input id = "Demo" type="submit"/>
       </form>
    )
    
  }
  
export default RahulForm;