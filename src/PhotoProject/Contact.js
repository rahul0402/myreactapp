import React from "react";
import './Contact.css'
export default function Contact(props){
    return(
        
            <div className="Con-Section">
                <img className="contact-image" src={props.name}/>
                <h3 className="contact-heading">{name}</h3>
                <div className="contact-info">
                    <img className="contact-png" src="../assets/star.png"/>
                    <p className="contact-para">Mango</p>
                    </div>
                    <p className="contact-email">{email}</p>

                
            

            </div>
            
    )
}