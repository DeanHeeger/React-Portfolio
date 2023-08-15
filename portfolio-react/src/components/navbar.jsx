import React, {useState, useRef} from 'react';

function Navbar(){

    //Functionality for Toggle NavBar menu
    const [isClicked, setIsClicked] = useState(false);
    const navRef = useRef(null);

    const toggleBtnClickHandler = () => {
        setIsClicked((prevState) => !prevState);
        navRef.current.classList.toggle("open");
    };

    return(
        <nav>
        <div className={`togglebtn ${isClicked ? "click" : ""}`} onClick={toggleBtnClickHandler}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className="navlinks" ref={navRef}>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#contact">CONTACT ME</a></li>
        </ul>
    </nav> 
    );
}

export default Navbar;