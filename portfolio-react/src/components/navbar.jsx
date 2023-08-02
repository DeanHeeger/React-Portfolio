import React from 'react';

function Navbar(){
    return(
        <nav>
        <div className="togglebtn">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className="navlinks">
            <li><a href="/">HOME</a></li>
            <li><a href="/">ABOUT</a></li>
            <li><a href="/">SKILLS</a></li>
            <li><a href="/">CONTACT ME</a></li>
        </ul>
    </nav> 
    );
}

export default Navbar;