
import React from 'react';
import ReactDOM from 'react-dom/client';
import DisplayCard from './Photoframe/Image/Image';
import  './Photoframe/Style.css'
import NameSection from './Photoframe/Name.js/Name';
import ButtonSection from './Photoframe/Buttons/Buttons';
import BodySection from './Photoframe/BodySection/BodySection';
import Footer from './Photoframe/Footer/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='container photoFrame'>
        <DisplayCard/>
        <NameSection/>
        <ButtonSection/>
        <BodySection/>
        <Footer/>


    </div>
 



);


