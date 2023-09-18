import React, {useState, useRef} from 'react';

function Navbar(){

    //Functionality for Toggle NavBar menu
    const [isClicked, setIsClicked] = useState(false);
    const navRef = useRef(null);

    const toggleBtnClickHandler = () => {
        setIsClicked((prevState) => !prevState);
        navRef.current.classList.toggle("open");
    };

    const navLinkClickHandler = () => {
        if (isClicked) {
          setIsClicked(false);
          navRef.current.classList.remove('open');
        }
      };

    return(
        <nav>
        <div className={`togglebtn ${isClicked ? "click" : ""}`} onClick={toggleBtnClickHandler}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className="navlinks" ref={navRef}>
            <li><a href="#home" onClick={navLinkClickHandler}>HOME</a></li>
            <li><a href="#about" onClick={navLinkClickHandler}>ABOUT</a></li>
            <li><a href="#skills" onClick={navLinkClickHandler}>SKILLS</a></li>
            <li><a href="#contact" onClick={navLinkClickHandler}>CONTACT ME</a></li>
        </ul>
    </nav> 
    );
}

export default Navbar;