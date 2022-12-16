import React from "react";
import './Photo.css'
export default function Navbar(){
    return(
      <nav className="navbar">
           <nav className="nav-header">
            <img src="./logo512.png" height="60px"/>
            <h3>Display card</h3>
            </nav>
            <nav className="nav-items">
            <ul className="nav-list">
              <div className="drop">
              <a className="dropdown" href="#"><li>Menu</li>
              <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
              </div>
              </a>

              </div>
          
            
            <a href="#"><li>contact</li></a>
            <a href="#"><li>phone </li></a>
            <a href="#"><li>about</li></a>
            </ul>
      </nav>

      </nav>
   
    )
}