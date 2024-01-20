import React from 'react';
import './Navbar.css';

const Navbar = () => {
   return ( 
   <nav>
    <div className='logo-item'><img src='udupi_logo.jpg' alt='udupi logo'/></div>
        <ul>
            
            <li><a href="#home">Home</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#todo">Things to Do</a></li>
            <li><a href="#reach">How to Reach</a></li>
            <li><a href="#stay">Stay</a></li>
        </ul>
    </nav>
)}

export default Navbar;