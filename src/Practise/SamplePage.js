import React from "react";
import './Style.css'
    function Header(){
        return(

            <header className="nav-header">
            <nav className="nav">
                <img className="nav-image" src="./logo512.png"  alt="react-logo"/>
                <h3>React</h3>
                <ul className="nav-items">
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Login</li>
                </ul>
            </nav>
        </header>

        )
    }
    function Body(){
        return(
            <div className="body-component">
                {/* Children of the div */}
                  <h1 className="body-title">Rahul Tutorial</h1>
            <ul className="body-items">
                <li>hello</li>
                <li>hai</li>
                <li>vanakam</li>
            </ul>

            </div>
          

        )
    }
    


    function Page(){
        return(

            <div>
                <Header/>
                <Body/>
            </div>
            
            
        )

    }
  
    
   

  

export default Page;